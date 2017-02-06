/* global chrome, console, JsonEditor, Ractive */
'use strict';

// https://github.com/evs-chris/ractive-json-editor
Ractive.components.JsonEditor = JsonEditor;
var r = new Ractive({
	el: '#main',
	template: '#mainTemplate',
	data: {
		obj: {}
	},
	onrender: function () {

		this.on('*.update', function () {

			// When developing this page outside of chrome dev tools
			if (!chrome || !chrome.devtools) {
				return;
			}

			var model = r.get('obj');

			function SetRactiveModel(obj) {
				var query = "$0._ractive ? $0._ractive.proxy.ractive ? $0._ractive.proxy.ractive.set(obj) : $0._ractive.root.set(obj) : false;";
				return eval(query);
			}

			var run = '(' + SetRactiveModel.toString() + ')(' + JSON.stringify(model) + ')';

			chrome.devtools.inspectedWindow.eval(run, function() {
				console.log('eval', arguments);
			});

		});
	}
});

var backgroundPageConnection = chrome.runtime.connect({
  name: 'panel'
});

var sendMessage = function (name, data) {
	backgroundPageConnection.postMessage({
		name: name,
		tabId: chrome.devtools.inspectedWindow.tabId,
		data: data || {}
	});
};

sendMessage('init');

//
// Messages recieved from background.js need a handler here to execute
// In v0.1 we don't have a feature requiring this but its all set up now for future versions
//
var handlers = {
	ractiveComponents: function (componentsList) {
		console.log('components found on page', JSON.stringify(componentsList));
	}
};

backgroundPageConnection.onMessage.addListener(function (message) {
	console.log('[X] panel recieved message from agent', message);
	var handler = handlers[message.name];
	if (!handler) {
		console.warn('No panel handler found for event ' + message.name);
		return;
	}

	handler(message.data);
});

var updateSelectedElement = function () {
	function GetRactiveObject() {
		var query = "$0._ractive ? $0._ractive.proxy.ractive ? $0._ractive.proxy.ractive.get() : $0._ractive.root.get($0._ractive.keypath.str) : false;";
		var ractiveModel = eval(query);

		return Object.keys(ractiveModel).filter(function (key) {
			return typeof ractiveModel[key] !== 'function';
		}).reduce(function (accum, key) {
			return Object.assign(accum, { [key]: ractiveModel[key] });
		}, {});
	}

	var run = '(' + GetRactiveObject.toString() + ')()';

	chrome.devtools.inspectedWindow.eval(run, function(results) {
		if (results && Object.keys(results).length) {
			r.set({
				'error': false,
				'obj': results
			});
		} else {
			r.set({
				'error': true,
				'obj': null
			});
		}
	});
};

chrome.devtools.panels.elements.onSelectionChanged.addListener(updateSelectedElement);
updateSelectedElement();

// This isnt required for inital release because we dont need any messages from content-scripts
// thanks to ember inspector for this technique:
// https://github.com/emberjs/ember-inspector/blob/master/app/adapters/chrome.js
var injectDebugger = function() {

	var injectedGlobal = 'window.__ractive_inspect_agent_injected__';

	chrome.devtools.inspectedWindow.eval(injectedGlobal, function(result) {
		if (!result) {
			// script hasn't been injected yet

			var xhr = new XMLHttpRequest();
			xhr.open('GET', chrome.extension.getURL('/scripts/agent.js'), false);
			xhr.send();
			var script = xhr.responseText;

			chrome.devtools.inspectedWindow.eval(script, function(result, err) {
				if (err) {
					console.error(err.value);
				}
				// sendMessage('connect');
			});
		} else {
			// we're already injected, so just connect
			// sendMessage('connect');
		}
	});
};

injectDebugger();
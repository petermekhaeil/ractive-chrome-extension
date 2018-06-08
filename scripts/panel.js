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

			chrome.devtools.inspectedWindow.eval(run);

		});
	}
});

var backgroundPageConnection = chrome.runtime.connect({
  name: 'panel'
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

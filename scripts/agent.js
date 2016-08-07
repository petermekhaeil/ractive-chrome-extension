/* global console */
'use strict';

var sendMessage = function (name, data) {
	console.log('sendMessage', arguments);
	window.postMessage({
		source: 'ractive-inspect-agent',
		name: name,
		data: data || {}
	}, '*');
};

var handlers = {
	getComponents: function () {
		var all = document.getElementsByTagName('*'),
			ractiveComponents = [];

		for (var i = 0; i < all.length; i++) {
			if (all[i]._ractive) {
				var _ractive = all[i]._ractive.root;
				if (_ractive.component) {
			  		ractiveComponents.push({
			  			id: _ractive._guid,
			  			name: _ractive.component.name
			  		});
			  	}
		 	}
		}

		sendMessage('ractiveComponents', ractiveComponents);
	}
};

var handleMessage = function (message) {
	console.log('agent onMessage', message);
	var handler = handlers[message.name];

	if (!handler) {
		console.warn('No agent handler found for event ' + name);
		return;
	}

	handler.call(this, message.data);
};


window.addEventListener('message', function (event) {
	// Only accept messages from same frame
	if (event.source !== window) {
		return;
	}

	var message = event.data;

	// Only accept messages of correct format (our messages)
	if (message === null || message.source !== 'ractive-inspect-devtools') {
		return;
	}

	console.log('[X] agent accepting message from dev tools');
	handleMessage(message);
});
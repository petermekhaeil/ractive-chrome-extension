/* global chrome, console */
'use strict';

var connections = {};

//
// agent -> content-script.js -> [background.js] -> dev tools
//
chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log('--> (background.js) request from agent to dev tools', request);
  if (sender.tab) {
    var tabId = sender.tab.id;
    if (tabId in connections) {
      connections[tabId].postMessage(request);
    } else {
      console.log("Error: Tab ID not found in connection list.");
    }
  } else {
    console.log("Error: sender.tab not defined.");
  }
  return true;
});


//
// agent <- content-script.js <- [background.js] <- dev tools
//
chrome.runtime.onConnect.addListener(function (port) {

  // Listen to messages sent from the DevTools page
  port.onMessage.addListener(function (request) {
    console.log('<-- (background.js) request from dev tools to agent', request);

    if (request.name === 'init') {
      connections[request.tabId] = port;

      port.onDisconnect.addListener(function() {
        delete connections[request.tabId];
      });

      return;
    }

    // TODO: use request.tabId once I work out why its not the correct tabId lol
    chrome.tabs.query({active:true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          name: request.name,
          data: request.data
        });
    });

  });

});
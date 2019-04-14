'use strict';

const connections = {};

chrome.runtime.onConnect.addListener(port => {
  const listener = (message, sender, sendResponse) => {
    // The original connection event doesn't include the tab ID of the
    // DevTools page, so we need to send it explicitly.
    if (message.name === 'init') {
      connections[message.tabId] = port;

      listener.navigated = details => {
        if (details.tabId === message.tabId && details.frameId === 0) {
          listener.init();
          port.postMessage({ event: 'navigated' });
        }
      };

      listener.init = () => {
        chrome.tabs.executeScript(message.tabId, {
          code: `(${function() {
            const listener = ev => {
              if (!ev.isTrusted || !ev.data || typeof ev.data !== 'object' || ev.data.source !== '__ractive_dev') {
                return;
              }
              if (ev.data.target === 'content' && ev.data.event === 'stop') {
                window.removeEventListener('message', listener);
              } else if (ev.data.target !== 'content') {
                try {
                  chrome.runtime.sendMessage(ev.data);
                } catch (e) {
                  window.removeEventListener('message', listener);
                }
              }
            };
            window.addEventListener('message', listener);
          }})()`
        });
      };

      chrome.webNavigation.onDOMContentLoaded.addListener(listener.navigated);

      return;
    } else if (message.name === 'initContentScript') {
      listener.init();
    } else if (message.name === 'frames') {
      chrome.webNavigation.getAllFrames({ tabId: message.tabId }, frames => {
        const res = [];
        for (const frame of frames) {
          if (frame.parentFrameId >= 0 && !res.includes(frame.url)) res.push(frame.url);
        }
        port.postMessage({ event: 'targetFrames', frames: res });
      });
    }
  }

  // Listen to messages sent from the DevTools page
  port.onMessage.addListener(listener);

  port.onDisconnect.addListener(port => {
    port.onMessage.removeListener(listener);
    chrome.webNavigation.onDOMContentLoaded.removeListener(listener.navigated);

    var tabs = Object.keys(connections);
    for (const tab of tabs) {
      if (tab == port) {
        delete conncections[tab];
        chrome.tabs.get(tab, t => {
          t.executeScript({ code: `window.postMessage({ source: '__ractive_dev', target: 'content', event: 'stop' }, '*');` });
          console.error(`Stopped for tab ${tab}`);
        });
        break;
      }
    }
  });
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Messages from content scripts should have sender.tab set
  if (sender.tab) {
    var tabId = sender.tab.id;
    if (tabId in connections) {
      connections[tabId].postMessage(request);
    } else {
      console.error(`Tab not found in connection list - ${tabId}`);
    }
  } else {
    console.error('sender.tab not defined.');
  }
  return true;
});
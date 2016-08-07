/* global chrome */
'use strict';

chrome.devtools.panels.elements.createSidebarPane(
	"Ractive Dev Tool",
	function (sidebar) {
		sidebar.setPage('panel.html');
	}
);
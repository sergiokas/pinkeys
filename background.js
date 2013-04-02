/*
 * Listen for toggle pin commands
 */
chrome.commands.onCommand.addListener(function(command) {
	if(command === "pinkeys-toggle-pin") {
		// Look for the currently selected tab (non-deprecated method)
		chrome.tabs.query(
			{currentWindow: true, active : true},
			// Toggle the pinned status of the selected tab.
			function(t){
				if(t[0]) {
					chrome.tabs.update(t[0].id, {pinned: !t[0].pinned});
				}
			}
		);
	}
});

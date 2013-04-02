// Run upon extension installation
function onInstall() {
	// Show desktop notification upon installation.
	// Find the command to make sure to display the right shortcut
	chrome.commands.getAll(function(commArray) {
		for(var i in commArray) {
			if(commArray[i].name === 'pinkeys-toggle-pin') {
				var notification = webkitNotifications.createNotification(
					'images/48.png', 'Pinkeys installed!',
					'Press ' + commArray[i].shortcut + ' to pin or unpin any tab'
				);
				notification.show();
				break;
			}
		}
	});

}

// Run upon extension update
function onUpdate() {}

// Get extension version
function getVersion() {
	return chrome.app.getDetails().version;
}

// Check if the version has changed.
var current = getVersion();
var previous = localStorage['version']
if (current !== previous) {
	// Check if we just installed this extension.
	if (typeof previous == 'undefined') {
		onInstall();
	} 
	else {
		onUpdate();
	}
	localStorage['version'] = current;
}

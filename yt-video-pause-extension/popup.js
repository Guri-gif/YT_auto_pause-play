const togglePause = document.getElementById('toggle-pause');

// Load saved state
chrome.storage.sync.get('autoPauseEnabled', (data) => {
    togglePause.checked = data.autoPauseEnabled !== undefined ? data.autoPauseEnabled : true;
});

// Listen for changes to the checkbox
togglePause.addEventListener('change', () => {
    chrome.storage.sync.set({ autoPauseEnabled: togglePause.checked });
});

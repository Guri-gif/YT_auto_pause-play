// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('YouTube Auto Pause/Play extension installed.');
});

// Respond to messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getAutoPauseEnabled") {
        chrome.storage.sync.get('autoPauseEnabled', (data) => {
            // Check if there's any error or undefined data
            if (chrome.runtime.lastError) {
                console.error("Error retrieving storage:", chrome.runtime.lastError);
                sendResponse({ autoPauseEnabled: true }); // Fallback if there's an issue
                return;
            }

            // Fallback to true if 'autoPauseEnabled' doesn't exist
            const autoPauseEnabled = (data && data.autoPauseEnabled !== undefined) ? data.autoPauseEnabled : true;
            sendResponse({ autoPauseEnabled });
        });
        return true; // Keep the message channel open for sendResponse
    }
});

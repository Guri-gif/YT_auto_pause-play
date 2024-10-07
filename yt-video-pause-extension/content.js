let isPaused = false;

// Function to pause the video
function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
        isPaused = true;
        console.log("Video paused");
    }
}

// Function to play the video
function playVideo() {
    const video = document.querySelector('video');
    if (video && isPaused) {
        video.play();
        isPaused = false;
        console.log("Video resumed");
    }
}

// Function to check if auto-pause is enabled
function checkAutoPauseEnabled(callback) {
    chrome.runtime.sendMessage({ action: "getAutoPauseEnabled" }, (response) => {
        callback(response.autoPauseEnabled);
    });
}

// Listen for visibility changes
document.addEventListener('visibilitychange', () => {
    checkAutoPauseEnabled((enabled) => {
        if (enabled) {
            if (document.hidden) {
                pauseVideo();
            } else {
                playVideo();
            }
        }
    });
});

// Ensure the video resumes play when returning to YouTube
window.addEventListener('load', () => {
    checkAutoPauseEnabled((enabled) => {
        if (enabled && !document.hidden) {
            playVideo(); // Play the video when the user returns to the tab
        }
    });
});

# YouTube Auto Pause Extension

A Chrome extension that automatically pauses YouTube videos when you switch tabs and resumes playback when you return. This extension helps improve focus by pausing videos when you're not actively viewing them.

## Features

- **Auto-Pause**: Automatically pauses YouTube videos when you leave the tab.
- **Auto-Resume**: Resumes playback when you return to the YouTube tab.
- **Customizable**: Enable or disable the auto-pause feature via a simple popup interface.
- **Efficient**: Saves user preferences using Chrome's `storage` API.

## Installation

### Method 1: Load Extension as Unpacked

1. **Download or Clone the Repository**:
   - To clone the repository:
     ```bash
     git clone https://github.com/YourUsername/YT_auto_pause-play.git
     ```
   - Alternatively, download the ZIP file from the repository and extract it.

2. **Open Chrome**:
   - Go to `chrome://extensions/` in your Chrome browser.
   - Enable **Developer mode** (top right corner).
   - Click on **Load unpacked**.
   - Select the folder where you have your extension files (the extracted/ cloned repository).

3. **Test the Extension**:
   - Open YouTube in a new tab, play a video, and switch to another tab to see the auto-pause functionality in action.
   - Return to the YouTube tab, and the video should resume playing automatically.

### Method 2: Install from Chrome Web Store (Coming Soon)

We plan to publish this extension on the Chrome Web Store. Stay tuned!

## How It Works

1. **Content Script**: The extension uses a content script that runs on YouTube pages. It detects when you leave the YouTube tab and pauses the video.
2. **Background Script**: It communicates with the content script to store the user's preferences for auto-pause and manages interactions with the Chrome `storage` API.
3. **Popup UI**: The extension features a simple popup with a checkbox for enabling or disabling the auto-pause functionality.

## Usage

- Once installed, the extension will automatically pause videos when you leave the YouTube tab. You can enable/disable this feature using the extension's popup.
  
## Contributing

We welcome contributions to improve this extension. Feel free to fork the repository and create a pull request for any improvements or bug fixes.

### Steps to Contribute:

1. Fork the repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YourUsername/YT_auto_pause-play.git

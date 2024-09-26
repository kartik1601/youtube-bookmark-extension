# YouTube Bookmark Extension

A Chrome extension that allows users to bookmark specific moments in YouTube videos, enhancing the viewing experience by enabling quick navigation to favorite parts of the content. This project utilizes Manifest V3 for improved performance and security.

## Features

- **Bookmark Creation**: Easily create bookmarks at any point in a YouTube video.
- **Playback Control**: Play bookmarked moments with a single click.
- **Bookmark Deletion**: Remove bookmarks effortlessly when no longer needed.
- **Persistent Storage**: Bookmarks are saved and retrieved from Chrome's storage, maintaining accessibility across sessions.

## Tech Stack

- **JavaScript**: For the main logic and interactions.
- **HTML/CSS**: For structuring and styling the popup interface.
- **Chrome Extensions API**: Utilizing Manifest V3 to enhance security and performance.
- **YouTube API**: Extending functionalities in the YouTube player.

## Getting Started

To get a local copy up and running, follow these steps:

### Option 1: Clone the Repository

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/youtube-bookmark-extension.git
   cd youtube-bookmark-extension
   ```

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (top right corner).
   - Click "Load unpacked" and select the directory where you cloned the repository.

### Option 2: Download as ZIP

1. **Download the ZIP**:
   - Go to the [repository releases page](https://github.com/kartik1601/youtube-bookmark-extension/releases) and download the latest ZIP file.

2. **Extract the ZIP**:
   - Extract the contents of the downloaded ZIP file to a folder on your computer.

3. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (top right corner).
   - Click "Load unpacked" and select the folder where you extracted the ZIP file.

## Usage

- Navigate to a YouTube video page.
- Click the extension icon to open the popup.
- Click the bookmark button to save the current timestamp.
- Use the play button to jump to your bookmarks.
- Use the delete button to remove currently saved bookmarks.

## Screenshots

![image](https://github.com/user-attachments/assets/e404d8fb-fec3-4c43-aca8-805c6f12dd8f)
![image](https://github.com/user-attachments/assets/00799d99-031a-42a4-95b2-3997cbb85af3)

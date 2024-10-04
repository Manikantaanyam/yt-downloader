# ytdl-core

ytdl-core (YouTube Download Core) is a powerful Node.js library that enables you to download YouTube videos directly from a given URL. With its rich features and customizable options, you can easily fetch and manage video and audio content from YouTube.

## Table of Contents

- [Key Features](#key-features)
- [Workflow](#workflow)
- [Basic Terminology](#basic-terminology)
- [Installation](#installation)

## Key Features

- **Video/Audio Downloading**: Download YouTube videos in various qualities and formats (video, audio, or both).
- **Customizable Download Options**: Choose specific formats (MP4, WebM, etc.), resolutions (144p to 4K), and filter options like audio-only or video-only.
- **Event and Progress Tracking**: Track the download progress, handle completion events, and manage errors during downloads.
- **Streaming Support**: Stream the video or audio directly into an output (like a file or a web response), perfect for building web apps or services.
- **Playlist Support**: Download entire YouTube playlists in bulk with minimal setup.

## Workflow

1. **Fetch Metadata**: The library first retrieves the metadata (such as title, duration, available formats, etc.) from YouTube.
2. **Select the Stream**: Based on your specified options (e.g., resolution, format), ytdl-core selects the appropriate stream for the video.
3. **Streams or Saves**: You can either stream the data directly (e.g., to a web response) or save it as a file (e.g., MP4 on your computer).

## Basic Terminology

- **Stream**: A way to handle downloading data chunk by chunk without loading the entire file in memory. Useful for large files like videos.
- **Format**: The video container (like MP4 or WebM). Some formats contain both audio and video, while others contain just one.
- **Resolution**: The quality or clarity of the video, usually measured in pixels (e.g., 720p, 1080p, 4K).
- **Audio/Video Codecs**: Define how the video or audio is compressed (e.g., H.264 for video, AAC for audio).

## Installation

To install ytdl-core, you can use npm:

```bash
npm install ytdl-core
```

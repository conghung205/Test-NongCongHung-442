# Short Video Feed

A short-video feed application inspired by TikTok, built with Next.js, TypeScript, and TailwindCSS.

## Features

- Vertical video feed with CSS Scroll Snap.
- Auto-play active video and auto-pause inactive videos.
- Audio control (mute/unmute and volume adjustment).
- Video and audio synchronization.
- Like / Unlike functionality.
- Global state management using React Context API.
- Responsive design for Mobile and Desktop.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- TailwindCSS v4
- React Context API
- React Icons

## Video Play/Pause Scrolling Logic

The auto-play and auto-pause logic when scrolling is handled efficiently using the **Intersection Observer API** combined with React Context:

1. **Detection**: Each `VideoCard` component registers itself with an `Intersection Observer` instance.
2. **Threshold**: We set a `threshold` of `0.6` (60%), meaning when a video occupies more than 60% of the viewport, it is considered the "active" video.
3. **State Management**: Once an active video is detected, its unique ID is dispatched to the global `VideoContext`.
4. **Execution**: Inside each `VideoCard`, a `useEffect` listens to the active ID from the context. If the current video's ID matches the active ID, `.play()` is triggered; otherwise, `.pause()` is called and the playback time resets if needed.

## Installation

```bash
npm install
npm run dev
```

## Assets

- Videos: Pexels
- Audio: Pixabay Music

Assets are used for educational and portfolio purposes.

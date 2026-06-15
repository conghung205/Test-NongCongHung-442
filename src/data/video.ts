import { VideoData } from "@/types/video";

export const mockVideos: VideoData[] = [
    {
        id: "1",
        videoUrl: "/videos/video-1.mp4",
        authorName: "hung_nong",
        authorImg: "/images/avatar-1.jpg",
        description: "chú mèo đáng yêu",
        likesCount: 120,
        audio: {
            title: "Funk & Breakbeat",
            artist: "AlexGuz",
            audioUrl: "/audios/audio-1.mp3",
        },
    },
    {
        id: "2",
        videoUrl: "/videos/video-2.mp4",
        authorName: "van_a",
        authorImg: "/images/avatar-2.jpg",
        description: "chú vẹt thông minh",
        likesCount: 220,
        audio: {
            title: "Dance Playful Night",
            artist: "AleXZavesa",
            audioUrl: "/audios/audio-2.mp3",
        },
    },
    {
        id: "3",
        videoUrl: "/videos/video-03.mp4",
        authorName: "nguyen van",
        authorImg: "/images/avatar-3.jpg",
        description: "Người đàn ông mạnh mẽ",
        likesCount: 330,
        audio: {
            title: "Stomp Drum Percussion",
            artist: "EnergySound",
            audioUrl: "/audios/audio-3.mp3",
        },
    },
    {
        id: "4",
        videoUrl: "/videos/video-4.mp4",
        authorName: "Tran thi B",
        authorImg: "/images/avatar-4.jpg",
        description: "Những chú cừu trên đồng cỏ xanh",
        likesCount: 171,
        audio: {
            title: "Funk & Breakbeat",
            artist: "AlexGuz",
            audioUrl: "/audios/audio-1.mp3",
        },
    },
];

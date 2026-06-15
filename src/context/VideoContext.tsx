"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { mockVideos } from "@/data/video";
import { VideoData } from "@/types/video";

interface VideoContextType {
    videos: VideoData[];
    toggleLike: (id: string) => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

export function VideoProvider({ children }: { children: ReactNode }) {
    // Khởi tạo videos từ mock data, thêm isLiked cho mỗi video
    const [videos, setVideos] = useState<VideoData[]>(
        mockVideos.map((v) => ({ ...v, isLiked: false })),
    );

    const toggleLike = (id: string) => {
        setVideos((prev) =>
            prev.map((v) =>
                v.id === id
                    ? {
                          ...v,
                          isLiked: !v.isLiked,
                          likesCount: v.isLiked
                              ? v.likesCount - 1
                              : v.likesCount + 1,
                      }
                    : v,
            ),
        );
    };

    return (
        <VideoContext.Provider value={{ videos, toggleLike }}>
            {children}
        </VideoContext.Provider>
    );
}

export function useVideoContext() {
    const context = useContext(VideoContext);
    if (!context)
        throw new Error("useVideoContext must be used within VideoProvider");
    return context;
}

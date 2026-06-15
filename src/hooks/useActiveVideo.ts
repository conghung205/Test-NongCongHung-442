import { useEffect, useRef, useState } from "react";
import { VideoData } from "@/types/video";

export function useActiveVideo(videos: VideoData[]) {
    const feedRef = useRef<HTMLDivElement>(null);
    const [activeVideoId, setActiveVideoId] = useState<string | null>(
        videos.length > 0 ? videos[0].id : null,
    );

    useEffect(() => {
        if (!feedRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const videoId = entry.target.getAttribute("data-id");
                        if (videoId) setActiveVideoId(videoId);
                    }
                });
            },
            { threshold: 0.6 },
        );
        const elements = feedRef.current.querySelectorAll(
            ".video-card-container",
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [videos]);

    return { feedRef, activeVideoId };
}

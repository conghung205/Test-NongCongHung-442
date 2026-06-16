"use client";
import VideoCard from "./VideoCard";
import { useState } from "react";
import { useActiveVideo } from "@/hooks/useActiveVideo";
import { useVideoContext } from "@/context/VideoContext";

function VideoFeed() {
    const { videos } = useVideoContext();
    const [isAudioActivated, setIsAudioActivated] = useState(false);
    const [globalVolume, setGlobalVolume] = useState(1);
    const { feedRef, activeVideoId } = useActiveVideo(videos);

    return (
        <div
            ref={feedRef}
            className="w-full h-full md:h-[85dvh] pb-15 md:pb-0 overflow-y-scroll scroll-smooth transition-all ease-in-out duration-200 snap-y snap-mandatory scrollbar-none flex flex-col gap-0 md:gap-6"
        >
            {videos.map((video) => (
                <div
                    key={video.id}
                    data-id={video.id}
                    className="video-card-container w-full h-full shrink-0 snap-start snap-always"
                >
                    <VideoCard
                        video={video}
                        isActive={video.id === activeVideoId}
                        isAudioActivated={isAudioActivated}
                        setIsAudioActivated={setIsAudioActivated}
                        volume={globalVolume}
                        setVolume={setGlobalVolume}
                    />
                </div>
            ))}
        </div>
    );
}
export default VideoFeed;

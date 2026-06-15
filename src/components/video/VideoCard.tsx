"use client";
import { VideoData } from "@/types/video";
import { FaPlay, FaPause } from "react-icons/fa6";
import React from "react";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import VolumeControl from "./VolumeControl";
import VideoInfo from "./VideoInfo";
import VideoActions from "./VideoActions";

interface VideoCardProps {
    video: VideoData;
    isActive: boolean;
    isAudioActivated: boolean;
    setIsAudioActivated: React.Dispatch<React.SetStateAction<boolean>>;
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
}

function VideoCard({
    video,
    isActive,
    isAudioActivated,
    setIsAudioActivated,
    volume,
    setVolume,
}: VideoCardProps) {
    const {
        videoRef,
        audioRef,
        volumeBarRef,
        showIcon,
        displayVolume,
        handleVideoClick,
        handleToggleMute,
        handleVolumeMouseDown,
    } = useVideoPlayer({
        isActive,
        isAudioActivated,
        setIsAudioActivated,
        volume,
        setVolume,
        audioUrl: video.audio?.audioUrl,
    });

    return (
        <div className="w-full h-full flex items-center justify-center md:gap-1.5 md:items-end relative">
            {video.audio?.audioUrl && (
                <audio ref={audioRef} src={video.audio.audioUrl} loop />
            )}

            <div
                onClick={handleVideoClick}
                className="w-full h-full md:w-auto md:aspect-9/16 md:h-full sm:rounded-2xl bg-black flex items-center justify-center relative group overflow-hidden"
            >
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    loop
                    muted
                    className="w-full h-full object-cover sm:rounded-2xl md:border md:border-zinc-800"
                />

                {/* Play/Pause */}
                {showIcon && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div className="bg-black/50 p-5 rounded-full text-white text-3xl animate-ping-once">
                            {showIcon === "play" ? <FaPause /> : <FaPlay />}
                        </div>
                    </div>
                )}

                {/* Volume */}
                <VolumeControl
                    displayVolume={displayVolume}
                    volumeBarRef={volumeBarRef}
                    handleToggleMute={handleToggleMute}
                    handleVolumeMouseDown={handleVolumeMouseDown}
                />

                {/* info */}
                <VideoInfo video={video} />
            </div>

            <div className="absolute right-3 bottom-2 z-30 md:relative md:right-auto md:bottom-auto">
                <VideoActions
                    authorImg={video.authorImg}
                    videoId={video.id}
                    likesCount={video.likesCount}
                    isLiked={video.isLiked ?? false}
                />
            </div>
        </div>
    );
}

export default VideoCard;

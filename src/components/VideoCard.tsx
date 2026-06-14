"use client";
import { VideoData } from "@/types/video";
import Image from "next/image";
import { FaRegCommentDots, FaShare, FaRegHeart } from "react-icons/fa";
import { FaPlus, FaVolumeXmark } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";

interface VideoCardProps {
    video: VideoData;
}
function VideoCard({ video }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const volumeBarRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [prevVolume, setPrevVolume] = useState<number>(0.7);
    const [showIcon, setShowIcon] = useState<"play" | "pause" | null>(null);

    const handleVideoClick = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
            setShowIcon("pause");
        } else {
            videoRef.current.play();
            setIsPlaying(true);
            setShowIcon("play");
        }
    };

    const handleVolumeUpdate = (clientX: number) => {
        if (!volumeBarRef.current) return;

        const react = volumeBarRef.current.getBoundingClientRect();
        const relativeX = clientX - react.left;

        let newVolume = relativeX / react.width;
        if (newVolume < 0) newVolume = 0;
        if (newVolume > 1) newVolume = 1;
        setVolume(newVolume);
    };

    const handleToggleMute = () => {
        if (volume > 0) {
            setPrevVolume(volume);
            setVolume(0);
        } else {
            setVolume(prevVolume > 0 ? prevVolume : 0.2);
        }
    };

    const handleVolumeMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleVolumeUpdate(e.clientX);

        // di chuột
        const handleMouseMove = (moveEvent: MouseEvent) => {
            handleVolumeUpdate(moveEvent.clientX);
        };

        // buông ra
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        // addEvent
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    useEffect(() => {
        if (showIcon !== null) {
            const timer = setTimeout(() => {
                setShowIcon(null);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [showIcon]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className="w-full h-full snap-start snap-always flex gap-1.5 items-end justify-center relative">
            {/* div 9:16 */}
            <div
                onClick={handleVideoClick}
                className="aspect-9/16 h-full sm:rounded-2xl bg-black flex items-center justify-center relative group"
            >
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    loop
                    className="w-full h-full object-cover sm:rounded-2xl sm:border sm:border-zinc-800"
                ></video>

                {showIcon && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div className="bg-black/50 p-5 rounded-full text-white text-3xl animate-ping-once">
                            {showIcon === "play" ? <FaPlay /> : <FaPause />}
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-4 text-white text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 p-2 rounded-full backdrop-blur-sm">
                    <HiDotsHorizontal />
                </div>

                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 left-4 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/40 p-2 px-3 rounded-full backdrop-blur-sm flex items-center gap-0 hover:gap-3 group/volume"
                >
                    <button
                        onClick={handleToggleMute}
                        className="text-xl p-1 cursor-pointer flex items-center justify-center"
                    >
                        {volume === 0 ? (
                            <FaVolumeXmark className="text-red-500" />
                        ) : (
                            <FaVolumeHigh />
                        )}
                    </button>

                    {/* progress */}
                    <div className="overflow-hidden transition-all duration-300 ease-out flex items-center w-0 group-hover/volume:w-24 h-5">
                        <div className="w-full h-full py-2 pl-2 pr-4 flex items-center select-none">
                            {/* Thanh ray nền màu xám */}
                            <div
                                ref={volumeBarRef}
                                onMouseDown={handleVolumeMouseDown}
                                className="w-full h-1.5 bg-zinc-600 rounded-full relative cursor-pointer"
                            >
                                {/* Thanh trắng chạy tiến trình */}
                                <div
                                    style={{ width: `${volume * 100}%` }}
                                    className="absolute top-0 left-0 h-full bg-white rounded-full pointer-events-none"
                                />

                                {/* Nút tròn Custom */}
                                <div
                                    style={{
                                        left: `calc(${volume * 100}% - ${(volume - 0.5) * 12}px)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    className="absolute top-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/volume:opacity-100 transition-opacity shadow-md z-10 pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* info */}
                <div className="absolute pb-4 pl-3 text-shadow-lg left-0 bottom-0 right-0 px-1">
                    <h2 className="text-xl font-medium text-gray-50 hover:underline cursor-pointer line-clamp-1 break-all">
                        {video.authorName}
                    </h2>

                    <p className="text-gray-200 line-clamp-2 wrap-break-word">
                        {video.description}
                    </p>
                </div>
            </div>

            {/* action */}
            <div className="flex flex-col text-2xl justify-center mb-8 items-center gap-2">
                <div className="cursor-pointer w-9 h-9 flex mb-2 items-center relative justify-center rounded-full bg-zinc-700">
                    <Image
                        src={video.authorImg}
                        className="object-cover rounded-full"
                        fill
                        sizes="36px"
                        alt=""
                    />
                    <div className="text-sm p-0.5 absolute -bottom-2 bg-red-500 rounded-full">
                        <FaPlus />
                    </div>
                </div>
                <div className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                    <FaRegHeart className="text-gray-50  hover:text-gray-400" />
                </div>
                <div className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                    <FaRegCommentDots className=" text-gray-50 hover:text-gray-400" />
                </div>
                <div className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                    <FaShare className="text-gray-50 hover:text-gray-400" />
                </div>
            </div>
        </div>
    );
}
export default VideoCard;

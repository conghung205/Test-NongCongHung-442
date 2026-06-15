"use client";
import Image from "next/image";
import { FaRegCommentDots, FaShare, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useVideoContext } from "@/context/VideoContext";

interface VideoActionsProps {
    videoId: string;
    authorImg: string;
    likesCount: number;
    isLiked: boolean;
}

function VideoActions({
    videoId,
    authorImg,
    likesCount,
    isLiked,
}: VideoActionsProps) {
    const { toggleLike } = useVideoContext();

    return (
        <div className="flex select-none flex-col text-2xl justify-center mb-8 items-center gap-2">
            {/* Avatar  */}
            <div className="cursor-pointer w-9 h-9 flex mb-2 items-center relative justify-center rounded-full bg-zinc-700">
                <Image
                    src={authorImg}
                    className="object-cover rounded-full"
                    fill
                    sizes="36px"
                    alt=""
                />
                <div className="text-sm p-0.5 absolute -bottom-2 bg-red-500 rounded-full">
                    <FaPlus />
                </div>
            </div>

            {/* Like */}
            <div
                onClick={() => toggleLike(videoId)}
                className="cursor-pointer flex flex-col items-center gap-0.5"
            >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                    {isLiked ? (
                        <FaHeart className="text-red-500" />
                    ) : (
                        <FaRegHeart className="text-gray-50 hover:text-gray-400" />
                    )}
                </div>
                <span className="text-gray-50 text-xs">{likesCount}</span>
            </div>

            {/* Comment */}
            <div className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                <FaRegCommentDots className="text-gray-50 hover:text-gray-400" />
            </div>

            {/* Share */}
            <div className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-zinc-700">
                <FaShare className="text-gray-50 hover:text-gray-400" />
            </div>
        </div>
    );
}

export default VideoActions;

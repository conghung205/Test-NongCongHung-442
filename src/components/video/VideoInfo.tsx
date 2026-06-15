import { VideoData } from "@/types/video";
import { IoIosMusicalNotes } from "react-icons/io";

interface VideoInfoProps {
    video: VideoData;
}

function VideoInfo({ video }: VideoInfoProps) {
    return (
        <div className="absolute w-1/2 pb-4 pl-3 text-shadow-lg left-0 bottom-0 right-0 px-1">
            <h2 className="text-lg font-medium text-gray-50 hover:underline cursor-pointer line-clamp-1 break-all">
                {video.authorName}
            </h2>

            <p className="text-gray-100 pl-1 text-sm line-clamp-2 wrap-break-word">
                {video.description}
            </p>

            <div className="flex text-gray-50 mt-1 items-center justify-center gap-1.5">
                <IoIosMusicalNotes className="text-xl" />
                <p className=" text-sm line-clamp-1 wrap-break-word">
                    {video.audio?.title} - {video.audio?.artist}
                </p>
            </div>
        </div>
    );
}

export default VideoInfo;

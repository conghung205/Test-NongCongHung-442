import { mockVideos } from "@/data/video";
import VideoCard from "./VideoCard";
function VideoFeed() {
    return (
        <div className="h-[85vh] overflow-y-scroll scroll-smooth transition-all duration-300 snap-y snap-mandatory scrollbar-none flex flex-col gap-6">
            {mockVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
}
export default VideoFeed;

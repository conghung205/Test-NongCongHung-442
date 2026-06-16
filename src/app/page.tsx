import VideoFeed from "@/components/video/VideoFeed";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout isCenter={true} isPadding={true}>
            <VideoFeed />
        </MainLayout>
    );
}

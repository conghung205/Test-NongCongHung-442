import VideoFeed from "@/components/video/VideoFeed";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
    return (
        <MainLayout isCenter={true} isPadding={true}>
            <VideoFeed />
        </MainLayout>
    );
}

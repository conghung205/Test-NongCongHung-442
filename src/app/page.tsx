import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoFeed from "@/components/VideoFeed";

export default function Home() {
    return (
        <div className="w-full h-screen bg-zinc-950 text-white flex flex-col overflow-hidden">
            <Header />
            <div className="w-full h-[calc(100vh-64px)] flex flex-row relative">
                <Sidebar />
                <main className="flex-1 h-full flex justify-center items-center bg-zinc-950 p-4">
                    <VideoFeed />
                </main>
            </div>
        </div>
    );
}

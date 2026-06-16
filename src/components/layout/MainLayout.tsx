import BottomNav from "@/components/layout/BottomNav";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
    isCenter?: boolean;
    isPadding?: boolean;
}

export default function MainLayout({
    children,
    isCenter = true,
    isPadding = true,
}: MainLayoutProps) {
    return (
        <div className="w-full h-dvh bg-zinc-950 text-white flex flex-col overflow-hidden relative">
            <Header />

            <div className="w-full h-[calc(100dvh-64px)] flex flex-row relative">
                {/* Thanh điều hướng bên cạnh */}
                <Sidebar />

                <main
                    className={`
                    flex-1 h-full flex flex-col min-h-0 bg-zinc-950 
                    ${isCenter ? "justify-center items-center" : "justify-start items-stretch overflow-y-auto"}
                    ${isPadding ? "md:p-4" : "p-0"}
                `}
                >
                    {children}
                </main>
            </div>

            <BottomNav />
        </div>
    );
}

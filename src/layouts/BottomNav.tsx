"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around px-4 z-50 select-none">
            <Link
                href="/"
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 py-1 transition duration-200 ${
                    pathname === "/"
                        ? "text-red-500 font-bold"
                        : "text-zinc-400 hover:text-white font-semibold"
                }`}
            >
                <FaHome className="text-xl" />
                <span className="text-[10px] tracking-wide">Trang chủ</span>
            </Link>

            <div className="flex flex-col items-center justify-center gap-1 w-8 h-8 rounded-full text-zinc-100 bg-zinc-800 font-semibold cursor-pointer py-1 transition duration-200 hover:bg-zinc-700 active:scale-95">
                <FaPlus className="text-2xl p-1" />
            </div>

            <Link
                href="/profile"
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 py-1 transition duration-200 ${
                    pathname.startsWith("/profile")
                        ? "text-red-500 font-bold"
                        : "text-zinc-400 hover:text-white font-semibold"
                }`}
            >
                <FaUser className="text-xl" />
                <span className="text-[10px] tracking-wide">Hồ sơ</span>
            </Link>
        </nav>
    );
}

export default BottomNav;

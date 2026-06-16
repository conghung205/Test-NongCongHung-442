import { FaSearch, FaPlus, FaRegBell } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="w-full h-16 border-b border-zinc-800 px-4 md:px-6 flex items-center justify-between shrink-0 bg-zinc-950 z-50">
            <Link
                href={"/"}
                className="flex items-center gap-2 cursor-pointer select-none"
            >
                <span className="text-xl md:text-2xl font-black tracking-tighter bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    Short Videos
                </span>
            </Link>

            <div className="hidden md:flex items-center bg-zinc-800 rounded-full w-70 lg:w-90 px-4 py-2 border border-transparent focus-within:border-zinc-700 transition-all duration-200 relative">
                <input
                    type="text"
                    placeholder="Tìm kiếm tài khoản và video..."
                    className="bg-transparent pl-6 w-full text-sm outline-none placeholder-zinc-400 text-gray-100 pr-2"
                />
                <div className="absolute left-3 z-10">
                    <FaSearch className="text-zinc-400 cursor-pointer text-base shrink-0 transition" />
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                <button className="hidden sm:flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-3 md:px-4 py-1.5 rounded-sm font-medium text-sm cursor-pointer transition select-none">
                    <FaPlus className="text-xs" />
                    <span className="hidden sm:inline">Tải lên</span>
                </button>

                <div className="relative cursor-pointer text-zinc-200 hover:text-white text-lg p-1 transition hidden sm:block">
                    <FiMessageSquare />
                </div>

                <div className="relative cursor-pointer text-zinc-200 hover:text-white text-lg p-1 transition hidden sm:block">
                    <FaRegBell />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                <Link
                    href={"/profile"}
                    className="relative w-8 h-8 rounded-full bg-zinc-700 overflow-hidden cursor-pointer border border-zinc-800 shrink-0"
                >
                    <Image
                        src="/images/avatar-1.jpg"
                        alt="User Profile"
                        fill
                        sizes="32px"
                        className="object-cover"
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;

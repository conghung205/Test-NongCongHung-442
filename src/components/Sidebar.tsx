import { FaHome, FaCompass, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { mockSuggestedAccount } from "@/data/user";

function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 h-full border-r border-zinc-800 p-4 gap-2 shrink-0 overflow-y-auto scrollbar-none bg-zinc-950 select-none">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4 p-3 bg-zinc-900/50 text-red-500 font-bold rounded-lg cursor-pointer transition">
                    <FaHome className="text-xl shrink-0" />
                    <span className="text-sm tracking-wide">Dành cho bạn</span>
                </div>

                <div className="flex items-center gap-4 p-3 text-zinc-400 hover:bg-zinc-900/60 hover:text-white font-semibold rounded-lg cursor-pointer transition duration-200">
                    <FaUserFriends className="text-xl shrink-0" />
                    <span className="text-sm tracking-wide">Đang follow</span>
                </div>

                <div className="flex items-center gap-4 p-3 text-zinc-400 hover:bg-zinc-900/60 hover:text-white font-semibold rounded-lg cursor-pointer transition duration-200">
                    <FaCompass className="text-xl shrink-0" />
                    <span className="text-sm tracking-wide">Khám phá</span>
                </div>
            </div>

            <hr className="border-zinc-800 my-2" />

            <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-500 font-bold px-3 mb-2 uppercase tracking-wider">
                    Tài khoản gợi ý
                </p>

                {mockSuggestedAccount.map((account) => (
                    <div
                        key={account.id}
                        className="flex items-center gap-3 p-2 hover:bg-zinc-900/60 rounded-lg cursor-pointer transition duration-200 group"
                    >
                        <div className="relative w-8 h-8 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-zinc-800">
                            <Image
                                src={account.avatar}
                                alt={account.name}
                                fill
                                sizes="32px"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-gray-200 group-hover:text-white leading-tight truncate">
                                {account.username}
                            </span>
                            <span className="text-xs text-zinc-500 truncate">
                                {account.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="border-zinc-800 my-2" />

            <div className="px-3 py-2 text-zinc-600 text-xs flex flex-wrap gap-x-2 gap-y-1 font-medium leading-relaxed">
                <span className="hover:underline cursor-pointer">
                    Giới thiệu
                </span>
                <span className="hover:underline cursor-pointer">Bảng tin</span>
                <span className="hover:underline cursor-pointer">Liên hệ</span>
                <span className="hover:underline cursor-pointer">
                    Sự nghiệp
                </span>
                <p className="text-[10px] text-zinc-700 mt-2 w-full">
                    © 2026 bài test
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;

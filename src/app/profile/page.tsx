"use client";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import { IoGridOutline, IoSettingsOutline } from "react-icons/io5";
import { FiShare2, FiLock } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"video" | "favorite" | "liked">(
        "video",
    );

    return (
        <MainLayout isCenter={false} isPadding={false}>
            <div className="w-full h-full p-4 md:p-10 pb-24 md:pb-10 select-none">
                {/* User info */}
                <div className="flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-8 mb-8">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800 shrink-0 relative">
                        <Image
                            src="/images/avatar-1.jpg"
                            alt="User Avatar"
                            fill
                            sizes="(max-width: 768px) 96px, 112px"
                            className="object-cover"
                            priority
                            loading="eager"
                        />
                    </div>

                    <div className="flex-1 flex text-center md:text-start flex-col gap-3">
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-white">
                                Viet
                            </h1>
                            <p className="text-xs text-zinc-400 mt-0.5">
                                vuetzzz123457
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-zinc-400">
                            <span>
                                <strong className="text-white font-bold mr-1">
                                    21
                                </strong>
                                Đang follow
                            </span>
                            <span>
                                <strong className="text-white font-bold mr-1">
                                    10
                                </strong>
                                Follower
                            </span>
                            <span>
                                <strong className="text-white font-bold mr-1">
                                    0
                                </strong>
                                Lượt thích
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-1">
                            <button className="px-5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm rounded-md transition cursor-pointer border border-zinc-800">
                                Sửa hồ sơ
                            </button>
                            <button className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm rounded-md transition cursor-pointer border border-zinc-800">
                                Quảng bá bài đăng
                            </button>
                            <button className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-lg rounded-md transition cursor-pointer border border-zinc-800">
                                <IoSettingsOutline />
                            </button>
                            <button className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-lg rounded-md transition cursor-pointer border border-zinc-800">
                                <FiShare2 />
                            </button>
                        </div>
                        <p className="text-sm text-zinc-400 mt-2">
                            Chưa có tiểu sử.
                        </p>
                    </div>
                </div>

                {/* Tabs system */}
                <div className="w-full border-b border-zinc-800 flex items-center justify-between md:justify-start md:gap-12 relative mb-6">
                    <button
                        onClick={() => setActiveTab("video")}
                        className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold relative cursor-pointer transition ${activeTab === "video" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                        <IoGridOutline /> <span>Video</span>
                        {activeTab === "video" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("favorite")}
                        className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold relative cursor-pointer transition ${activeTab === "favorite" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                        <FiLock /> <span>Yêu thích</span>
                        {activeTab === "favorite" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("liked")}
                        className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold relative cursor-pointer transition ${activeTab === "liked" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                        <AiOutlineHeart /> <span>Đã thích</span>
                        {activeTab === "liked" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                        )}
                    </button>

                    <div className="hidden md:flex items-center gap-1 bg-zinc-900 p-0.5 rounded-md text-xs font-semibold ml-auto text-zinc-400 border border-zinc-800">
                        <span className="px-3 py-1 bg-zinc-800 shadow-sm rounded text-white cursor-pointer">
                            Mới nhất
                        </span>
                        <span className="px-3 py-1 text-zinc-500 hover:text-zinc-300 cursor-pointer transition">
                            Thịnh Hành
                        </span>
                        <span className="px-3 py-1 text-zinc-500 hover:text-zinc-300 cursor-pointer transition">
                            Cũ nhất
                        </span>
                    </div>
                </div>

                {/* Empty states conditional rendering */}
                {activeTab === "video" && (
                    <div className="w-full py-16 flex flex-col items-center justify-center text-center animation-fade-in">
                        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 text-2xl shadow-sm mb-5">
                            <IoGridOutline />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                            Tải video đầu tiên của bạn lên
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Video của bạn sẽ xuất hiện tại đây
                        </p>
                    </div>
                )}

                {activeTab === "favorite" && (
                    <div className="w-full py-16 flex flex-col items-center justify-center text-center animation-fade-in">
                        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 text-2xl shadow-sm mb-5">
                            <FiLock />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                            Bạn chưa lưu video nào!
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Video yêu thích của bạn sẽ xuất hiện tại đây
                        </p>
                    </div>
                )}

                {activeTab === "liked" && (
                    <div className="w-full py-16 flex flex-col items-center justify-center text-center animation-fade-in">
                        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 text-2xl shadow-sm mb-5">
                            <AiOutlineHeart />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                            Bạn chưa thích video nào!
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Video mà bạn đã thích sẽ xuất hiện tại đây
                        </p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

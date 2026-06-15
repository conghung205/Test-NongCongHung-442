import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hồ sơ của bạn | Short Video Feed",
    description: "Trang cá nhân quản lý video và sở thích.",
};

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

import { useEffect, useRef, useState } from "react";

interface UseVideoPlayerProps {
    isActive: boolean;
    isAudioActivated: boolean;
    setIsAudioActivated: React.Dispatch<React.SetStateAction<boolean>>;
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    audioUrl?: string;
}

export function useVideoPlayer({
    isActive,
    isAudioActivated,
    setIsAudioActivated,
    volume,
    setVolume,
}: UseVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeBarRef = useRef<HTMLDivElement>(null);
    const [showIcon, setShowIcon] = useState<"play" | "pause" | null>(null);
    const [lastVolume, setLastVolume] = useState(volume);

    const isMuted = !isAudioActivated;
    const displayVolume = isMuted ? 0 : volume;

    const handleVideoClick = () => {
        if (!videoRef.current) return;
        if (!videoRef.current.paused) {
            videoRef.current.pause();
            audioRef.current?.pause();
            setShowIcon("pause");
        } else {
            videoRef.current.play().catch(console.log);
            if (!isAudioActivated) {
                setIsAudioActivated(true);
            } else {
                audioRef.current?.play().catch(console.log);
            }
            setShowIcon("play");
        }
    };

    const handleVolumeUpdate = (clientX: number) => {
        if (!volumeBarRef.current) return;
        const rect = volumeBarRef.current.getBoundingClientRect();
        let newVolume = (clientX - rect.left) / rect.width;
        if (newVolume < 0) newVolume = 0;
        if (newVolume > 1) newVolume = 1;
        setVolume(newVolume);
        if (newVolume > 0) setLastVolume(newVolume);
        if (!isAudioActivated && newVolume > 0) setIsAudioActivated(true);
    };

    const handleToggleMute = () => {
        if (!isAudioActivated) {
            setIsAudioActivated(true);
        } else if (volume > 0) {
            setLastVolume(volume);
            setVolume(0);
        } else {
            setVolume(lastVolume || 1);
        }
    };

    const handleVolumeMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleVolumeUpdate(e.clientX);
        const handleMouseMove = (moveEvent: MouseEvent) =>
            handleVolumeUpdate(moveEvent.clientX);
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    // Sync play/pause khi active video thay đổi
    useEffect(() => {
        const video = videoRef.current;
        const audio = audioRef.current;
        if (!video) return;
        if (isActive) {
            video.play().catch(console.log);
            if (isAudioActivated) audio?.play().catch(console.log);
        } else {
            video.pause();
            video.currentTime = 0;
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    // Ẩn icon play/pause
    useEffect(() => {
        if (showIcon === null) return;
        const timer = setTimeout(() => setShowIcon(null), 500);
        return () => clearTimeout(timer);
    }, [showIcon]);

    // Sync volume/mute lên audio element
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = displayVolume;
        audioRef.current.muted = isMuted;
    }, [displayVolume, isMuted]);

    // Lần đầu user kích hoạt audio → play ngay nếu video đang active
    useEffect(() => {
        if (isAudioActivated && isActive && audioRef.current) {
            audioRef.current.play().catch(console.log);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAudioActivated]);

    // Sync currentTime audio theo video để tránh lệch sau nhiều lần loop
    useEffect(() => {
        const video = videoRef.current;
        const audio = audioRef.current;
        if (!video || !audio) return;
        const handleTimeSync = () => {
            if (Math.abs(audio.currentTime - video.currentTime) > 0.3) {
                audio.currentTime = video.currentTime;
            }
        };
        video.addEventListener("timeupdate", handleTimeSync);
        return () => video.removeEventListener("timeupdate", handleTimeSync);
    }, []);

    return {
        videoRef,
        audioRef,
        volumeBarRef,
        showIcon,
        displayVolume,
        handleVideoClick,
        handleToggleMute,
        handleVolumeMouseDown,
    };
}

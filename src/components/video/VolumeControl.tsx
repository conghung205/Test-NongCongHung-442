import React from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";

interface VolumeControlProps {
    displayVolume: number;
    volumeBarRef: React.RefObject<HTMLDivElement | null>;
    handleToggleMute: () => void;
    handleVolumeMouseDown: (e: React.MouseEvent) => void;
}

function VolumeControl({
    displayVolume,
    volumeBarRef,
    handleToggleMute,
    handleVolumeMouseDown,
}: VolumeControlProps) {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 left-4 text-white cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 bg-black/40 p-1 md:p-2 rounded-full backdrop-blur-sm flex items-center gap-0 hover:gap-3 group/volume"
        >
            <button
                onClick={handleToggleMute}
                className="text-xl p-1 cursor-pointer flex items-center justify-center"
            >
                {displayVolume === 0 ? (
                    <FaVolumeXmark className="text-red-500" />
                ) : (
                    <FaVolumeHigh />
                )}
            </button>

            <div className="overflow-hidden transition-all duration-300 ease-out flex items-center w-0 group-hover/volume:w-24 h-5">
                <div className="w-full h-full py-2 pl-2 pr-4 flex items-center select-none">
                    <div
                        ref={volumeBarRef}
                        onMouseDown={handleVolumeMouseDown}
                        className="w-full h-2 bg-zinc-600 rounded-full relative cursor-pointer"
                    >
                        <div
                            style={{
                                width: `${displayVolume * 100}%`,
                            }}
                            className="absolute top-0 left-0 h-full bg-white rounded-full pointer-events-none"
                        />

                        <div
                            style={{
                                left: `${displayVolume * 100}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            className="absolute top-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/volume:opacity-100 transition-opacity shadow-md z-10 pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VolumeControl;

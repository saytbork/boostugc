import React from "react";
import clsx from "clsx";

interface CapsuleButtonProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

export const CapsuleButton: React.FC<CapsuleButtonProps> = ({
    label,
    selected,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "inline-flex items-center justify-center",
                "h-[30px] px-3 rounded-full whitespace-nowrap",
                "text-[13px] leading-none transition-all duration-200 cursor-pointer",
                "border border-white/10",
                selected
                    ? "bg-[#4E5CFF] text-white border-[#4E5CFF]"
                    : "bg-[#141820] text-white/80 hover:bg-white/10"
            )}
        >
            {label}
        </button>
    );
};

export default CapsuleButton;

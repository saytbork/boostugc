import React from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface SidebarSectionProps {
    title: string;
    open: boolean;
    onToggle: () => void;
    children?: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
    title,
    open,
    onToggle,
    children,
}) => {
    return (
        <div className="mb-5 border-b border-white/5 pb-3">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-2 text-left"
            >
                <span className="font-semibold text-[15px]">{title}</span>
                <ChevronDown
                    className={clsx(
                        "w-4 h-4 transition-transform duration-200",
                        open ? "rotate-180" : ""
                    )}
                />
            </button>

            <div
                className={clsx(
                    "transition-all duration-300 overflow-hidden",
                    open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="mt-3 flex flex-col gap-4">{children}</div>
            </div>
        </div>
    );
};

export default SidebarSection;

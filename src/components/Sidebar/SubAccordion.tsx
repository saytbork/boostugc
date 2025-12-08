import React, { useState, useRef, useEffect } from "react";

interface SubAccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export const SubAccordion: React.FC<SubAccordionProps> = ({
    title,
    children,
    defaultOpen = false
}) => {
    const [open, setOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    const toggle = () => setOpen(!open);

    useEffect(() => {
        if (contentRef.current) {
            if (open) {
                const scrollHeight = contentRef.current.scrollHeight;
                setMaxHeight(scrollHeight + "px");
            } else {
                setMaxHeight("0px");
            }
        }
    }, [open, children]);

    return (
        <div className="sub-accordion-wrapper w-full">
            {/* Header */}
            <button
                type="button"
                onClick={toggle}
                className="w-full flex items-center justify-between py-2 px-1 text-left"
            >
                <span className="sub-accordion-title font-semibold text-[14px]">
                    {title}
                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className={`lucide lucide-chevron-right transition-transform duration-300 ${open ? "rotate-90" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </button>

            {/* Animated Content */}
            <div
                ref={contentRef}
                style={{
                    maxHeight,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.25s ease",
                    opacity: open ? 1 : 0
                }}
                className="sub-accordion-content"
            >
                <div className="sub-accordion-inner py-2">{children}</div>
            </div>
        </div>
    );
};

export default SubAccordion;

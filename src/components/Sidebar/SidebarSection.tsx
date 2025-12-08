import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

interface SidebarSectionProps {
    title: string;
    icon?: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
    title,
    icon,
    isOpen,
    onToggle,
    children,
}) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number | 'auto'>('auto');

    // Use useLayoutEffect to measure before paint, preventing flicker
    useLayoutEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                setHeight(contentRef.current.scrollHeight);
            } else {
                setHeight(0);
            }
        }
    }, [isOpen, children]);

    return (
        <div className="sidebar-section">
            <button
                type="button"
                onClick={onToggle}
                className="sidebar-section-header"
                aria-expanded={isOpen}
            >
                <div className="sidebar-section-title">
                    {icon && <span className="sidebar-section-icon">{icon}</span>}
                    <span>{title}</span>
                </div>
                <svg
                    className={`sidebar-section-chevron ${isOpen ? 'sidebar-section-chevron-open' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div
                className="sidebar-section-content"
                style={{
                    maxHeight: typeof height === 'number' ? height : undefined,
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div ref={contentRef} className="sidebar-section-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SidebarSection;

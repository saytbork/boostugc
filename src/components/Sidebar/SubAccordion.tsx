import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

interface SubAccordionProps {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}

/**
 * SubAccordion - A lightweight collapsible section for use inside MacroAccordions.
 * NOT to be nested inside another Accordion. Opens independently.
 */
export const SubAccordion: React.FC<SubAccordionProps> = ({
    title,
    defaultOpen = false,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="sub-accordion">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="sub-accordion-header"
            >
                <span className="sub-accordion-title">{title}</span>
                <ChevronRight
                    className={clsx(
                        "w-4 h-4 transition-transform duration-200",
                        isOpen ? "rotate-90" : ""
                    )}
                />
            </button>
            <div
                className={clsx(
                    "sub-accordion-content",
                    isOpen ? "sub-accordion-open" : "sub-accordion-closed"
                )}
            >
                {isOpen && <div className="sub-accordion-inner">{children}</div>}
            </div>
        </div>
    );
};

export default SubAccordion;

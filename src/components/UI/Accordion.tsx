import React, { useEffect, useRef, useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);

  return (
    <div
      className="rounded-xl glass-card"
    >
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-base font-semibold text-gray-100 hover:text-white transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-90 text-indigo-300' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        className="transition-all duration-200 ease-out overflow-hidden px-5"
        style={{ maxHeight: open ? height : 0, opacity: open ? 1 : 0 }}
      >
        <div ref={contentRef} className="pb-5 pt-1 text-sm text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

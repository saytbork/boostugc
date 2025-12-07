import React from 'react';

type Tab = {
    id: string;
    label: string;
    icon?: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabId: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
    return (
        <div className="sticky top-0 z-10 bg-[#0A0B0F]/95 backdrop-blur-sm border-b border-white/5 -mx-6 px-6 py-4 mb-6">
            <div className="flex gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => onChange(tab.id)}
                        className={`
              flex-1 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200
              ${activeTab === tab.id
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                            }
            `}
                    >
                        <div className="flex items-center justify-center gap-2">
                            {tab.icon && <span>{tab.icon}</span>}
                            <span>{tab.label}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;

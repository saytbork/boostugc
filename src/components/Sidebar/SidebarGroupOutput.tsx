import React from 'react';
import CapsuleButton from './CapsuleButton';
import { MockupOptions, OptionCategory } from '../../../types';
import {
    ASPECT_RATIO_OPTIONS,
    REALISM_OPTIONS,
    CREATION_MODE_OPTIONS,
} from '../../../constants';

interface SidebarGroupOutputProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = 'Output Settings';

const SidebarGroupOutput: React.FC<SidebarGroupOutputProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="sidebar-group">
            {/* Aspect Ratio */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Aspect Ratio</label>
                <div className="sidebar-capsule-grid">
                    {ASPECT_RATIO_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.aspectRatio === opt.value}
                            onClick={() => handleOptionChange('aspectRatio', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Realism / Quality */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Realism Level</label>
                <div className="sidebar-capsule-grid">
                    {REALISM_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.realism === opt.value}
                            onClick={() => handleOptionChange('realism', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Creation Mode */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Creation Mode</label>
                <div className="sidebar-capsule-grid">
                    {CREATION_MODE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.creationMode === opt.value}
                            onClick={() => handleOptionChange('creationMode' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupOutput;

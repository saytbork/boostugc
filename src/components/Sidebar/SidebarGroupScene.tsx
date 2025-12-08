import React from 'react';
import CapsuleButton from './CapsuleButton';
import { MockupOptions, OptionCategory } from '../../../types';
import {
    SETTING_OPTIONS,
    ENVIRONMENT_ORDER_OPTIONS,
    LIGHTING_OPTIONS,
    MICRO_LOCATION_OPTIONS,
    PERSON_PROP_OPTIONS,
} from '../../../constants';

interface SidebarGroupSceneProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = 'Scene & Environment';

const SidebarGroupScene: React.FC<SidebarGroupSceneProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="sidebar-group">
            {/* Setting */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Setting</label>
                <div className="sidebar-capsule-grid">
                    {SETTING_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.setting === opt.value}
                            onClick={() => handleOptionChange('setting', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Environment */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Environment</label>
                <div className="sidebar-capsule-grid">
                    {ENVIRONMENT_ORDER_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.environmentOrder === opt.value}
                            onClick={() => handleOptionChange('environmentOrder', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Lighting */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Lighting</label>
                <div className="sidebar-capsule-grid">
                    {LIGHTING_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.lighting === opt.value}
                            onClick={() => handleOptionChange('lighting', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Micro Location */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Micro Location</label>
                <div className="sidebar-capsule-grid">
                    {MICRO_LOCATION_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.microLocation === opt.value}
                            onClick={() => handleOptionChange('microLocation', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Props */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Props</label>
                <div className="sidebar-capsule-grid">
                    {PERSON_PROP_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personProps === opt.value}
                            onClick={() => handleOptionChange('personProps', opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupScene;

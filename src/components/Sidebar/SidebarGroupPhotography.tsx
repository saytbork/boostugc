import React from 'react';
import CapsuleButton from './CapsuleButton';
import { MockupOptions, OptionCategory } from '../../../types';
import {
    CAMERA_OPTIONS,
    CAMERA_ANGLE_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
    COMPOSITION_MODE_OPTIONS,
    ASPECT_RATIO_OPTIONS,
    PERSPECTIVE_OPTIONS,
} from '../../../constants';

interface SidebarGroupPhotographyProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    cameraControlsDisabled?: boolean;
    disabled?: boolean;
}

const SECTION_TITLE = 'Photography';

const SidebarGroupPhotography: React.FC<SidebarGroupPhotographyProps> = ({
    options,
    handleOptionChange,
    cameraControlsDisabled = false,
    disabled = false,
}) => {
    const isDisabled = disabled || cameraControlsDisabled;

    return (
        <div className="sidebar-group">
            {/* Camera Type */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Camera Type</label>
                <div className="sidebar-capsule-grid">
                    {CAMERA_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.camera === opt.value}
                            onClick={() => handleOptionChange('camera', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Camera Shot */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Camera Shot</label>
                <div className="sidebar-capsule-grid">
                    {CAMERA_ANGLE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.cameraShot === opt.value}
                            onClick={() => handleOptionChange('cameraShot' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Camera Distance */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Camera Distance</label>
                <div className="sidebar-capsule-grid">
                    {CAMERA_DISTANCE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.cameraDistance === opt.value}
                            onClick={() => handleOptionChange('cameraDistance' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Perspective */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Perspective</label>
                <div className="sidebar-capsule-grid">
                    {PERSPECTIVE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.perspective === opt.value}
                            onClick={() => handleOptionChange('perspective', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Composition */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Composition</label>
                <div className="sidebar-capsule-grid">
                    {COMPOSITION_MODE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.compositionMode === opt.value}
                            onClick={() => handleOptionChange('compositionMode' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

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
        </div>
    );
};

export default SidebarGroupPhotography;

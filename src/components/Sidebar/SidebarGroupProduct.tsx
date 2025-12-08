import React from 'react';
import CapsuleButton from './CapsuleButton';
import { MockupOptions, OptionCategory } from '../../../types';
import {
    PLACEMENT_STYLE_OPTIONS,
    PLACEMENT_CAMERA_OPTIONS,
    PRODUCT_PLANE_OPTIONS,
    PRODUCT_MATERIAL_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
} from '../../../constants';

interface SidebarGroupProductProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = 'Product Settings';

const SidebarGroupProduct: React.FC<SidebarGroupProductProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="sidebar-group">
            {/* Placement Style */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Placement Style</label>
                <div className="sidebar-capsule-grid">
                    {PLACEMENT_STYLE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.placementStyle === opt.value}
                            onClick={() => handleOptionChange('placementStyle' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Camera POV / Rig */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Camera POV</label>
                <div className="sidebar-capsule-grid">
                    {PLACEMENT_CAMERA_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.placementCamera === opt.value}
                            onClick={() => handleOptionChange('placementCamera' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Product Plane / Depth */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Product Depth</label>
                <div className="sidebar-capsule-grid">
                    {PRODUCT_PLANE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productPlane === opt.value}
                            onClick={() => handleOptionChange('productPlane' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {/* Product Material */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Product Material</label>
                <div className="sidebar-capsule-grid">
                    {PRODUCT_MATERIAL_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productMaterial === opt.value}
                            onClick={() => handleOptionChange('productMaterial' as OptionCategory, opt.value, SECTION_TITLE)}
                            disabled={disabled}
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
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupProduct;

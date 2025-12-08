import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    PLACEMENT_STYLE_OPTIONS,
    PLACEMENT_CAMERA_OPTIONS,
    PRODUCT_PLANE_OPTIONS,
    PRODUCT_MATERIAL_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
} from "../../../constants";

interface SidebarGroupProductProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = "Product Settings";

export const SidebarGroupProduct: React.FC<SidebarGroupProductProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col gap-5">
            {/* Placement Style */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Placement Style
                </label>
                <div className="flex flex-wrap gap-2">
                    {PLACEMENT_STYLE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.placementStyle === opt.value}
                            onClick={() => handleOptionChange("placementStyle" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Camera POV */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Camera POV
                </label>
                <div className="flex flex-wrap gap-2">
                    {PLACEMENT_CAMERA_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.placementCamera === opt.value}
                            onClick={() => handleOptionChange("placementCamera" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Product Depth */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Product Depth
                </label>
                <div className="flex flex-wrap gap-2">
                    {PRODUCT_PLANE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productPlane === opt.value}
                            onClick={() => handleOptionChange("productPlane" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Product Material */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Product Material
                </label>
                <div className="flex flex-wrap gap-2">
                    {PRODUCT_MATERIAL_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productMaterial === opt.value}
                            onClick={() => handleOptionChange("productMaterial" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Camera Distance */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Camera Distance
                </label>
                <div className="flex flex-wrap gap-2">
                    {CAMERA_DISTANCE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.cameraDistance === opt.value}
                            onClick={() => handleOptionChange("cameraDistance" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupProduct;

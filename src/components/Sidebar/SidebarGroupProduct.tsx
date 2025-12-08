import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    CAMERA_OPTIONS,
    CAMERA_ANGLE_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
    PERSPECTIVE_OPTIONS,
} from "../../../constants";

// Product-specific options
const PLACEMENT_STYLE_OPTIONS = [
    { value: "centered", label: "Centered" },
    { value: "left-aligned", label: "Left Aligned" },
    { value: "right-aligned", label: "Right Aligned" },
    { value: "floating", label: "Floating" },
    { value: "tilted", label: "Tilted" },
    { value: "handheld", label: "In Hand" },
];

const PRODUCT_MATERIAL_OPTIONS = [
    { value: "default", label: "Auto" },
    { value: "glass", label: "Glass" },
    { value: "plastic", label: "Plastic" },
    { value: "metal", label: "Metal" },
    { value: "ceramic", label: "Ceramic" },
    { value: "wood", label: "Wood" },
    { value: "paper", label: "Paper" },
];

const SHADOW_STYLE_OPTIONS = [
    { value: "soft", label: "Soft Shadow" },
    { value: "hard", label: "Hard Shadow" },
    { value: "none", label: "No Shadow" },
    { value: "reflection", label: "Reflection" },
];

const HERO_SCALE_OPTIONS = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "hero", label: "Hero (Full)" },
];

const HERO_ALIGNMENT_OPTIONS = [
    { value: "center", label: "Center" },
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
];

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
        <div className="flex flex-col">
            {/* Placement Style */}
            <SubAccordion title="Product Placement" defaultOpen={true}>
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
            </SubAccordion>

            {/* Camera */}
            <SubAccordion title="Camera POV">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Angle</label>
                        <div className="flex flex-wrap gap-2">
                            {CAMERA_ANGLE_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.cameraShot === opt.value}
                                    onClick={() => handleOptionChange("cameraShot", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Distance</label>
                        <div className="flex flex-wrap gap-2">
                            {CAMERA_DISTANCE_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.cameraDistance === opt.value}
                                    onClick={() => handleOptionChange("cameraDistance", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SubAccordion>

            {/* Material */}
            <SubAccordion title="Product Material">
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
            </SubAccordion>

            {/* Hero Scale & Alignment */}
            <SubAccordion title="Hero Scale & Alignment">
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Scale</label>
                        <div className="flex flex-wrap gap-2">
                            {HERO_SCALE_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.heroProductScale === opt.value}
                                    onClick={() => handleOptionChange("heroProductScale" as OptionCategory, opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Alignment</label>
                        <div className="flex flex-wrap gap-2">
                            {HERO_ALIGNMENT_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.heroProductAlignment === opt.value}
                                    onClick={() => handleOptionChange("heroProductAlignment" as OptionCategory, opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SubAccordion>

            {/* Shadows */}
            <SubAccordion title="Shadows & Reflections">
                <div className="flex flex-wrap gap-2">
                    {SHADOW_STYLE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.heroShadowStyle === opt.value}
                            onClick={() => handleOptionChange("heroShadowStyle" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Perspective */}
            <SubAccordion title="Perspective">
                <div className="flex flex-wrap gap-2">
                    {PERSPECTIVE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.perspective === opt.value}
                            onClick={() => handleOptionChange("perspective", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupProduct;

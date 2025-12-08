import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import { MockupOptions, OptionCategory } from "../../../types";
import {
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

const SUPPLEMENT_MODES = [
    { value: "hero-landing", label: "Hero Landing", emoji: "👑" },
    { value: "ingredient-splash", label: "Splash / Ingredients", emoji: "🍋" },
    { value: "floating-particles", label: "Floating Magic", emoji: "✨" },
];

interface SidebarGroupProductProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
    // Advanced Product Controls
    addHandsEnabled?: boolean;
    setAddHandsEnabled?: (value: boolean) => void;
    isMultiProductPackaging?: boolean;
    setIsMultiProductPackaging?: (value: boolean) => void;
    activeSupplementPreset?: string;
    handleSupplementPresetClick?: (preset: string) => void;
    supplementBackgroundColor?: string;
    setSupplementBackgroundColor?: (value: string) => void;
    supplementAccentColor?: string;
    setSupplementAccentColor?: (value: string) => void;
    supplementFlavorNotes?: string;
    setSupplementFlavorNotes?: (value: string) => void;
    supplementCustomPrompt?: string;
    setSupplementCustomPrompt?: (value: string) => void;
}

const SECTION_TITLE = "Product Settings";

export const SidebarGroupProduct: React.FC<SidebarGroupProductProps> = ({
    options,
    handleOptionChange,
    disabled = false,
    addHandsEnabled = false,
    setAddHandsEnabled,
    isMultiProductPackaging = false,
    setIsMultiProductPackaging,
    activeSupplementPreset = "",
    handleSupplementPresetClick,
    supplementBackgroundColor = "",
    setSupplementBackgroundColor,
    supplementAccentColor = "",
    setSupplementAccentColor,
    supplementFlavorNotes = "",
    setSupplementFlavorNotes,
    supplementCustomPrompt = "",
    setSupplementCustomPrompt,
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
                                    selected={(options as any).heroProductScale === opt.value}
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
                                    selected={(options as any).heroProductAlignment === opt.value}
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
                            selected={(options as any).heroShadowStyle === opt.value}
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

            {/* Brand Cues - Advanced Product Settings */}
            <SubAccordion title="Brand Cues">
                <div className="flex flex-col gap-5">
                    {/* Supplement Photo Modes */}
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-3 block">Photo Mode</label>
                        <div className="flex flex-wrap gap-2">
                            {SUPPLEMENT_MODES.map((mode) => (
                                <button
                                    key={mode.value}
                                    type="button"
                                    onClick={() => handleSupplementPresetClick?.(mode.value)}
                                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition ${activeSupplementPreset === mode.value
                                        ? "border-indigo-400 bg-indigo-500/10 text-white"
                                        : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    <span>{mode.emoji}</span>
                                    <span className="font-medium">{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add Hands Toggle */}
                    <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 p-3">
                        <div>
                            <p className="text-xs font-medium text-white">Add Hands</p>
                            <p className="text-[11px] text-gray-400">Include a hand holding or interacting with the product</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setAddHandsEnabled?.(!addHandsEnabled)}
                            className={`relative h-6 w-11 rounded-full transition-colors ${addHandsEnabled ? "bg-indigo-500" : "bg-gray-600"}`}
                        >
                            <span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${addHandsEnabled ? "translate-x-5" : ""}`} />
                        </button>
                    </div>

                    {/* Multi Product Packaging Toggle */}
                    <div className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 p-3">
                        <div>
                            <p className="text-xs font-medium text-white">Multi-Product Kit</p>
                            <p className="text-[11px] text-gray-400">Show multiple units side-by-side</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsMultiProductPackaging?.(!isMultiProductPackaging)}
                            className={`relative h-6 w-11 rounded-full transition-colors ${isMultiProductPackaging ? "bg-indigo-500" : "bg-gray-600"}`}
                        >
                            <span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${isMultiProductPackaging ? "translate-x-5" : ""}`} />
                        </button>
                    </div>

                    {/* Colors */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs uppercase tracking-wide text-gray-500">Background Color</label>
                            <input
                                type="text"
                                value={supplementBackgroundColor}
                                onChange={(e) => setSupplementBackgroundColor?.(e.target.value)}
                                placeholder="e.g., #FFB347 or pastel peach"
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs uppercase tracking-wide text-gray-500">Accent Color / Props</label>
                            <input
                                type="text"
                                value={supplementAccentColor}
                                onChange={(e) => setSupplementAccentColor?.(e.target.value)}
                                placeholder="e.g., teal acrylic cube"
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Flavor Notes */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase tracking-wide text-gray-500">Flavor / Ingredient Props</label>
                        <textarea
                            value={supplementFlavorNotes}
                            onChange={(e) => setSupplementFlavorNotes?.(e.target.value)}
                            placeholder="e.g., pineapple, lavender sprigs, gummy vitamins"
                            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none resize-none"
                            rows={2}
                        />
                    </div>

                    {/* Custom Hero Cue */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs uppercase tracking-wide text-gray-500">Custom Hero Cue</label>
                        <textarea
                            value={supplementCustomPrompt}
                            onChange={(e) => setSupplementCustomPrompt?.(e.target.value)}
                            placeholder="e.g., have a manicured hand toss gummies mid-air beside the bottle"
                            className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none resize-none"
                            rows={2}
                        />
                        <p className="text-[11px] text-gray-500">Add any specific staging or stylistic callouts for this product.</p>
                    </div>
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupProduct;

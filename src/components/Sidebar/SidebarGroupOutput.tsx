import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import Tooltip from "../UI/Tooltip";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    ASPECT_RATIO_OPTIONS,
    REALISM_OPTIONS,
    CREATION_MODE_OPTIONS,
} from "../../../constants";

interface SidebarGroupOutputProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = "Output Settings";

// Quality options
const QUALITY_OPTIONS = [
    { value: "draft", label: "Draft" },
    { value: "standard", label: "Standard" },
    { value: "high", label: "High Quality" },
    { value: "ultra", label: "Ultra" },
];

// Tooltip content dictionary
const TOOLTIPS = {
    aspectRatio: "Choose the output shape of the image.",
    realism: "How photorealistic the final image should look.",
    creationMode: "Select the overall style of the generated image.",
    quality: "Choose the output quality level.",
};

export const SidebarGroupOutput: React.FC<SidebarGroupOutputProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {/* Aspect Ratio */}
            <SubAccordion title="Aspect Ratio" defaultOpen={true}>
                <Tooltip content={TOOLTIPS.aspectRatio}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Aspect Ratio ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {ASPECT_RATIO_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.aspectRatio === opt.value}
                            onClick={() => handleOptionChange("aspectRatio", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Realism */}
            <SubAccordion title="Realism Level">
                <Tooltip content={TOOLTIPS.realism}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Realism Level ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {REALISM_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.realism === opt.value}
                            onClick={() => handleOptionChange("realism", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Creation Mode */}
            <SubAccordion title="Creation Mode">
                <Tooltip content={TOOLTIPS.creationMode}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Creation Mode ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {CREATION_MODE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.creationMode === opt.value}
                            onClick={() => handleOptionChange("creationMode" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Quality */}
            <SubAccordion title="Output Quality">
                <Tooltip content={TOOLTIPS.quality}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Output Quality ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {QUALITY_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.outputQuality === opt.value}
                            onClick={() => handleOptionChange("outputQuality" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupOutput;

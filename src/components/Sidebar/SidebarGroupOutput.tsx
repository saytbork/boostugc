import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
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

// Model strength options
const MODEL_STRENGTH_OPTIONS = [
    { value: "low", label: "Low (0.3)" },
    { value: "medium", label: "Medium (0.5)" },
    { value: "high", label: "High (0.7)" },
    { value: "max", label: "Max (0.9)" },
];

export const SidebarGroupOutput: React.FC<SidebarGroupOutputProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {/* Aspect Ratio */}
            <SubAccordion title="Aspect Ratio" defaultOpen={true}>
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

import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    ASPECT_RATIO_OPTIONS,
    SKIN_REALISM_OPTIONS,
    CREATION_MODE_OPTIONS,
} from "../../../constants";

interface SidebarGroupOutputProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = "Output Settings";

export const SidebarGroupOutput: React.FC<SidebarGroupOutputProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col gap-5">
            {/* Aspect Ratio */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Aspect Ratio
                </label>
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
            </div>

            {/* Realism Level */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Realism Level
                </label>
                <div className="flex flex-wrap gap-2">
                    {SKIN_REALISM_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.skinRealism === opt.value}
                            onClick={() => handleOptionChange("skinRealism", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Creation Mode */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Creation Mode
                </label>
                <div className="flex flex-wrap gap-2">
                    {CREATION_MODE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.creationMode === opt.value}
                            onClick={() => handleOptionChange("creationMode", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupOutput;

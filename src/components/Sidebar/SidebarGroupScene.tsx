import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    SETTING_OPTIONS,
    ENVIRONMENT_ORDER_OPTIONS,
    LIGHTING_OPTIONS,
    MICRO_LOCATION_OPTIONS,
    PERSON_PROP_OPTIONS,
} from "../../../constants";

interface SidebarGroupSceneProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    disabled?: boolean;
}

const SECTION_TITLE = "Scene & Environment";

export const SidebarGroupScene: React.FC<SidebarGroupSceneProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col gap-5">
            {/* Setting */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Setting
                </label>
                <div className="flex flex-wrap gap-2">
                    {SETTING_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.setting === opt.value}
                            onClick={() => handleOptionChange("setting", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Environment */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Environment
                </label>
                <div className="flex flex-wrap gap-2">
                    {ENVIRONMENT_ORDER_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.environmentOrder === opt.value}
                            onClick={() => handleOptionChange("environmentOrder", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Lighting */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Lighting
                </label>
                <div className="flex flex-wrap gap-2">
                    {LIGHTING_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.lighting === opt.value}
                            onClick={() => handleOptionChange("lighting", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Micro Location */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Micro Location
                </label>
                <div className="flex flex-wrap gap-2">
                    {MICRO_LOCATION_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.microLocation === opt.value}
                            onClick={() => handleOptionChange("microLocation", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>

            {/* Props */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Props
                </label>
                <div className="flex flex-wrap gap-2">
                    {PERSON_PROP_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personProps === opt.value}
                            onClick={() => handleOptionChange("personProps", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupScene;

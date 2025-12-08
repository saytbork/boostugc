import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    SETTING_OPTIONS,
    ENVIRONMENT_ORDER_OPTIONS,
    LIGHTING_OPTIONS,
    MICRO_LOCATION_OPTIONS,
    PERSON_PROP_OPTIONS,
    COMPOSITION_MODE_OPTIONS,
    CREATION_MODE_OPTIONS,
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
        <div className="flex flex-col">
            {/* Scene Presets */}
            <SubAccordion title="Setting" defaultOpen={true}>
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
            </SubAccordion>

            {/* Micro Location */}
            <SubAccordion title="Micro Location">
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
            </SubAccordion>

            {/* Environment Tone */}
            <SubAccordion title="Environment">
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
            </SubAccordion>

            {/* Lighting */}
            <SubAccordion title="Lighting">
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
            </SubAccordion>

            {/* Props */}
            <SubAccordion title="Props">
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
            </SubAccordion>

            {/* Composition Mode */}
            <SubAccordion title="Composition">
                <div className="flex flex-wrap gap-2">
                    {COMPOSITION_MODE_OPTIONS?.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.compositionMode === opt.value}
                            onClick={() => handleOptionChange("compositionMode" as OptionCategory, opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupScene;

import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import Tooltip from "../UI/Tooltip";
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

// Tooltip content dictionary
const TOOLTIPS = {
    setting: "Choose the main place where the scene happens.",
    microLocation: "Small details that define where the product or person is inside the scene.",
    environment: "How clean or messy the scene looks.",
    lighting: "Choose the lighting style used in the scene.",
    props: "Add supporting elements to the scene.",
    composition: "Control how elements are arranged in the frame.",
};

export const SidebarGroupScene: React.FC<SidebarGroupSceneProps> = ({
    options,
    handleOptionChange,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {/* Setting */}
            <SubAccordion title="Setting" defaultOpen={true}>
                <Tooltip content={TOOLTIPS.setting}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Location / Setting ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.microLocation}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Micro Location ⓘ
                    </label>
                </Tooltip>
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

            {/* Environment */}
            <SubAccordion title="Environment">
                <Tooltip content={TOOLTIPS.environment}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Environment Order ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.lighting}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Lighting ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.props}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Scene Props ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.composition}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Composition Mode ⓘ
                    </label>
                </Tooltip>
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

import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import Tooltip from "../UI/Tooltip";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    AGE_GROUP_OPTIONS,
    PERSON_APPEARANCE_OPTIONS,
    PERSON_MOOD_OPTIONS,
    PERSON_EXPRESSION_OPTIONS,
    PERSON_POSE_OPTIONS,
    WARDROBE_STYLE_OPTIONS,
    GENDER_OPTIONS,
    ETHNICITY_OPTIONS,
    PRODUCT_INTERACTION_OPTIONS,
} from "../../../constants";

interface SidebarGroupPersonProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    personControlsDisabled?: boolean;
    isProductPlacement?: boolean;
    disabled?: boolean;
}

const SECTION_TITLE = "Person Details";

// Tooltip content dictionary
const TOOLTIPS = {
    identity: "Choose the person's basic characteristics.",
    pose: "Decide how the person is standing or moving.",
    wardrobe: "Select the clothing style.",
    expression: "Choose the emotional tone of the person.",
    appearance: "Fine details like hair, style, or personal features.",
    interaction: "How the person interacts with the product.",
};

export const SidebarGroupPerson: React.FC<SidebarGroupPersonProps> = ({
    options,
    handleOptionChange,
    personControlsDisabled = false,
    isProductPlacement = false,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {/* Identity */}
            <SubAccordion title="Identity" defaultOpen={true}>
                <Tooltip content={TOOLTIPS.identity}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-3 block cursor-help">
                        Identity ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Age Group</label>
                        <div className="flex flex-wrap gap-2">
                            {AGE_GROUP_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.ageGroup === opt.value}
                                    onClick={() => handleOptionChange("ageGroup", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Gender</label>
                        <div className="flex flex-wrap gap-2">
                            {GENDER_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.gender === opt.value}
                                    onClick={() => handleOptionChange("gender", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Ethnicity</label>
                        <div className="flex flex-wrap gap-2">
                            {ETHNICITY_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.ethnicity === opt.value}
                                    onClick={() => handleOptionChange("ethnicity", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SubAccordion>

            {/* Pose */}
            <SubAccordion title="Pose">
                <Tooltip content={TOOLTIPS.pose}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Pose ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {PERSON_POSE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personPose === opt.value}
                            onClick={() => handleOptionChange("personPose", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Wardrobe */}
            <SubAccordion title="Wardrobe">
                <Tooltip content={TOOLTIPS.wardrobe}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Wardrobe ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {WARDROBE_STYLE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.wardrobeStyle === opt.value}
                            onClick={() => handleOptionChange("wardrobeStyle", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Expression & Mood */}
            <SubAccordion title="Expression & Mood">
                <Tooltip content={TOOLTIPS.expression}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-3 block cursor-help">
                        Expression & Mood ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Mood</label>
                        <div className="flex flex-wrap gap-2">
                            {PERSON_MOOD_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.personMood === opt.value}
                                    onClick={() => handleOptionChange("personMood", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block">Expression</label>
                        <div className="flex flex-wrap gap-2">
                            {PERSON_EXPRESSION_OPTIONS.map((opt) => (
                                <CapsuleButton
                                    key={opt.value}
                                    label={opt.label}
                                    selected={options.personExpression === opt.value}
                                    onClick={() => handleOptionChange("personExpression", opt.value, SECTION_TITLE)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SubAccordion>

            {/* Appearance */}
            <SubAccordion title="Appearance Level">
                <Tooltip content={TOOLTIPS.appearance}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Appearance ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {PERSON_APPEARANCE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personAppearance === opt.value}
                            onClick={() => handleOptionChange("personAppearance", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Interaction */}
            <SubAccordion title="Product Interaction">
                <Tooltip content={TOOLTIPS.interaction}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Interaction ⓘ
                    </label>
                </Tooltip>
                <div className="flex flex-wrap gap-2">
                    {PRODUCT_INTERACTION_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productInteraction === opt.value}
                            onClick={() => handleOptionChange("productInteraction", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupPerson;

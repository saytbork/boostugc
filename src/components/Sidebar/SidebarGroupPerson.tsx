import React from "react";
import { CapsuleButton } from "./CapsuleButton";
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

export const SidebarGroupPerson: React.FC<SidebarGroupPersonProps> = ({
    options,
    handleOptionChange,
    personControlsDisabled = false,
    isProductPlacement = false,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col gap-5">
            {/* Age Group */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Age Group
                </label>
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

            {/* Appearance Level */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Appearance Level
                </label>
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
            </div>

            {/* Mood */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Mood
                </label>
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

            {/* Expression */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Expression
                </label>
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

            {/* Pose */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Pose
                </label>
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
            </div>

            {/* Wardrobe */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Wardrobe
                </label>
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
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Gender
                </label>
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

            {/* Ethnicity */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Ethnicity
                </label>
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

            {/* Product Interaction */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Product Interaction
                </label>
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
            </div>
        </div>
    );
};

export default SidebarGroupPerson;

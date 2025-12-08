import React from 'react';
import CapsuleButton from './CapsuleButton';
import { MockupOptions, OptionCategory } from '../../../types';
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
} from '../../../constants';

interface SidebarGroupPersonProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    personControlsDisabled?: boolean;
    isProductPlacement?: boolean;
    disabled?: boolean;
}

const SECTION_TITLE = 'Person Details';

const SidebarGroupPerson: React.FC<SidebarGroupPersonProps> = ({
    options,
    handleOptionChange,
    personControlsDisabled = false,
    isProductPlacement = false,
    disabled = false,
}) => {
    const isDisabled = disabled || personControlsDisabled;

    // Special: Age Group is always enabled (to allow "No Person" selection)
    const ageGroupDisabled = disabled || isProductPlacement;

    return (
        <div className="sidebar-group">
            {/* Age Group */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Age Group</label>
                <div className="sidebar-capsule-grid">
                    {AGE_GROUP_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.ageGroup === opt.value}
                            onClick={() => handleOptionChange('ageGroup', opt.value, SECTION_TITLE)}
                            disabled={ageGroupDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Appearance Level */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Appearance Level</label>
                <div className="sidebar-capsule-grid">
                    {PERSON_APPEARANCE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personAppearance === opt.value}
                            onClick={() => handleOptionChange('personAppearance', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Mood */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Mood</label>
                <div className="sidebar-capsule-grid">
                    {PERSON_MOOD_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personMood === opt.value}
                            onClick={() => handleOptionChange('personMood', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Expression */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Expression</label>
                <div className="sidebar-capsule-grid">
                    {PERSON_EXPRESSION_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personExpression === opt.value}
                            onClick={() => handleOptionChange('personExpression', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Pose */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Pose</label>
                <div className="sidebar-capsule-grid">
                    {PERSON_POSE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.personPose === opt.value}
                            onClick={() => handleOptionChange('personPose', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Wardrobe */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Wardrobe</label>
                <div className="sidebar-capsule-grid">
                    {WARDROBE_STYLE_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.wardrobeStyle === opt.value}
                            onClick={() => handleOptionChange('wardrobeStyle', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Gender */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Gender</label>
                <div className="sidebar-capsule-grid">
                    {GENDER_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.gender === opt.value}
                            onClick={() => handleOptionChange('gender', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Ethnicity */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Ethnicity</label>
                <div className="sidebar-capsule-grid">
                    {ETHNICITY_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.ethnicity === opt.value}
                            onClick={() => handleOptionChange('ethnicity', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>

            {/* Product Interaction */}
            <div className="sidebar-field">
                <label className="sidebar-field-label">Product Interaction</label>
                <div className="sidebar-capsule-grid">
                    {PRODUCT_INTERACTION_OPTIONS.map(opt => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.productInteraction === opt.value}
                            onClick={() => handleOptionChange('productInteraction', opt.value, SECTION_TITLE)}
                            disabled={isDisabled}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroupPerson;

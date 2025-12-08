import React from 'react';
import { User, Sparkles, Layers, Hand, Shirt, Aperture } from 'lucide-react';
import Accordion from '../UI/Accordion';
import Tooltip from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import UGCRealModePanel from '../UGCRealModePanel';
import {
    AGE_GROUP_OPTIONS,
    GENDER_OPTIONS,
    ETHNICITY_OPTIONS,
    PERSON_EXPRESSION_OPTIONS,
    SELFIE_TYPE_OPTIONS,
    EYE_DIRECTION_OPTIONS,
    PERSON_APPEARANCE_OPTIONS,
    PERSON_MOOD_OPTIONS,
    PERSON_POSE_OPTIONS,
    PRODUCT_INTERACTION_OPTIONS,
    WARDROBE_STYLE_OPTIONS,
} from '../../../constants';
import { UGC_CLOTHING_PRESETS } from '../../data/ugcPresets';
import { MockupOptions, Option, StoryboardScene, UGCRealModeSettings } from '../../../types';
// If StoryboardScene is not exported, I might need to define a subset interface or export it from App.tsx.
// For now I will define a local interface or use "any" for storyboardScenes if verified it's not exported.
// Actually App.tsx defined it locally. I should export it from App.tsx or move it to types.ts.
// "Plan B": I will move StoryboardScene to types.ts in a separate step or just redefine a minimal version / use any to avoid circular deps if App imports this.
// Importing types from App.tsx into a component that App.tsx imports is a CIRCULAR DEPENDENCY RISK.
// I MUST NOT import from App.tsx.
// I will check types.ts to see if I can move StoryboardScene there.
// For now I'll use a local interface or `any` for the scene related props to be safe.



interface PersonDetailsPanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    personControlsDisabled: boolean;
    isProductPlacement: boolean;
    getSectionId?: (title: string) => string;
    activeTalentPreset?: string;
    activePresetMeta?: any;
    handlePresetSelect?: (val: string) => void;
    normalizedCreatorPresetOptions?: Option[];
    handleSaveTalentProfile?: () => void;
    handleApplySavedTalent?: () => void;
    hasSavedTalent?: boolean;
    talentToast?: string | null;
    isTalentLinkedAcrossScenes?: boolean;
    handleTalentLinkToggle?: () => void;
    isActiveScenePrimary?: boolean;
    storyboardScenes?: StoryboardScene[];
    ugcRealSettings: UGCRealModeSettings;
    handleUGCRealModeToggle: (value: boolean) => void;
    handleClothingPresetToggle: (id: string) => void;
    handleFramingSelect: (id: string) => void;
}

const PersonDetailsPanel: React.FC<PersonDetailsPanelProps> = ({
    options,
    handleOptionChange,
    personControlsDisabled,
    isProductPlacement,
    getSectionId = (s) => s,
    activeTalentPreset,
    activePresetMeta,
    handlePresetSelect,
    normalizedCreatorPresetOptions,
    handleSaveTalentProfile,
    handleApplySavedTalent,
    hasSavedTalent,
    talentToast,
    isTalentLinkedAcrossScenes,
    handleTalentLinkToggle,
    isActiveScenePrimary,
    storyboardScenes = [],
    ugcRealSettings,
    handleUGCRealModeToggle,
    handleClothingPresetToggle,
    handleFramingSelect,
}) => {
    return (
        <>
            {isProductPlacement ? null : (
                <div id={getSectionId('Person Details')}>
                    <Accordion title="Person Details" icon={<User size={18} />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Tooltip content="Select the approximate age appearance.">
                                <ChipSelectGroup label="Age Group" options={AGE_GROUP_OPTIONS} selectedValue={options.ageGroup} onChange={(value: any) => handleOptionChange('ageGroup', value, 'Person Details')} disabled={personControlsDisabled} />
                            </Tooltip>
                            <Tooltip content="Choose the gender presentation of the talent.">
                                <ChipSelectGroup label="Gender" options={GENDER_OPTIONS} selectedValue={options.gender} onChange={(value: any) => handleOptionChange('gender', value, 'Person Details')} disabled={personControlsDisabled} />
                            </Tooltip>
                            <Tooltip content="Guide the cultural and physical traits.">
                                <ChipSelectGroup label="Ethnicity" options={ETHNICITY_OPTIONS} selectedValue={options.ethnicity} onChange={(value: any) => handleOptionChange('ethnicity', value, 'Person Details')} disabled={personControlsDisabled} />
                            </Tooltip>
                            <Tooltip content="Set the emotional tone of the face.">
                                <ChipSelectGroup label="Expression" options={PERSON_EXPRESSION_OPTIONS} selectedValue={options.personExpression} onChange={(value: any) => handleOptionChange('personExpression', value, 'Person Details')} disabled={personControlsDisabled} />
                            </Tooltip>
                            <Tooltip content="Enable rules for mirror selfies and POV shots.">
                                <ChipSelectGroup label="Selfie Type" options={SELFIE_TYPE_OPTIONS} selectedValue={options.selfieType} onChange={(value: any) => handleOptionChange('selfieType', value, 'Person Details')} disabled={personControlsDisabled} />
                            </Tooltip>
                            <Tooltip content="Control where the subject should look.">
                                <ChipSelectGroup
                                    label="Eye Contact"
                                    options={EYE_DIRECTION_OPTIONS}
                                    selectedValue={options.eyeDirection as any}
                                    onChange={(value: any) => handleOptionChange('eyeDirection', value, 'Person')}
                                    disabled={personControlsDisabled}
                                />
                            </Tooltip>

                            <div className={`sm:col-span-2 rounded-lg border border-white/10 bg-gray-900/40 p-3 space-y-3 ${personControlsDisabled ? 'opacity-50' : ''}`}>
                                <Tooltip content="Load a predefined creator look." className="w-full">
                                    {normalizedCreatorPresetOptions && handlePresetSelect && (
                                        <ChipSelectGroup label="Creator Preset" options={normalizedCreatorPresetOptions} selectedValue={activeTalentPreset || ''} onChange={(value: any) => handlePresetSelect(value)} disabled={personControlsDisabled} />
                                    )}
                                </Tooltip>
                                {activePresetMeta?.description && <p className="text-xs text-gray-400">{activePresetMeta.description}</p>}
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <Tooltip content="Save the current selections as your own talent.">
                                        <button type="button" onClick={handleSaveTalentProfile} disabled={personControlsDisabled} className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 font-semibold text-white/80 hover:border-indigo-400 hover:text-white transition disabled:opacity-60">
                                            Save as My Talent
                                        </button>
                                    </Tooltip>
                                    <Tooltip content="Apply your saved talent across images.">
                                        <button type="button" onClick={handleApplySavedTalent} disabled={personControlsDisabled || !hasSavedTalent} className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 font-semibold text-white/80 hover:border-indigo-400 hover:text-white transition disabled:opacity-60">
                                            Apply saved talent
                                        </button>
                                    </Tooltip>
                                </div>
                                {talentToast === 'saved' && <p className="text-xs text-emerald-300">Talent saved for future scenes.</p>}
                                {talentToast === 'applied' && <p className="text-xs text-emerald-300">Saved talent applied.</p>}
                            </div>

                            <Tooltip content="Keep the same model across multiple images." className="sm:col-span-2">
                                <div className="rounded-lg border border-white/10 bg-gray-900/50 p-3 space-y-2">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Link talent across scenes</p>
                                            <p className="text-xs text-gray-400">Keep this same creator across storyboard scenes.</p>
                                        </div>
                                        <label className="relative inline-flex cursor-pointer items-center gap-2">
                                            <input type="checkbox" className="sr-only" checked={isTalentLinkedAcrossScenes} onChange={handleTalentLinkToggle} disabled={personControlsDisabled} />
                                            <div className={`relative h-5 w-10 rounded-full transition ${isTalentLinkedAcrossScenes ? 'bg-indigo-500' : 'bg-gray-700'} ${personControlsDisabled ? 'opacity-50' : ''}`}>
                                                <span className={`absolute left-1 top-1 block h-3 w-3 rounded-full bg-white shadow transition ${isTalentLinkedAcrossScenes ? 'translate-x-4' : ''}`} />
                                            </div>
                                            <span className={`text-xs font-semibold ${isTalentLinkedAcrossScenes ? 'text-indigo-200' : 'text-gray-500'}`}>
                                                {isTalentLinkedAcrossScenes ? 'Active' : 'Off'}
                                            </span>
                                        </label>
                                    </div>
                                    {personControlsDisabled && <p className="text-[11px] text-gray-500">Enable people in this scene to sync the talent across your storyboard.</p>}
                                    {isTalentLinkedAcrossScenes && !isActiveScenePrimary && (
                                        <p className="text-[11px] text-amber-200">
                                            Identity locked from {storyboardScenes?.[0]?.label || 'Scene 1'} while Same Person is active.
                                        </p>
                                    )}
                                    {isTalentLinkedAcrossScenes && !personControlsDisabled && (
                                        <p className="text-[11px] text-indigo-200">
                                            Any tweak you make to the person instantly updates every other scene that still features them.
                                        </p>
                                    )}
                                </div>
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('Appearance Level')}>
                    <Accordion title="Appearance Level" icon={<User size={18} />} defaultOpen={false}>
                        <div className="space-y-4">
                            <Tooltip content="Overall grooming and appearance level.">
                                <ChipSelectGroup label="Appearance Level" options={PERSON_APPEARANCE_OPTIONS} selectedValue={options.personAppearance} onChange={(value: any) => handleOptionChange('personAppearance', value, 'Appearance Level')} disabled={personControlsDisabled} />
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('Mood')}>
                    <Accordion title="Mood" icon={<Sparkles size={18} />} defaultOpen={false}>
                        <div className="space-y-4">
                            <Tooltip content="Define the emotional atmosphere of the scene.">
                                <ChipSelectGroup label="Mood" options={PERSON_MOOD_OPTIONS} selectedValue={options.personMood} onChange={(value: any) => handleOptionChange('personMood', value, 'Mood')} disabled={personControlsDisabled} />
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('Pose')}>
                    <Accordion title="Pose" icon={<Layers size={18} />} defaultOpen={false}>
                        <div className="space-y-4">
                            <Tooltip content="Choose the body posture or gesture.">
                                <ChipSelectGroup label="Pose" options={PERSON_POSE_OPTIONS} selectedValue={options.personPose} onChange={(value: any) => handleOptionChange('personPose', value, 'Pose')} disabled={personControlsDisabled} />
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('Interaction')}>
                    <Accordion title="Interaction" icon={<Hand size={18} />} defaultOpen={false}>
                        <div className="space-y-4">
                            <Tooltip content="Define how the subject engages with the product.">
                                <ChipSelectGroup label="Interaction" options={PRODUCT_INTERACTION_OPTIONS} selectedValue={options.productInteraction} onChange={(value: any) => handleOptionChange('productInteraction', value, 'Interaction')} disabled={personControlsDisabled} />
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('Wardrobe')}>
                    <Accordion title="Wardrobe" icon={<Shirt size={18} />} defaultOpen={false}>
                        <div className="space-y-4">
                            <Tooltip content="Select a clothing style for the subject.">
                                <ChipSelectGroup label="Wardrobe" options={WARDROBE_STYLE_OPTIONS} selectedValue={options.wardrobeStyle} onChange={(value: any) => handleOptionChange('wardrobeStyle', value, 'Wardrobe')} disabled={personControlsDisabled} />
                            </Tooltip>
                        </div>
                    </Accordion>
                </div>
            )}
            {!isProductPlacement && (
                <div id={getSectionId('UGC Real Mode')}>
                    <Accordion title="UGC Real Mode" icon={<Aperture size={18} />} defaultOpen={false}>
                        <UGCRealModePanel
                            disabled={personControlsDisabled}
                            enabled={ugcRealSettings.isEnabled}
                            onToggle={handleUGCRealModeToggle}
                            clothingPresets={UGC_CLOTHING_PRESETS}
                            selectedClothingPresetIds={ugcRealSettings.selectedClothingPresetIds}
                            onToggleClothingPreset={handleClothingPresetToggle}
                            onSelectFraming={handleFramingSelect}
                        />
                    </Accordion>
                </div>
            )}
        </>
    );
};

export default PersonDetailsPanel;

import React from 'react';
import Accordion from '../UI/Accordion';
import Tooltip from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import {
    SETTING_OPTIONS,
    EYE_DIRECTION_OPTIONS,
    ENVIRONMENT_ORDER_OPTIONS,
    COMPOSITION_MODE_OPTIONS,
    SIDE_PLACEMENT_OPTIONS,
    CREATION_MODE_OPTIONS
} from '../../../constants';
import { MockupOptions } from '../../../types';

interface LifestyleScenePanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    applyOptionsUpdate: (updateFn: (prev: MockupOptions) => MockupOptions) => void;
    getSectionId?: (section: string) => string;
}

const LifestyleScenePanel: React.FC<LifestyleScenePanelProps> = ({
    options,
    handleOptionChange,
    applyOptionsUpdate,
    getSectionId = (s) => s,
}) => {
    return (
        <Accordion title="Scene & Environment" defaultOpen={false}>
            <div className="space-y-2 pt-2">
                <Accordion title="Setting" defaultOpen={false}>
                    <Tooltip content="Choose the overall environment where the scene takes place.">
                        <ChipSelectGroup
                            label="Location / Setting"
                            options={SETTING_OPTIONS}
                            selectedValue={options.setting}
                            onChange={(value: string) => handleOptionChange('setting', value, 'Scene & Environment')}
                            allowCustom
                            customLabel="Custom setting"
                            customPlaceholder="Describe the location"
                        />
                    </Tooltip>
                </Accordion>

                <Accordion title="Micro Location" defaultOpen={false}>
                    <Tooltip content="Add a more precise location inside the main setting.">
                        <ChipSelectGroup
                            label="Eye Contact"
                            options={EYE_DIRECTION_OPTIONS}
                            selectedValue={options.eyeDirection as any}
                            onChange={(value: any) => handleOptionChange('eyeDirection', value, 'Person')}
                        />
                    </Tooltip>
                </Accordion>

                <Accordion title="Environment Order" defaultOpen={false}>
                    <Tooltip content="Choose the overall environment where the scene takes place.">
                        <ChipSelectGroup
                            label="Environment Order"
                            options={ENVIRONMENT_ORDER_OPTIONS}
                            selectedValue={options.environmentOrder}
                            onChange={(value: any) => handleOptionChange('environmentOrder', value, 'Scene & Environment')}
                            allowCustom
                            customLabel="Custom environment"
                            customPlaceholder="Describe the vibe"
                        />
                    </Tooltip>
                </Accordion>

                <Accordion title="Composition Mode" defaultOpen={false}>
                    <Tooltip content="Define how the subject is framed.">
                        <ChipSelectGroup
                            label="Composition Mode"
                            options={COMPOSITION_MODE_OPTIONS}
                            selectedValue={options.compositionMode}
                            onChange={(value: any) => handleOptionChange('compositionMode', value, 'Scene & Environment')}
                        />
                    </Tooltip>
                    {options.compositionMode === 'ecom-blank' && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
                            <ChipSelectGroup
                                label="Side Placement"
                                options={SIDE_PLACEMENT_OPTIONS}
                                selectedValue={options.sidePlacement}
                                onChange={(value: any) => handleOptionChange('sidePlacement', value, 'Scene & Environment')}
                            />
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-200">Background Color</label>
                                <input
                                    type="color"
                                    value={options.bgColor}
                                    onChange={event =>
                                        applyOptionsUpdate(prev => ({ ...prev, bgColor: event.target.value }))
                                    }
                                    className="h-10 w-16 rounded cursor-pointer border border-[var(--border-subtle)] bg-[var(--bg-panel)]"
                                />
                            </div>
                        </div>
                    )}
                </Accordion>

                <Accordion title="Creation Mode" defaultOpen={false}>
                    <Tooltip content="Choose the artistic or realism style.">
                        <ChipSelectGroup
                            label="Creation Mode"
                            options={CREATION_MODE_OPTIONS}
                            selectedValue={options.creationMode}
                            onChange={(value: any) => handleOptionChange('creationMode', value, 'Scene & Environment')}
                        />
                    </Tooltip>
                </Accordion>
            </div>
        </Accordion>
    );
};

export default LifestyleScenePanel;

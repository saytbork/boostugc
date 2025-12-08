import React from 'react';
import { Camera } from 'lucide-react';
import Accordion from '../UI/Accordion';
import Tooltip from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import {
    LIGHTING_OPTIONS,
    CAMERA_OPTIONS,
    CAMERA_ANGLE_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
    ASPECT_RATIO_OPTIONS,
    PERSPECTIVE_OPTIONS,
    REALISM_OPTIONS
} from '../../../constants';
import { MockupOptions } from '../../../types';

interface LifestylePhotographyPanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    getSectionId?: (section: string) => string;
    cameraControlsDisabled: boolean;
    isSimpleMode: boolean;
}

const LifestylePhotographyPanel: React.FC<LifestylePhotographyPanelProps> = ({
    options,
    handleOptionChange,
    getSectionId = (s) => s,
    cameraControlsDisabled,
    isSimpleMode,
}) => {
    return (
        <Accordion title="Photography" icon={<Camera size={18} />} defaultOpen={false}>
            <div id={getSectionId('Photography')} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${cameraControlsDisabled ? 'opacity-70' : ''}`}>
                <Tooltip content="Choose a lighting style that defines mood and contrast.">
                    <ChipSelectGroup
                        label="Lighting"
                        options={LIGHTING_OPTIONS}
                        selectedValue={options.lighting}
                        onChange={(value: string) => handleOptionChange('lighting', value, 'Photography')}
                    />
                </Tooltip>
                <Tooltip content="Select the lens type used for the shot.">
                    <ChipSelectGroup
                        label="Camera Type"
                        options={CAMERA_OPTIONS}
                        selectedValue={options.camera}
                        onChange={(value: string) => handleOptionChange('camera', value, 'Photography')}
                        disabled={!!cameraControlsDisabled}
                    />
                </Tooltip>
                <Tooltip content="Control how close or far the subject appears.">
                    <ChipSelectGroup
                        label="Camera Shot"
                        options={CAMERA_ANGLE_OPTIONS}
                        selectedValue={options.cameraShot ?? ''}
                        onChange={(value: any) => handleOptionChange('cameraShot', value, 'Photography')}
                        disabled={!!cameraControlsDisabled}
                    />
                </Tooltip>
                <Tooltip content="Set the vertical or tilted angle of the perspective.">
                    <ChipSelectGroup
                        label="Camera Angle"
                        options={CAMERA_ANGLE_OPTIONS}
                        selectedValue={options.cameraAngle ?? ''}
                        onChange={(value: any) => handleOptionChange('cameraAngle', value, 'Photography')}
                        disabled={!!cameraControlsDisabled}
                    />
                </Tooltip>
                <Tooltip content="Adjust physical distance between camera and subject.">
                    <ChipSelectGroup
                        label="Camera Distance"
                        options={CAMERA_DISTANCE_OPTIONS}
                        selectedValue={options.cameraDistance}
                        onChange={(value: string) => handleOptionChange('cameraDistance', value as any, 'Photography')}
                        disabled={!!cameraControlsDisabled}
                    />
                </Tooltip>
                <Tooltip content="Define how the subject is framed.">
                    <ChipSelectGroup
                        label="Aspect Ratio"
                        options={ASPECT_RATIO_OPTIONS}
                        selectedValue={options.aspectRatio}
                        onChange={(value: string) => handleOptionChange('aspectRatio', value, 'Photography')}
                    />
                </Tooltip>
                {!isSimpleMode && (
                    <>
                        <Tooltip content="Define how the subject is framed.">
                            <ChipSelectGroup
                                label="Perspective"
                                options={PERSPECTIVE_OPTIONS}
                                selectedValue={options.perspective}
                                onChange={(value: string) => handleOptionChange('perspective', value, 'Photography')}
                            />
                        </Tooltip>
                        <Tooltip content="Choose the artistic or realism style.">
                            <ChipSelectGroup
                                label="Realism / Imperfections"
                                options={REALISM_OPTIONS}
                                selectedValue={options.realism}
                                onChange={(value: string) => handleOptionChange('realism', value, 'Photography')}
                            />
                        </Tooltip>
                    </>
                )}
            </div>
        </Accordion>
    );
};

export default LifestylePhotographyPanel;

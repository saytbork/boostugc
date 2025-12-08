import React from 'react';
import { Camera, Sun } from 'lucide-react';
import Accordion from '../UI/Accordion';
import Tooltip from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import {
    LIGHTING_OPTIONS,
    CAMERA_OPTIONS,
    CAMERA_ANGLE_OPTIONS,
    CAMERA_DISTANCE_OPTIONS
} from '../../../constants';
import { MockupOptions } from '../../../types';

interface ProductPhotographyPanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    getSectionId: (section: string) => string;
}

const ProductPhotographyPanel: React.FC<ProductPhotographyPanelProps> = ({
    options,
    handleOptionChange,
    getSectionId,
}) => {
    return (
        <div id={getSectionId('Photography')}>
            <div className="space-y-6 pt-2">
                <Accordion title="Photography" icon={<Camera size={18} />} defaultOpen={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tooltip content="Select the lens type used for the shot.">
                            <ChipSelectGroup
                                label="Camera Type"
                                options={CAMERA_OPTIONS}
                                selectedValue={options.camera ?? ''}
                                onChange={(value) => handleOptionChange('camera', value, 'Photography')}
                            />
                        </Tooltip>
                        <Tooltip content="Control how close or far the subject appears.">
                            <ChipSelectGroup
                                label="Camera Shot"
                                options={CAMERA_ANGLE_OPTIONS}
                                selectedValue={options.cameraShot ?? ''}
                                onChange={(value) => handleOptionChange('cameraShot', value, 'Photography')}
                            />
                        </Tooltip>
                        <Tooltip content="Set the vertical or tilted angle of the perspective.">
                            <ChipSelectGroup
                                label="Camera Angle"
                                options={CAMERA_ANGLE_OPTIONS}
                                selectedValue={options.cameraAngle ?? ''}
                                onChange={(value) => handleOptionChange('cameraAngle', value, 'Photography')}
                            />
                        </Tooltip>
                        <Tooltip content="Adjust physical distance between camera and subject.">
                            <ChipSelectGroup
                                label="Camera Distance"
                                options={CAMERA_DISTANCE_OPTIONS}
                                selectedValue={options.cameraDistance}
                                onChange={(value) => handleOptionChange('cameraDistance', value, 'Photography')}
                            />
                        </Tooltip>
                    </div>
                </Accordion>

                <Accordion title="Lighting" icon={<Sun size={18} />} defaultOpen={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tooltip content="Choose a lighting style that defines mood and contrast.">
                            <ChipSelectGroup
                                label="Lighting"
                                options={LIGHTING_OPTIONS}
                                selectedValue={options.lighting}
                                onChange={(value) => handleOptionChange('lighting', value, 'Lighting')}
                            />
                        </Tooltip>
                    </div>
                </Accordion>
            </div>
        </div>
    );
};

export default ProductPhotographyPanel;

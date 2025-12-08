import React from 'react';
import { Image as ImageIcon, Map } from 'lucide-react';
import Accordion from '../UI/Accordion';
import Tooltip from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import {
    PLACEMENT_STYLE_OPTIONS,
    PRODUCT_MATERIAL_OPTIONS,
    SETTING_OPTIONS
} from '../../../constants';
import { MockupOptions } from '../../../types';

interface ProductScenePanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    getSectionId: (section: string) => string;
}

const ProductScenePanel: React.FC<ProductScenePanelProps> = ({
    options,
    handleOptionChange,
    getSectionId,
}) => {
    return (
        <div id={getSectionId('Product Basics')}>
            <div className="space-y-6 pt-2">
                <Accordion title="Product Basics" icon={<ImageIcon size={18} />}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tooltip content="Choose the overall styling and presentation approach for your product.">
                            <ChipSelectGroup
                                label="Placement Style"
                                options={PLACEMENT_STYLE_OPTIONS}
                                selectedValue={options.placementStyle}
                                onChange={(value) => handleOptionChange('placementStyle', value, 'Product Basics')}
                                allowCustom
                                customLabel="Custom style"
                                customPlaceholder="Describe the placement approach"
                            />
                        </Tooltip>
                        <Tooltip content="Define the product's primary material.">
                            <ChipSelectGroup
                                label="Product Material"
                                options={PRODUCT_MATERIAL_OPTIONS}
                                selectedValue={options.productMaterial}
                                onChange={(value) => handleOptionChange('productMaterial', value, 'Product Basics')}
                                allowCustom
                                customLabel="Custom material"
                                customPlaceholder="Describe the finish"
                            />
                        </Tooltip>
                    </div>
                </Accordion>

                <Accordion title="Environment" icon={<Map size={18} />} defaultOpen={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tooltip content="Choose where the scene takes place.">
                            <ChipSelectGroup
                                label="Setting"
                                options={SETTING_OPTIONS}
                                selectedValue={options.setting}
                                onChange={(value) => handleOptionChange('setting', value, 'Environment')}
                                allowCustom
                                customLabel="Custom setting"
                                customPlaceholder="Describe the location"
                            />
                        </Tooltip>
                    </div>
                </Accordion>
            </div>
        </div>
    );
};

export default ProductScenePanel;

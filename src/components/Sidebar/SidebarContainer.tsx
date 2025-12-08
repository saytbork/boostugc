import React, { useState, useCallback } from 'react';
import { Layers, Camera, User, Settings, Package } from 'lucide-react';
import SidebarSection from './SidebarSection';
import SidebarGroupScene from './SidebarGroupScene';
import SidebarGroupPhotography from './SidebarGroupPhotography';
import SidebarGroupPerson from './SidebarGroupPerson';
import SidebarGroupProduct from './SidebarGroupProduct';
import SidebarGroupOutput from './SidebarGroupOutput';
import { MockupOptions, OptionCategory } from '../../../types';

type SectionId = 'scene' | 'photography' | 'person' | 'product' | 'output';
type SidebarMode = 'lifestyle' | 'product';

interface SidebarContainerProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    personControlsDisabled: boolean;
    isProductPlacement: boolean;
    cameraControlsDisabled: boolean;
    mode: SidebarMode;
    disabled?: boolean;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({
    options,
    handleOptionChange,
    personControlsDisabled,
    isProductPlacement,
    cameraControlsDisabled,
    mode,
    disabled = false,
}) => {
    const [openSection, setOpenSection] = useState<SectionId>('scene');

    const handleToggle = useCallback((sectionId: SectionId) => {
        setOpenSection(prev => (prev === sectionId ? prev : sectionId));
    }, []);

    return (
        <div className="sidebar-container">
            {/* Scene & Environment - Always visible */}
            <SidebarSection
                title="Scene & Environment"
                icon={<Layers size={18} />}
                isOpen={openSection === 'scene'}
                onToggle={() => handleToggle('scene')}
            >
                <SidebarGroupScene
                    options={options}
                    handleOptionChange={handleOptionChange}
                    disabled={disabled}
                />
            </SidebarSection>

            {/* Photography - Always visible */}
            <SidebarSection
                title="Photography"
                icon={<Camera size={18} />}
                isOpen={openSection === 'photography'}
                onToggle={() => handleToggle('photography')}
            >
                <SidebarGroupPhotography
                    options={options}
                    handleOptionChange={handleOptionChange}
                    cameraControlsDisabled={cameraControlsDisabled}
                    disabled={disabled}
                />
            </SidebarSection>

            {/* Person Details - Only in Lifestyle mode */}
            {mode === 'lifestyle' && (
                <SidebarSection
                    title="Person Details"
                    icon={<User size={18} />}
                    isOpen={openSection === 'person'}
                    onToggle={() => handleToggle('person')}
                >
                    <SidebarGroupPerson
                        options={options}
                        handleOptionChange={handleOptionChange}
                        personControlsDisabled={personControlsDisabled}
                        isProductPlacement={isProductPlacement}
                        disabled={disabled}
                    />
                </SidebarSection>
            )}

            {/* Product Settings - Only in Product mode */}
            {mode === 'product' && (
                <SidebarSection
                    title="Product Settings"
                    icon={<Package size={18} />}
                    isOpen={openSection === 'product'}
                    onToggle={() => handleToggle('product')}
                >
                    <SidebarGroupProduct
                        options={options}
                        handleOptionChange={handleOptionChange}
                        disabled={disabled}
                    />
                </SidebarSection>
            )}

            {/* Output Settings - Always visible */}
            <SidebarSection
                title="Output Settings"
                icon={<Settings size={18} />}
                isOpen={openSection === 'output'}
                onToggle={() => handleToggle('output')}
            >
                <SidebarGroupOutput
                    options={options}
                    handleOptionChange={handleOptionChange}
                    disabled={disabled}
                />
            </SidebarSection>
        </div>
    );
};

export default SidebarContainer;

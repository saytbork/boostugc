import React, { useState } from "react";

import { SidebarSection } from "./SidebarSection";
import { SidebarGroupScene } from "./SidebarGroupScene";
import { SidebarGroupPhotography } from "./SidebarGroupPhotography";
import { SidebarGroupPerson } from "./SidebarGroupPerson";
import { SidebarGroupProduct } from "./SidebarGroupProduct";
import { SidebarGroupOutput } from "./SidebarGroupOutput";
import { ProductLibraryItem } from "./SidebarProductLibrary";
import { MockupOptions, OptionCategory } from "../../../types";

type SidebarMode = "lifestyle" | "product";

interface SidebarContainerProps {
    mode: SidebarMode;
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    personControlsDisabled?: boolean;
    isProductPlacement?: boolean;
    cameraControlsDisabled?: boolean;
    disabled?: boolean;
    // Advanced Product Controls
    addHandsEnabled?: boolean;
    setAddHandsEnabled?: (value: boolean) => void;
    isMultiProductPackaging?: boolean;
    setIsMultiProductPackaging?: (value: boolean) => void;
    activeSupplementPreset?: string;
    handleSupplementPresetClick?: (preset: string) => void;
    supplementBackgroundColor?: string;
    setSupplementBackgroundColor?: (value: string) => void;
    supplementAccentColor?: string;
    setSupplementAccentColor?: (value: string) => void;
    supplementFlavorNotes?: string;
    setSupplementFlavorNotes?: (value: string) => void;
    supplementCustomPrompt?: string;
    setSupplementCustomPrompt?: (value: string) => void;
    // Product Library
    productLibraryItems?: ProductLibraryItem[];
    onProductUpload?: (files: FileList) => void;
    onProductRemove?: (id: string) => void;
    onProductUpdate?: (id: string, updates: Partial<ProductLibraryItem>) => void;
    onProductSetHero?: (id: string) => void;
    onProductToggleActive?: (id: string) => void;
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
    mode,
    options,
    handleOptionChange,
    personControlsDisabled = false,
    isProductPlacement = false,
    cameraControlsDisabled = false,
    disabled = false,
    // Advanced Product Controls
    addHandsEnabled = false,
    setAddHandsEnabled,
    isMultiProductPackaging = false,
    setIsMultiProductPackaging,
    activeSupplementPreset = "",
    handleSupplementPresetClick,
    supplementBackgroundColor = "",
    setSupplementBackgroundColor,
    supplementAccentColor = "",
    setSupplementAccentColor,
    supplementFlavorNotes = "",
    setSupplementFlavorNotes,
    supplementCustomPrompt = "",
    setSupplementCustomPrompt,
    // Product Library
    productLibraryItems = [],
    onProductUpload,
    onProductRemove,
    onProductUpdate,
    onProductSetHero,
    onProductToggleActive,
}) => {
    const [openSection, setOpenSection] = useState<string | null>("scene");

    const toggle = (id: string) => {
        setOpenSection((prev) => (prev === id ? null : id));
    };

    return (
        <div
            className="w-full space-y-4"
        >
            {/* SCENE */}
            <SidebarSection
                title="Scene & Environment"
                open={openSection === "scene"}
                onToggle={() => toggle("scene")}
            >
                <SidebarGroupScene
                    options={options}
                    handleOptionChange={handleOptionChange}
                    disabled={disabled}
                />
            </SidebarSection>

            {/* PHOTOGRAPHY */}
            <SidebarSection
                title="Photography"
                open={openSection === "photo"}
                onToggle={() => toggle("photo")}
            >
                <SidebarGroupPhotography
                    options={options}
                    handleOptionChange={handleOptionChange}
                    cameraControlsDisabled={cameraControlsDisabled}
                    disabled={disabled}
                />
            </SidebarSection>

            {/* PERSON (LIFESTYLE) */}
            {mode === "lifestyle" && (
                <SidebarSection
                    title="Person Details"
                    open={openSection === "person"}
                    onToggle={() => toggle("person")}
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

            {/* PRODUCT (PRODUCT MODE) */}
            {mode === "product" && (
                <SidebarSection
                    title="Product Settings"
                    open={openSection === "product"}
                    onToggle={() => toggle("product")}
                >
                    <SidebarGroupProduct
                        options={options}
                        handleOptionChange={handleOptionChange}
                        disabled={disabled}
                        addHandsEnabled={addHandsEnabled}
                        setAddHandsEnabled={setAddHandsEnabled}
                        isMultiProductPackaging={isMultiProductPackaging}
                        setIsMultiProductPackaging={setIsMultiProductPackaging}
                        activeSupplementPreset={activeSupplementPreset}
                        handleSupplementPresetClick={handleSupplementPresetClick}
                        supplementBackgroundColor={supplementBackgroundColor}
                        setSupplementBackgroundColor={setSupplementBackgroundColor}
                        supplementAccentColor={supplementAccentColor}
                        setSupplementAccentColor={setSupplementAccentColor}
                        supplementFlavorNotes={supplementFlavorNotes}
                        setSupplementFlavorNotes={setSupplementFlavorNotes}
                        supplementCustomPrompt={supplementCustomPrompt}
                        setSupplementCustomPrompt={setSupplementCustomPrompt}
                        // Product Library
                        productLibraryItems={productLibraryItems}
                        onProductUpload={onProductUpload}
                        onProductRemove={onProductRemove}
                        onProductUpdate={onProductUpdate}
                        onProductSetHero={onProductSetHero}
                        onProductToggleActive={onProductToggleActive}
                    />
                </SidebarSection>
            )}

            {/* OUTPUT */}
            <SidebarSection
                title="Output Settings"
                open={openSection === "output"}
                onToggle={() => toggle("output")}
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

import React, { useState } from "react";

import { SidebarSection } from "./SidebarSection";
import { SidebarGroupScene } from "./SidebarGroupScene";
import { SidebarGroupPhotography } from "./SidebarGroupPhotography";
import { SidebarGroupPerson } from "./SidebarGroupPerson";
import { SidebarGroupProduct } from "./SidebarGroupProduct";
import { SidebarGroupOutput } from "./SidebarGroupOutput";
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
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
    mode,
    options,
    handleOptionChange,
    personControlsDisabled = false,
    isProductPlacement = false,
    cameraControlsDisabled = false,
    disabled = false,
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

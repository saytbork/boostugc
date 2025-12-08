import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import { MockupOptions, OptionCategory } from "../../../types";
import {
    CAMERA_OPTIONS,
    CAMERA_ANGLE_OPTIONS,
    CAMERA_DISTANCE_OPTIONS,
    PERSPECTIVE_OPTIONS,
    ASPECT_RATIO_OPTIONS,
} from "../../../constants";

interface SidebarGroupPhotographyProps {
    options: MockupOptions;
    handleOptionChange: (category: OptionCategory, value: string, accordionTitle: string) => void;
    cameraControlsDisabled?: boolean;
    disabled?: boolean;
}

const SECTION_TITLE = "Photography";

export const SidebarGroupPhotography: React.FC<SidebarGroupPhotographyProps> = ({
    options,
    handleOptionChange,
    cameraControlsDisabled = false,
    disabled = false,
}) => {
    return (
        <div className="flex flex-col">
            {/* Camera Type */}
            <SubAccordion title="Camera Type" defaultOpen={true}>
                <div className="flex flex-wrap gap-2">
                    {CAMERA_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.camera === opt.value}
                            onClick={() => handleOptionChange("camera", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Camera Shot */}
            <SubAccordion title="Camera Shot">
                <div className="flex flex-wrap gap-2">
                    {CAMERA_ANGLE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.cameraShot === opt.value}
                            onClick={() => handleOptionChange("cameraShot", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Camera Distance */}
            <SubAccordion title="Camera Distance">
                <div className="flex flex-wrap gap-2">
                    {CAMERA_DISTANCE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.cameraDistance === opt.value}
                            onClick={() => handleOptionChange("cameraDistance", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Perspective */}
            <SubAccordion title="Perspective">
                <div className="flex flex-wrap gap-2">
                    {PERSPECTIVE_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.perspective === opt.value}
                            onClick={() => handleOptionChange("perspective", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>

            {/* Aspect Ratio */}
            <SubAccordion title="Aspect Ratio">
                <div className="flex flex-wrap gap-2">
                    {ASPECT_RATIO_OPTIONS.map((opt) => (
                        <CapsuleButton
                            key={opt.value}
                            label={opt.label}
                            selected={options.aspectRatio === opt.value}
                            onClick={() => handleOptionChange("aspectRatio", opt.value, SECTION_TITLE)}
                        />
                    ))}
                </div>
            </SubAccordion>
        </div>
    );
};

export default SidebarGroupPhotography;

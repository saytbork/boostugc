import React from "react";
import { CapsuleButton } from "./CapsuleButton";
import { SubAccordion } from "./SubAccordion";
import Tooltip from "../UI/Tooltip";
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

// Tooltip content dictionary
const TOOLTIPS = {
    cameraType: "Select the style of camera that captures the shot.",
    cameraShot: "How close or far the subject appears.",
    cameraDistance: "Adjust how zoomed-in or zoomed-out the camera feels.",
    perspective: "Controls the angle and depth of the shot.",
    aspectRatio: "Choose the output shape of the image.",
};

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
                <Tooltip content={TOOLTIPS.cameraType}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Camera Type ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.cameraShot}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Camera Shot ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.cameraDistance}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Camera Distance ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.perspective}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Perspective ⓘ
                    </label>
                </Tooltip>
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
                <Tooltip content={TOOLTIPS.aspectRatio}>
                    <label className="text-xs font-medium uppercase tracking-wider text-white/50 mb-2 block cursor-help">
                        Aspect Ratio ⓘ
                    </label>
                </Tooltip>
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

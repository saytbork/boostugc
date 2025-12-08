import React from "react";
import { CapsuleButton } from "./CapsuleButton";
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
        <div className="flex flex-col gap-5">
            {/* Camera Type */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Camera Type
                </label>
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
            </div>

            {/* Camera Shot */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Camera Shot
                </label>
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
            </div>

            {/* Camera Distance */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Camera Distance
                </label>
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
            </div>

            {/* Perspective */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Perspective
                </label>
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
            </div>

            {/* Aspect Ratio */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Aspect Ratio
                </label>
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
            </div>
        </div>
    );
};

export default SidebarGroupPhotography;

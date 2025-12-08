import React from 'react';
import { MockupOptions } from '../../../types';

interface FramingPresetsPanelProps {
    onApplyPreset: (preset: Partial<MockupOptions>) => void;
}

const FramingPresetsPanel: React.FC<FramingPresetsPanelProps> = ({ onApplyPreset }) => {
    return (
        <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Camera Framing Presets</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ camera: 'Standard Lens (35-50mm)', cameraShot: 'Start Closer', cameraAngle: 'Top-Down 90°', cameraDistance: '0.8m' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">Top-Down Shot</p>
                        <p className="text-xs text-gray-400 mt-1">Overhead view with balanced framing of the product.</p>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ camera: 'Macro Lens (85-100mm)', cameraShot: 'Extreme Close-Up', cameraAngle: 'Eye-Level', cameraDistance: '0.3m' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">Macro Detail</p>
                        <p className="text-xs text-gray-400 mt-1">Extreme close-up capturing fine textures and materials.</p>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ camera: 'Standard Lens (35-50mm)', cameraShot: 'Product Shot', cameraAngle: 'High-Angle 45°', cameraDistance: '1.2m' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">High-Angle View</p>
                        <p className="text-xs text-gray-400 mt-1">45° elevated perspective to show context and surface.</p>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ camera: 'Wide Angle (24-35mm)', cameraShot: 'Product Shot', cameraAngle: 'Low-Angle', cameraDistance: '1.0m' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">Low-Angle View</p>
                        <p className="text-xs text-gray-400 mt-1">Heroic low perspective with a gentle forward tilt.</p>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ cameraAngle: 'Eye-Level', placementStyle: 'Floating / Suspended' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">45° Rotation</p>
                        <p className="text-xs text-gray-400 mt-1">Rotate the product slightly for a dynamic hero look.</p>
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => onApplyPreset({ setting: 'Studio Black Background With Soft Light' })}
                        className="glass-card rounded-xl p-4 text-left transition hover:border-indigo-400 hover:bg-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <p className="text-sm font-semibold text-gray-100">Studio Black Background</p>
                        <p className="text-xs text-gray-400 mt-1">Deep black sweep with soft studio light and contact shadow.</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FramingPresetsPanel;

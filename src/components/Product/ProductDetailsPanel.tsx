import React from 'react';
import Accordion from '../UI/Accordion';
import Badge from '../UI/Badge';
import Tooltip, { TooltipTrigger, TooltipContent } from '../UI/Tooltip';
import ChipSelectGroup from '../ChipSelectGroup';
import {
    PRODUCT_PLANE_OPTIONS,
    PRODUCT_INTERACTION_OPTIONS,
    HERO_ALIGNMENT_OPTIONS,
    HERO_SHADOW_OPTIONS,
    FORMULATION_LAB_OPTIONS,
    FORMULATION_EXPERT_PRESETS,
    FORMULATION_PROFESSIONS
} from '../../../constants';
import { MockupOptions, Option, HeroLandingShadowStyle } from '../../../types';
import { PlusIcon } from 'lucide-react';

interface ProductDetailsPanelProps {
    options: MockupOptions;
    handleOptionChange: (key: keyof MockupOptions, value: any, section: string) => void;
    getSectionId: (section: string) => string;

    // Hands
    addHandsEnabled: boolean;
    setAddHandsEnabled: (value: boolean) => void;

    // Packaging
    isMultiProductPackaging: boolean;
    setIsMultiProductPackaging: (value: boolean) => void;

    // Supplement Presets
    activeSupplementPreset: string;
    handleSupplementPresetClick: (preset: 'hero-landing' | 'ingredient-splash' | 'floating-particles') => void;

    // Styles
    supplementBackgroundColor: string;
    setSupplementBackgroundColor: (value: string) => void;
    supplementAccentColor: string;
    setSupplementAccentColor: (value: string) => void;

    // Hero Mode
    isHeroLandingMode: boolean;
    heroProductAlignment: 'center' | 'left' | 'right';
    setHeroProductAlignment: (value: 'center' | 'left' | 'right') => void;
    heroProductScale: number;
    setHeroProductScale: (value: number) => void;
    heroShadowStyle: HeroLandingShadowStyle;
    setHeroShadowStyle: (value: HeroLandingShadowStyle) => void;

    // Formulation Story Panel
    formulationExpertEnabled: boolean;
    setFormulationExpertEnabled: (value: boolean | ((prev: boolean) => boolean)) => void;
    formulationExpertPreset: string;
    handleFormulationPresetSelect: (value: string) => void;
    formulationExpertProfession: string;
    handleFormulationProfessionSelect: (value: string) => void;

    formulationExpertName: string;
    setFormulationExpertName: (value: string) => void;
    formulationExpertRole: string;
    setFormulationExpertRole: (value: string) => void;
    formulationLabStyle: string;
    setFormulationLabStyle: (value: string) => void;

    // Custom Prompts
    supplementFlavorNotes: string;
    setSupplementFlavorNotes: (value: string) => void;
    supplementCustomPrompt: string;
    setSupplementCustomPrompt: (value: string) => void;
}

const ProductDetailsPanel: React.FC<ProductDetailsPanelProps> = (props) => {
    const {
        options,
        handleOptionChange,
        getSectionId,
        addHandsEnabled,
        setAddHandsEnabled,
        isMultiProductPackaging,
        setIsMultiProductPackaging,
        activeSupplementPreset,
        handleSupplementPresetClick,
        supplementBackgroundColor,
        setSupplementBackgroundColor,
        supplementAccentColor,
        setSupplementAccentColor,
        isHeroLandingMode,
        heroProductAlignment,
        setHeroProductAlignment,
        heroProductScale,
        setHeroProductScale,
        heroShadowStyle,
        setHeroShadowStyle,
        formulationExpertEnabled,
        setFormulationExpertEnabled,
        formulationExpertPreset,
        handleFormulationPresetSelect,
        formulationExpertProfession,
        handleFormulationProfessionSelect,
        formulationExpertName,
        setFormulationExpertName,
        formulationExpertRole,
        setFormulationExpertRole,
        formulationLabStyle,
        setFormulationLabStyle,
        supplementFlavorNotes,
        setSupplementFlavorNotes,
        supplementCustomPrompt,
        setSupplementCustomPrompt,
    } = props;

    const renderFormulationStoryPanel = () => (
        <div className="rounded-2xl glass-card p-4 space-y-3">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">Formulation story</p>
                    <p className="text-xs text-gray-400">
                        Highlight the doctor or researcher behind the formula to build trust.
                    </p>
                </div>
                <label className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{formulationExpertEnabled ? 'Active' : 'Off'}</span>
                    <button
                        type="button"
                        onClick={() => setFormulationExpertEnabled(prev => !prev)}
                        className={`relative h-5 w-10 rounded-full transition ${formulationExpertEnabled ? 'bg-[var(--primary)]' : 'bg-gray-700'}`}
                    >
                        <span className={`absolute left-1 top-1 block h-3 w-3 rounded-full bg-white shadow transition ${formulationExpertEnabled ? 'translate-x-5' : ''}`} />
                    </button>
                </label>
            </div>
            {formulationExpertEnabled && (
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {FORMULATION_EXPERT_PRESETS.map((preset: Option) => (
                            <button
                                key={preset.value}
                                type="button"
                                onClick={() => handleFormulationPresetSelect(preset.value)}
                                className={`rounded-full border px-3 py-1 text-xs transition ${formulationExpertPreset === preset.value
                                    ? 'border-amber-300 bg-amber-500/10 text-white'
                                    : 'border-[var(--border-subtle)] text-gray-300 hover:border-[var(--primary)] hover:text-white'
                                    }`}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {FORMULATION_PROFESSIONS.map((option: Option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleFormulationProfessionSelect(option.value)}
                                className={`rounded-full border px-3 py-1 text-xs transition ${formulationExpertProfession === option.value
                                    ? 'border-amber-300 bg-amber-500/10 text-white'
                                    : 'border-[var(--border-subtle)] text-gray-300 hover:border-[var(--primary)] hover:text-white'
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Expert name</label>
                            <input
                                type="text"
                                value={formulationExpertName}
                                onChange={event => setFormulationExpertName(event.target.value)}
                                placeholder="e.g., Dr. Sofia Reyes"
                                className="input-base rounded-md px-2 py-1 text-sm w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Role / credentials</label>
                            <input
                                type="text"
                                value={formulationExpertRole}
                                onChange={event => setFormulationExpertRole(event.target.value)}
                                placeholder="e.g., pulmonologist & lead formulator"
                                className="input-base rounded-md px-2 py-1 text-sm w-full"
                            />
                        </div>
                    </div>
                    <ChipSelectGroup
                        label="Lab vibe"
                        options={FORMULATION_LAB_OPTIONS}
                        selectedValue={formulationLabStyle}
                        onChange={(value: string) => setFormulationLabStyle(value)}
                    />
                    <p className="text-[11px] text-gray-400">We’ll mention their research, lab setup, and why the formula feels trustworthy. Ensure this expert looks like a real human, photographed with natural imperfections.</p>
                </div>
            )}
        </div>
    );

    return (
        <div id={getSectionId('Product Details')}>
            <Accordion title="Product Details" defaultOpen={false}>
                <div className="space-y-6 pt-2">
                    {/* Surface & Interaction */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Tooltip content="Define the surface the product sits on.">
                            <ChipSelectGroup
                                label="Product Plane"
                                options={PRODUCT_PLANE_OPTIONS}
                                selectedValue={options.productPlane}
                                onChange={(value: string) => handleOptionChange('productPlane', value, 'Product Details')}
                            />
                        </Tooltip>
                        {/* Conditional Rendering: Show Interaction only if NO hands are active, to avoid conflict */}
                        {!addHandsEnabled && (
                            <Tooltip content="Add subtle contact elements like water drops or shadows.">
                                <ChipSelectGroup
                                    label="Interaction"
                                    options={PRODUCT_INTERACTION_OPTIONS}
                                    selectedValue={options.productInteraction}
                                    onChange={(value: string) => handleOptionChange('productInteraction', value, 'Product Details')}
                                />
                            </Tooltip>
                        )}
                    </div>

                    <div className="rounded-2xl glass-card p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">Add Hands</p>
                                    <Badge variant="info">NEW</Badge>
                                </div>
                                <p className="text-xs text-gray-400">Include a human hand holding the product.</p>
                            </div>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={addHandsEnabled}
                                    onChange={(e) => setAddHandsEnabled(e.target.checked)}
                                />
                                <div className={`relative h-6 w-11 rounded-full transition-colors ${addHandsEnabled ? 'bg-[var(--primary)]' : 'bg-gray-600'}`}>
                                    <span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${addHandsEnabled ? 'translate-x-5' : ''}`} />
                                </div>
                                <span className={`text-xs font-semibold ${addHandsEnabled ? 'text-[var(--primary)]' : 'text-gray-500'}`}>
                                    {addHandsEnabled ? 'On' : 'Off'}
                                </span>
                            </label>
                        </div>
                    </div>

                    <Tooltip content="Show multiple units side-by-side or as a kit assemblage.">
                        <div className="rounded-2xl glass-card p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-200">Packaging kit</p>
                                    <p className="text-xs text-gray-400">Show multiple units/box?</p>
                                </div>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={isMultiProductPackaging}
                                        onChange={(e) => setIsMultiProductPackaging(e.target.checked)}
                                    />
                                    <div className={`relative h-5 w-9 rounded-full transition-colors ${isMultiProductPackaging ? 'bg-indigo-500' : 'bg-gray-700'}`}>
                                        <span className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${isMultiProductPackaging ? 'translate-x-4' : ''}`} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </Tooltip>

                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Supplement photo modes</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {/* Quick Buttons for Supplement Presets */}
                            <button
                                onClick={() => handleSupplementPresetClick('hero-landing')}
                                className={`flex flex-col items-center justify-center rounded-xl p-3 border transition ${activeSupplementPreset === 'hero-landing' ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                <span className="text-xl mb-1">👑</span>
                                <span className="text-[10px] uppercase font-bold">Hero Landing</span>
                            </button>
                            <button
                                onClick={() => handleSupplementPresetClick('ingredient-splash')}
                                className={`flex flex-col items-center justify-center rounded-xl p-3 border transition ${activeSupplementPreset === 'ingredient-splash' ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                <span className="text-xl mb-1">🍋</span>
                                <span className="text-[10px] uppercase font-bold">Splash / Ingredients</span>
                            </button>
                            <button
                                onClick={() => handleSupplementPresetClick('floating-particles')}
                                className={`flex flex-col items-center justify-center rounded-xl p-3 border transition ${activeSupplementPreset === 'floating-particles' ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                <span className="text-xl mb-1">✨</span>
                                <span className="text-[10px] uppercase font-bold">Floating Magic</span>
                            </button>
                        </div>

                        <div className="rounded-xl glass-card p-4 space-y-4">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Brand Color / BG</label>
                                    <input
                                        type="text"
                                        value={supplementBackgroundColor}
                                        onChange={event => setSupplementBackgroundColor(event.target.value)}
                                        placeholder="e.g., #FFB347 or pastel peach"
                                        className="input-base rounded-lg px-3 py-2 text-sm w-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Accent color / props</label>
                                    <input
                                        type="text"
                                        value={supplementAccentColor}
                                        onChange={event => setSupplementAccentColor(event.target.value)}
                                        placeholder="e.g., teal acrylic cube"
                                        className="input-base rounded-lg px-3 py-2 text-sm w-full"
                                    />
                                </div>
                            </div>
                            {isHeroLandingMode && (
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs uppercase tracking-widest text-gray-500">Product alignment</label>
                                        <div className="flex flex-wrap gap-2">
                                            {HERO_ALIGNMENT_OPTIONS.map(option => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => setHeroProductAlignment(option.value as any)}
                                                    className={`rounded-full border px-3 py-1 text-xs transition ${heroProductAlignment === option.value ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/15 text-gray-300 hover:border-indigo-400 hover:text-white'}`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs uppercase tracking-widest text-gray-500">Product scale</label>
                                        <input
                                            type="number"
                                            min="0.5"
                                            max="2"
                                            step="0.05"
                                            value={heroProductScale}
                                            onChange={event => {
                                                const value = Number.parseFloat(event.target.value);
                                                if (Number.isNaN(value)) return;
                                                setHeroProductScale(Math.max(0.3, Math.min(3, value)));
                                            }}
                                            className="input-base rounded-lg px-3 py-2 text-sm w-full"
                                        />
                                        <p className="text-[11px] text-gray-500">1 = original sizing. Increase for bolder hero presence.</p>
                                    </div>
                                    <div className="flex flex-col gap-1 sm:col-span-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500">Shadow style</label>
                                        <div className="flex flex-wrap gap-2">
                                            {HERO_SHADOW_OPTIONS.map(option => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => setHeroShadowStyle(option.value as any)}
                                                    className={`rounded-full border px-3 py-1 text-xs transition ${heroShadowStyle === option.value ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/15 text-gray-300 hover:border-indigo-400 hover:text-white'}`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {renderFormulationStoryPanel()}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Flavor / ingredient props</label>
                                <textarea
                                    value={supplementFlavorNotes}
                                    onChange={event => setSupplementFlavorNotes(event.target.value)}
                                    placeholder="e.g., pineapple, lavender sprigs, gummy vitamins"
                                    className="input-base rounded-lg px-3 py-2 text-sm w-full"
                                    rows={2}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Custom hero cue</label>
                                <textarea
                                    value={supplementCustomPrompt}
                                    onChange={event => setSupplementCustomPrompt(event.target.value)}
                                    placeholder="e.g., have a manicured hand toss gummies mid-air beside the bottle"
                                    className="input-base rounded-lg px-3 py-2 text-sm w-full"
                                    rows={2}
                                />
                                <p className="text-[11px] text-gray-500">Add any specific staging or stylistic callouts for this product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};

export default ProductDetailsPanel;

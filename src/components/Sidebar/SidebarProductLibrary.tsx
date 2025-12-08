import React from "react";
import { Trash2, Plus, Upload } from "lucide-react";
import { SubAccordion } from "./SubAccordion";
import Tooltip from "../UI/Tooltip";

export interface ProductLibraryItem {
    id: string;
    imageUrl?: string;
    previewUrl?: string;
    label: string;
    heightValue: number;
    heightUnit: "cm" | "in";
    isActive: boolean;
    isHero: boolean;
    fileSize?: string;
}

interface SidebarProductLibraryProps {
    items: ProductLibraryItem[];
    onUpload: (files: FileList) => void;
    onRemove: (id: string) => void;
    onUpdateItem: (id: string, updates: Partial<ProductLibraryItem>) => void;
    onSetHero: (id: string) => void;
    onToggleActive: (id: string) => void;
}

// Tooltip content dictionary
const TOOLTIPS = {
    uploadCard: "Upload one or several photos of your product. The first one becomes the hero image.",
    productName: "Give this product image a label to identify it.",
    height: "Enter the real height to prevent distortions in generated images.",
    activeToggle: "Turn this on if you want this product included in the mockup.",
    remove: "Delete this product image from your library.",
};

export const SidebarProductLibrary: React.FC<SidebarProductLibraryProps> = ({
    items,
    onUpload,
    onRemove,
    onUpdateItem,
    onSetHero,
    onToggleActive,
}) => {
    const heroItem = items.find(item => item.isHero);
    const libraryItems = items.filter(item => !item.isHero);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            onUpload(e.dataTransfer.files);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onUpload(e.target.files);
        }
    };

    return (
        <SubAccordion title="Product Library" defaultOpen={true}>
            <div className="flex flex-col gap-4">
                {/* Main Upload Card - Hero Preview */}
                <Tooltip content={TOOLTIPS.uploadCard}>
                    <div
                        className="rounded-xl border-2 border-dashed border-white/20 bg-white/5 p-4 cursor-pointer hover:border-indigo-400 transition"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('product-library-input')?.click()}
                    >
                        <input
                            id="product-library-input"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleFileInput}
                        />

                        {heroItem ? (
                            <div className="flex flex-col gap-3">
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-black/20">
                                    <img
                                        src={heroItem.imageUrl || heroItem.previewUrl}
                                        alt={heroItem.label}
                                        className="w-full h-full object-contain"
                                    />
                                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-indigo-500 text-white text-[10px] font-bold uppercase rounded">
                                        HERO
                                    </span>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium text-white">{heroItem.label}</p>
                                    {heroItem.fileSize && (
                                        <p className="text-[11px] text-gray-400">{heroItem.fileSize}</p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-6 text-center">
                                <Upload className="w-10 h-10 text-indigo-300 mb-3" />
                                <p className="text-sm font-medium text-gray-300">Upload Product Image</p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Drop your product photo here
                                </p>
                            </div>
                        )}
                    </div>
                </Tooltip>

                {/* Add Another Photo Button */}
                {items.length > 0 && (
                    <button
                        type="button"
                        onClick={() => document.getElementById('product-library-input')?.click()}
                        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition"
                    >
                        <Plus className="w-4 h-4" />
                        Add another photo
                    </button>
                )}

                {/* Tip Text */}
                <p className="text-[11px] text-gray-500">
                    Tip: Drop multiple files at once. The first becomes the hero; others stay in your library.
                </p>

                {/* Product Library Grid */}
                {libraryItems.length > 0 && (
                    <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                            Library ({libraryItems.length})
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {libraryItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg border border-white/10 bg-white/5 p-3 space-y-3"
                                >
                                    {/* Thumbnail Row */}
                                    <div className="flex gap-3">
                                        {/* Thumbnail */}
                                        <div
                                            className="w-16 h-16 rounded-lg overflow-hidden bg-black/20 flex-shrink-0 cursor-pointer"
                                            onClick={() => onSetHero(item.id)}
                                        >
                                            <img
                                                src={item.imageUrl || item.previewUrl}
                                                alt={item.label}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 min-w-0">
                                            {/* Product Name */}
                                            <Tooltip content={TOOLTIPS.productName}>
                                                <input
                                                    type="text"
                                                    value={item.label}
                                                    onChange={(e) => onUpdateItem(item.id, { label: e.target.value })}
                                                    placeholder="Product name"
                                                    className="w-full bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-none"
                                                />
                                            </Tooltip>

                                            {/* Height Input */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <Tooltip content={TOOLTIPS.height}>
                                                    <input
                                                        type="number"
                                                        value={item.heightValue || ""}
                                                        onChange={(e) => onUpdateItem(item.id, { heightValue: parseFloat(e.target.value) || 0 })}
                                                        placeholder="Height"
                                                        className="w-16 bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-white placeholder-gray-500 focus:border-indigo-400 focus:outline-none"
                                                    />
                                                </Tooltip>
                                                <select
                                                    value={item.heightUnit}
                                                    onChange={(e) => onUpdateItem(item.id, { heightUnit: e.target.value as "cm" | "in" })}
                                                    className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-indigo-400 focus:outline-none"
                                                >
                                                    <option value="cm">cm</option>
                                                    <option value="in">in</option>
                                                </select>
                                                {item.fileSize && (
                                                    <span className="text-[10px] text-gray-500 ml-auto">{item.fileSize}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Delete Button */}
                                        <Tooltip content={TOOLTIPS.remove}>
                                            <button
                                                type="button"
                                                onClick={() => onRemove(item.id)}
                                                className="flex-shrink-0 p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </Tooltip>
                                    </div>

                                    {/* Active Toggle Row */}
                                    <div className="flex items-center justify-between">
                                        <Tooltip content={TOOLTIPS.activeToggle}>
                                            <span className="text-[11px] text-gray-400 cursor-help">
                                                Include in mockup ⓘ
                                            </span>
                                        </Tooltip>
                                        <button
                                            type="button"
                                            onClick={() => onToggleActive(item.id)}
                                            className={`relative h-5 w-9 rounded-full transition-colors ${item.isActive ? "bg-indigo-500" : "bg-gray-600"
                                                }`}
                                        >
                                            <span
                                                className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${item.isActive ? "translate-x-4" : ""
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </SubAccordion>
    );
};

export default SidebarProductLibrary;

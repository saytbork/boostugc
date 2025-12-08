import React from 'react';
import BundleSelector from './BundleSelector';
import CustomBundleBuilder from './CustomBundleBuilder';
import RecommendedBundle from './RecommendedBundle';
import { BUNDLE_TABS } from '../../../constants';
import { ProductMediaLibrary, ProductId } from '../bundles.config'; // src/bundles/components -> src/bundles -> bundles.config
// Wait, path to bundles.config.
// App.tsx: import { ... } from './src/bundles/bundles.config';
// src/bundles/components/BundlesPanel.tsx
// ../bundles.config is correct if config is in src/bundles.

interface ActiveProduct {
    id: string;
    base64: string;
    mimeType: string;
    name: string;
    heightCm?: number;
}

interface BundlesPanelProps {
    activeBundleTab: string;
    setActiveBundleTab: (tab: any) => void;
    getSectionId: (title: string) => string;
    generateMockup: (products?: string[] | null) => void;
    productMediaLibrary: ProductMediaLibrary;
    activeProductIds: string[];
    activeProducts: ActiveProduct[];
    availableProductIds: string[];
    availableProductIdSet: Set<string>;
    recommendedBaseProduct: string;
    setRecommendedBaseProduct: (id: ProductId) => void;
    lastBundleSelection: string[] | null;
}

const BundlesPanel: React.FC<BundlesPanelProps> = ({
    activeBundleTab,
    setActiveBundleTab,
    getSectionId,
    generateMockup,
    productMediaLibrary,
    activeProductIds,
    activeProducts,
    availableProductIds,
    availableProductIdSet,
    recommendedBaseProduct,
    setRecommendedBaseProduct,
    lastBundleSelection,
}) => {
    return (
        <div id={getSectionId('Bundles')} className="mt-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-4">
                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Bundles</p>
                    <p className="text-sm text-gray-400">Quickly swap between curated packs, your own mix, or AI-recommended combos.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {BUNDLE_TABS.map(tab => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveBundleTab(tab.id)}
                            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${activeBundleTab === tab.id ? 'border-indigo-400 bg-indigo-500/10 text-white' : 'border-white/15 text-gray-300 hover:border-indigo-400 hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {activeBundleTab === 'premade' && (
                    <BundleSelector
                        onGenerate={generateMockup}
                        productMediaLibrary={productMediaLibrary}
                        visibleProductIds={activeProductIds}
                        activeProductCount={activeProducts.length}
                    />
                )}
                {activeBundleTab === 'custom' && (
                    <CustomBundleBuilder
                        onGenerate={generateMockup}
                        productMediaLibrary={productMediaLibrary}
                        visibleProductIds={activeProductIds}
                    />
                )}
                {activeBundleTab === 'recommended' && (
                    <div className="space-y-4">
                        {availableProductIds.length === 0 ? (
                            <p className="text-xs text-amber-200">Upload at least one product photo to view recommendations.</p>
                        ) : (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-[0.3em] text-gray-400">Anchor product</label>
                                    <select
                                        value={recommendedBaseProduct}
                                        onChange={event => setRecommendedBaseProduct(event.target.value as ProductId)}
                                        className="rounded-lg border border-white/15 bg-gray-900/60 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:outline-none"
                                    >
                                        {availableProductIds.map(productId => (
                                            <option key={productId} value={productId}>
                                                {productMediaLibrary[productId]?.label || productId}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <RecommendedBundle
                                    productId={recommendedBaseProduct}
                                    onGenerate={generateMockup}
                                    productMediaLibrary={productMediaLibrary}
                                    visibleProductIds={activeProductIds}
                                />
                            </>
                        )}
                    </div>
                )}
                {lastBundleSelection && lastBundleSelection.some(id => availableProductIdSet.has(id)) && (
                    <div className="rounded-2xl border border-white/10 bg-gray-900/40 p-3 space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Last bundle sent</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {lastBundleSelection
                                .filter(productId => availableProductIdSet.has(productId))
                                .map(productId => (
                                    <span
                                        key={`${productId}-last`}
                                        className="rounded-full border border-white/20 px-3 py-1 text-gray-100"
                                    >
                                        {productMediaLibrary[productId]?.label || productId}
                                    </span>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BundlesPanel;

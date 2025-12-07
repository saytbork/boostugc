/**
 * Modes Builder - Creation mode specific prompts
 */

import type { PromptOptions, PromptBuilder } from '../types';
import { buildProductPlacementPrompt } from './productPlacement';

export class ModesBuilder implements PromptBuilder {
    build(options: PromptOptions): string {
        const { creationMode, contentStyle } = options;

        if (contentStyle === 'product') {
            const primaryAsset = options.productAssets?.[0];
            const productMeta = {
                name: (primaryAsset as any)?.name || primaryAsset?.label || primaryAsset?.id || 'product',
            };
            const params = {
                setting: options.setting,
                environmentOrder: options.environmentOrder,
                lighting: options.lighting,
                camera: options.camera,
                compositionMode: options.compositionMode,
                productPlane: options.productPlane,
                placementStyle: (options as any).placementStyle,
                placementCamera: (options as any).placementCamera,
                cameraDistance: options.cameraDistance || 'medium',
            };

            return buildProductPlacementPrompt({
                productMeta,
                params: { ...params },
                userPrompt: '',
            }).trim().replace(/\s+/g, ' ');
        }

        switch (creationMode) {
            case 'lifestyle':
                return this.buildLifestyle();

            case 'studio':
                return this.buildStudio();

            case 'aesthetic':
                return this.buildAesthetic();

            case 'bg-replace':
                return this.buildBgReplace();

            case 'ecom-blank':
                return this.buildEcomBlank(options);

            default:
                return '';
        }
    }

    private buildLifestyle(): string {
        return `
      Photorealistic lifestyle UGC with real people and natural environments.
      Natural lighting, candid mood, real skin texture and shadows.
      Avoid perfect studio look.
    `.trim().replace(/\s+/g, ' ');
    }

    private buildStudio(): string {
        return `
      Clean, high-end studio hero shot.
      Soft gradient background, commercial lighting, crisp reflections.
      Preserve exact product shape, label and colors.
      No props or environments.
    `.trim().replace(/\s+/g, ' ');
    }

    private buildAesthetic(): string {
        return `
      Aesthetic styled scene with curated props.
      Matching color palette, soft lighting and premium brand vibe.
      Balanced, artistic composition.
    `.trim().replace(/\s+/g, ' ');
    }

    private buildBgReplace(): string {
        return `
      Replace the background while preserving exact product fidelity.
      Clean edges, accurate colors, soft realistic shadow.
      No product modifications.
    `.trim().replace(/\s+/g, ' ');
    }

    private buildEcomBlank(options: PromptOptions): string {
        const { bgColor = '#FFFFFF', sidePlacement = 'right' } = options;
        const oppositeSide = sidePlacement === 'left' ? 'right' : 'left';

        return `
      Ecommerce layout with solid background color: ${bgColor}.
      Product and person on the ${sidePlacement} side.
      Large clean negative space on the ${oppositeSide} side.
      Studio lighting, minimal shadows, no props or environments.
      Preserve exact product fidelity.
    `.trim().replace(/\s+/g, ' ');
    }
}

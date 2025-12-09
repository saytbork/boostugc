/**
 * Product Builder - Product insertion and fidelity
 * Enhanced with per-product height values and Product Mode system prompt
 */

import type { PromptOptions, PromptBuilder, ProductAsset } from '../types';
import { parameterMap } from '../parameterMap';

/**
 * System instruction for Product Mode - NO persons, 100% product focus
 */
const SYSTEM_PRODUCT_MODE = `
Generate a high quality product-only render.
Do not include any people, hands, faces, silhouettes, body parts, or implied humans.
Do not show reflections of humans.
Focus strictly on the uploaded product image.
Use the given settings exactly as provided.
Maintain precise product proportions using the real height in cm or inches.
Use a clean studio style appropriate for ecommerce.
Never add text.
Never add props unless specified.
Never add extra objects unless described in the options.
`.trim().replace(/\s+/g, ' ');

/**
 * Clean prompt to remove any person-related words for Product Mode
 */
function cleanPromptForProductMode(prompt: string): string {
    return prompt
        .replace(/\bperson\b/gi, '')
        .replace(/\bpeople\b/gi, '')
        .replace(/\bhand\b/gi, '')
        .replace(/\bhands\b/gi, '')
        .replace(/\bholding\b/gi, '')
        .replace(/\bface\b/gi, '')
        .replace(/\bmodel\b/gi, '')
        .replace(/\bhuman\b/gi, '')
        .replace(/\bcreator\b/gi, '')
        .replace(/\bportrait\b/gi, '')
        .replace(/\bselfie\b/gi, '')
        .replace(/\bbody\b/gi, '')
        .replace(/\bwoman\b/gi, '')
        .replace(/\bman\b/gi, '')
        .replace(/\bgirl\b/gi, '')
        .replace(/\bboy\b/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
}

export class ProductBuilder implements PromptBuilder {
    build(options: PromptOptions): string {
        const {
            productAssets = [],
            heightNotes,
            isMultiProductPackaging,
            bundleLabels = [],
            productMaterial,
            contentStyle,
        } = options;

        let prompt = '';

        // Add Product Mode system instruction if in product mode
        if (contentStyle === 'product') {
            prompt += SYSTEM_PRODUCT_MODE + ' ';
        }

        // Product insertion rules
        prompt += this.buildProductInsertion();

        // Material handling
        const mappedMaterial = productMaterial
            ? parameterMap.productMaterial?.[productMaterial] ?? productMaterial
            : '';
        if (mappedMaterial) {
            prompt += ` Material and finish: ${mappedMaterial}.`;
        }

        // Per-product height values from productAssets
        const productHeights = this.buildProductHeights(productAssets);
        if (productHeights) {
            prompt += productHeights;
        }

        // Legacy heightNotes fallback
        if (heightNotes && !productHeights) {
            prompt += ` Respect real-world scale: ${heightNotes}. Adjust hands, props, and camera distance so the item visibly matches that measurement.`;
        }

        // Multi-product handling
        if (productAssets.length > 1) {
            prompt += ' There are multiple distinct product cutouts supplied. Arrange every unique product in the final scene, keeping each one fully visible and recognizable while avoiding any invented packaging. Treat them as a cohesive collection in the same frame.';
        } else if (isMultiProductPackaging) {
            prompt += ' This product photo shows a packaging kit that contains several items. Keep the box, lid, and every interior product fully visible—never crop away the inserts or swap them for a single bottle. Preserve the real-world packaging layout exactly as photographed.';
        }

        // Bundle labels
        if (bundleLabels.length > 0) {
            prompt += ` Treat this as a curated bundle featuring ${bundleLabels.join(', ')}. Arrange every uploaded product cutout to mimic that assortment so shoppers immediately read it as a kit.`;
        }

        // Clean prompt for Product Mode (remove any person-related words)
        if (contentStyle === 'product') {
            prompt = cleanPromptForProductMode(prompt);
        }

        return prompt;
    }

    /**
     * Build height instructions from individual product assets
     */
    private buildProductHeights(productAssets: ProductAsset[]): string {
        if (!productAssets || productAssets.length === 0) {
            return '';
        }

        const heightInstructions: string[] = [];

        productAssets.forEach((asset, index) => {
            if (asset.heightValue && asset.heightUnit) {
                const label = asset.label || `Product ${index + 1}`;
                heightInstructions.push(
                    `${label} is approximately ${asset.heightValue} ${asset.heightUnit} tall for correct scaling`
                );
            }
        });

        if (heightInstructions.length === 0) {
            return '';
        }

        return ` ${heightInstructions.join('. ')}. Maintain these exact proportions to prevent distortion.`;
    }

    private buildProductInsertion(): string {
        return `
      Use the uploaded product image as the exact product to place in the scene.
      Preserve:
      - exact colors,
      - exact label design,
      - exact typography,
      - exact cap shape,
      - exact material,
      - exact geometry,
      - exact proportions.
      
      Do not redesign, replace, or reinterpret the product.
      
      Integrate it physically into the environment using "Active Insert Mode":
      - match lighting to the room,
      - adjust reflections on glass/plastic,
      - add realistic soft shadows on surfaces,
      - maintain physically correct highlights,
      - preserve all printed elements clearly and accurately,
      - keep edges and silhouette identical to the uploaded object.
      
      The product must look naturally photographed inside this environment, not pasted or floating.
      
      Integrate the product physically into the environment:
      - match real lighting direction,
      - match color temperature and contrast,
      - generate accurate shadow casting under the jar/bottle,
      - apply micro-occlusion where the hand touches the product,
      - generate correct reflections on glass, plastic, or metal,
      - preserve the exact design, size, colors, and branding of the uploaded product.
    `.trim().replace(/\s+/g, ' ');
    }
}

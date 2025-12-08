import { LABEL_MAP } from './labelMap';
import { TOOLTIP_MAP } from './tooltipMap';

export function normalizeOption<OptionType extends { label: string; value: string; tooltip?: string }>(option: OptionType): OptionType {
  const cleanLabel = LABEL_MAP[option.value] || LABEL_MAP[option.label] || option.label;
  const findTooltip = (): string | undefined => {
    const entry = TOOLTIP_MAP[cleanLabel];
    if (typeof entry === 'string') return entry;
    if (entry) {
      return entry[option.label] ?? entry[option.value];
    }
    for (const value of Object.values(TOOLTIP_MAP)) {
      if (typeof value === 'object') {
        const nested = value[option.label] ?? value[option.value];
        if (nested) {
          return nested;
        }
      }
    }
    return undefined;
  };

  const tooltip = option.tooltip ?? findTooltip() ?? undefined;

  return {
    ...option,
    label: cleanLabel,
    tooltip: tooltip || undefined,
  };
}

export const normalizeOptions = (options: any[]): { value: string; label: string; description: string; tooltip?: string }[] => {
  if (!Array.isArray(options)) return [];
  return options.map((opt) => {
    // Handle string options
    if (typeof opt === 'string') {
      return { value: opt, label: opt, description: '' };
    }
    // Handle object options
    return {
      value: opt.value || opt.id || '',
      label: opt.label || opt.name || '',
      description: opt.description || '',
      tooltip: opt.tooltip,
    };
  });
};

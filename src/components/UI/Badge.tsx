import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'warning' | 'info';
  icon?: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', icon }) => {
  const variantClasses =
    variant === 'warning'
      ? 'border-amber-300/30 bg-amber-500/10 text-amber-100'
      : 'border-white/10 bg-white/5 text-gray-200';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-medium ${variantClasses}`}
    >
      {icon && <span className="text-xs leading-none">{icon}</span>}
      <span className="leading-none">{children}</span>
    </span>
  );
};

export default Badge;

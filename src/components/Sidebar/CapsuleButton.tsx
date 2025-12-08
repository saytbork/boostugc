import React from 'react';

interface CapsuleButtonProps {
    label: string;
    selected: boolean;
    onClick: () => void;
    disabled?: boolean;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
    label,
    selected,
    onClick,
    disabled = false,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
        capsule-btn
        ${selected ? 'capsule-btn-selected' : ''}
        ${disabled ? 'capsule-btn-disabled' : ''}
      `}
        >
            {label}
        </button>
    );
};

export default CapsuleButton;

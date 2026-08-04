'use client';

import React from 'react';
import styles from '@styles/layout/button.module.css';
import { ButtonVariant, ButtonShape, IconPlacement } from '@lib/enums/button.enum';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    shape?: ButtonShape;
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPlacement?: IconPlacement;
    iconSize?: number | string;
    fullWidth?: boolean;
    padding?: string | number;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = ButtonVariant.ELEVATED,
                                                  shape = ButtonShape.RECTANGLE,
                                                  isLoading = false,
                                                  icon,
                                                  iconPlacement = IconPlacement.LEADING,
                                                  iconSize = '1.1rem',
                                                  fullWidth = false,
                                                  padding,
                                                  className = '',
                                                  disabled,
                                                  style,
                                                  onClick,
                                                  ...props
                                              }) => {
    const isIconOnly = shape === ButtonShape.CIRCLE || shape === ButtonShape.SQUARE || (!children && icon);

    const combinedClasses = [
        styles.baseBtn,
        styles[variant],
        styles[shape],
        fullWidth ? styles.fullWidth : '',
        className,
    ].join(' ');

    const customPadding = typeof padding === 'number' ? `${padding}px` : padding;

    const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        const rect = button.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add(styles.ripple);

        const existingRipple = button.getElementsByClassName(styles.ripple)[0];
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);

        if (onClick) {
            event.preventDefault()
            onClick(event);
        }
    };

    const renderSpinner = () => (
        <div className={styles.spinnerOverlay}>
            <div
                className={variant === ButtonVariant.ELEVATED ? 'spinnerWhite' : 'spinnerAdapt'}
                style={{ width: iconSize, height: iconSize }}
            />
        </div>
    );

    const renderIcon = () => (
        <span style={{ fontSize: iconSize, display: 'inline-flex', flexShrink: 0 }}>
            {icon}
        </span>
    );

    return (
        <button
            className={combinedClasses}
            disabled={disabled || isLoading}
            style={{
                padding: customPadding,
                ...style
            }}
            onClick={handleRipple}
            {...props}
        >
            {isLoading && renderSpinner()}

            <div
                className={styles.contentWrapper}
                style={{
                    visibility: isLoading ? 'hidden' : 'visible'
                }}
            >
                {!isIconOnly && icon && iconPlacement === IconPlacement.LEADING && renderIcon()}
                {isIconOnly ? renderIcon() : <span className={styles.label}>{children}</span>}
                {!isIconOnly && icon && iconPlacement === IconPlacement.TRAILING && renderIcon()}
            </div>
        </button>
    );
};
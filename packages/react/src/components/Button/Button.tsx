/**
 * Button Component
 * A versatile button component with multiple variants and sizes
 *
 * Theming: Override CSS variables in your app to customize colors.
 */

import React, { forwardRef } from 'react';
import { buttonVariants, type ButtonVariants } from './Button.variants';
import './Button.css';

// Simple className concatenation utility
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;

  /**
   * Icon to display before the button text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  endIcon?: React.ReactNode;

  /**
   * Content to render as button children
   */
  children?: React.ReactNode;
}

/**
 * Button component with support for variants, sizes, and icons
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" disabled>Disabled</Button>
 * <Button variant="danger" loading>Loading...</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      disabled = false,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="uif-btn-spinner"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              style={{ opacity: 0.25 }}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              style={{ opacity: 0.75 }}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && startIcon && <span className="uif-btn-icon-start">{startIcon}</span>}
        {children}
        {!loading && endIcon && <span className="uif-btn-icon-end">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

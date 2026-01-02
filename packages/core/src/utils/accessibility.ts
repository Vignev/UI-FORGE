/**
 * Accessibility utilities for UI Forge components
 */

/**
 * Generates a unique ID for accessibility attributes
 */
export function generateId(prefix: string = 'uif'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Creates ARIA attributes for disabled state
 */
export function getDisabledProps(disabled?: boolean) {
  if (!disabled) return {};

  return {
    'aria-disabled': true,
    tabIndex: -1,
  };
}

/**
 * Creates ARIA attributes for loading state
 */
export function getLoadingProps(loading?: boolean) {
  if (!loading) return {};

  return {
    'aria-busy': true,
    'aria-live': 'polite' as const,
  };
}

/**
 * Creates ARIA attributes for required fields
 */
export function getRequiredProps(required?: boolean) {
  if (!required) return {};

  return {
    'aria-required': true,
    required: true,
  };
}

/**
 * Creates ARIA attributes for invalid/error state
 */
export function getInvalidProps(invalid?: boolean, errorId?: string) {
  if (!invalid) return {};

  return {
    'aria-invalid': true,
    ...(errorId && { 'aria-describedby': errorId }),
  };
}

/**
 * Focus visible utility for keyboard navigation
 */
export const FOCUS_VISIBLE_CLASSNAME =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

/**
 * Screen reader only utility class
 */
export const SR_ONLY_CLASSNAME =
  'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

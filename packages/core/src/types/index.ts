/**
 * Shared TypeScript types and interfaces for UI Forge
 */

/**
 * Common component size variants
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Common component variant types
 */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

/**
 * Component status types
 */
export type Status = 'success' | 'warning' | 'danger' | 'info';

/**
 * Base props that all components can accept
 */
export interface BaseProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Inline styles
   */
  style?: React.CSSProperties;

  /**
   * Test ID for testing
   */
  testId?: string;
}

/**
 * Props for components with disabled state
 */
export interface DisableableProps {
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
}

/**
 * Props for components with loading state
 */
export interface LoadableProps {
  /**
   * Whether the component is in a loading state
   */
  loading?: boolean;
}

/**
 * Props for form field components
 */
export interface FormFieldProps {
  /**
   * Field name
   */
  name?: string;

  /**
   * Field value
   */
  value?: any;

  /**
   * Default value
   */
  defaultValue?: any;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Whether the field is invalid
   */
  invalid?: boolean;

  /**
   * Error message
   */
  error?: string;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Change handler
   */
  onChange?: (value: any) => void;

  /**
   * Blur handler
   */
  onBlur?: () => void;
}

/**
 * Polymorphic component props
 * Allows components to render as different HTML elements
 */
export type AsProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

/**
 * Extract component props excluding ref
 */
export type ComponentProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

/**
 * Extract component props including ref
 */
export type ComponentPropsWithRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>;

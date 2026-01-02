/**
 * Form validation utilities for UI Forge
 */

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export type Validator<T = any> = (value: T) => ValidationResult;

/**
 * Required field validator
 */
export function required(message: string = 'This field is required'): Validator {
  return (value: any): ValidationResult => {
    const isEmpty =
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '') ||
      (Array.isArray(value) && value.length === 0);

    return {
      valid: !isEmpty,
      message: isEmpty ? message : undefined,
    };
  };
}

/**
 * Email validator
 */
export function email(message: string = 'Please enter a valid email address'): Validator<string> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (value: string): ValidationResult => {
    if (!value) return { valid: true }; // Empty is valid (use required() for mandatory)

    return {
      valid: emailRegex.test(value),
      message: emailRegex.test(value) ? undefined : message,
    };
  };
}

/**
 * Min length validator
 */
export function minLength(
  min: number,
  message?: string
): Validator<string | any[]> {
  return (value: string | any[]): ValidationResult => {
    if (!value) return { valid: true };

    const length = typeof value === 'string' ? value.length : value.length;
    const valid = length >= min;

    return {
      valid,
      message: valid ? undefined : message || `Minimum length is ${min}`,
    };
  };
}

/**
 * Max length validator
 */
export function maxLength(
  max: number,
  message?: string
): Validator<string | any[]> {
  return (value: string | any[]): ValidationResult => {
    if (!value) return { valid: true };

    const length = typeof value === 'string' ? value.length : value.length;
    const valid = length <= max;

    return {
      valid,
      message: valid ? undefined : message || `Maximum length is ${max}`,
    };
  };
}

/**
 * Pattern validator (regex)
 */
export function pattern(
  regex: RegExp,
  message: string = 'Invalid format'
): Validator<string> {
  return (value: string): ValidationResult => {
    if (!value) return { valid: true };

    return {
      valid: regex.test(value),
      message: regex.test(value) ? undefined : message,
    };
  };
}

/**
 * Min value validator (for numbers)
 */
export function min(
  minValue: number,
  message?: string
): Validator<number> {
  return (value: number): ValidationResult => {
    if (value === undefined || value === null) return { valid: true };

    const valid = value >= minValue;
    return {
      valid,
      message: valid ? undefined : message || `Minimum value is ${minValue}`,
    };
  };
}

/**
 * Max value validator (for numbers)
 */
export function max(
  maxValue: number,
  message?: string
): Validator<number> {
  return (value: number): ValidationResult => {
    if (value === undefined || value === null) return { valid: true };

    const valid = value <= maxValue;
    return {
      valid,
      message: valid ? undefined : message || `Maximum value is ${maxValue}`,
    };
  };
}

/**
 * Compose multiple validators
 */
export function compose<T = any>(...validators: Validator<T>[]): Validator<T> {
  return (value: T): ValidationResult => {
    for (const validator of validators) {
      const result = validator(value);
      if (!result.valid) {
        return result;
      }
    }
    return { valid: true };
  };
}

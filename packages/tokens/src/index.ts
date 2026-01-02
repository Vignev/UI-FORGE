/**
 * @ui-forge/tokens
 * Design tokens and theming configuration for UI Forge
 */

// Export type definitions for design tokens
export interface DesignToken {
  value: string;
  type: 'color' | 'spacing' | 'typography' | 'shadow' | 'radius' | 'transition' | 'z-index';
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface ThemeColors {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  neutral: ColorScale;
}

export interface SemanticColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
}

export type Theme = 'light' | 'dark';

// Re-export CSS for convenience (consumers should import CSS directly)
export const TOKENS_CSS_PATH = '@ui-forge/tokens/tokens.css';
export const LIGHT_THEME_CSS_PATH = '@ui-forge/tokens/themes/light.css';
export const DARK_THEME_CSS_PATH = '@ui-forge/tokens/themes/dark.css';

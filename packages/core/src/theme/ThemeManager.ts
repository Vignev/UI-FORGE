/**
 * Theme Manager for UI Forge
 * Handles theme switching and custom theme application
 */

import type { Theme } from '@ui-forge/tokens';

export interface CustomTheme {
  [key: string]: string | number;
}

export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme = 'light';
  private customTheme: CustomTheme | null = null;

  private constructor() {
    // Initialize with system preference if available
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      this.applyTheme(this.currentTheme);
    }
  }

  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  /**
   * Get the current theme
   */
  getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Set and apply a theme
   */
  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  /**
   * Apply custom theme variables
   */
  setCustomTheme(theme: CustomTheme): void {
    this.customTheme = theme;
    this.applyCustomTheme(theme);
  }

  /**
   * Clear custom theme
   */
  clearCustomTheme(): void {
    this.customTheme = null;
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      Object.keys(this.customTheme || {}).forEach((key) => {
        root.style.removeProperty(key);
      });
    }
  }

  /**
   * Watch for system theme changes
   */
  watchSystemTheme(callback?: (theme: Theme) => void): () => void {
    if (typeof window === 'undefined') {
      return () => {};
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const newTheme: Theme = e.matches ? 'dark' : 'light';
      this.setTheme(newTheme);
      callback?.(newTheme);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }

    // Fallback for older browsers
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);

      // Store preference
      try {
        localStorage.setItem('uif-theme', theme);
      } catch (e) {
        // localStorage might not be available
        console.warn('Failed to save theme preference:', e);
      }
    }
  }

  private applyCustomTheme(theme: CustomTheme): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(key, String(value));
      });
    }
  }

  /**
   * Load theme from localStorage
   */
  loadSavedTheme(): void {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('uif-theme') as Theme | null;
      if (saved && (saved === 'light' || saved === 'dark')) {
        this.setTheme(saved);
      }
    } catch (e) {
      console.warn('Failed to load theme preference:', e);
    }
  }
}

/**
 * Create a custom theme object
 */
export function createTheme(overrides: CustomTheme): CustomTheme {
  return overrides;
}

/**
 * Convenience export for getting theme instance
 */
export const themeManager = ThemeManager.getInstance();

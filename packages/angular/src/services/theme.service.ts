/**
 * Theme Service for Angular applications
 */

import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { Theme } from '@ui-forge/tokens';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Signal for reactive theme state
  theme = signal<Theme>('light');
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      // Load saved theme or detect system preference
      const savedTheme = this.loadSavedTheme();
      if (savedTheme) {
        this.theme.set(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.theme.set(prefersDark ? 'dark' : 'light');
      }

      // Apply initial theme
      this.applyTheme(this.theme());

      // Watch for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!this.loadSavedTheme()) {
          const newTheme: Theme = e.matches ? 'dark' : 'light';
          this.setTheme(newTheme);
        }
      });
    }

    // Effect to apply theme changes
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
    });
  }

  /**
   * Set the current theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
    if (this.isBrowser) {
      try {
        localStorage.setItem('uif-theme', theme);
      } catch (e) {
        console.warn('Failed to save theme preference:', e);
      }
    }
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Get the current theme value
   */
  getTheme(): Theme {
    return this.theme();
  }

  private applyTheme(theme: Theme): void {
    if (this.isBrowser && typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  private loadSavedTheme(): Theme | null {
    if (!this.isBrowser) return null;
    try {
      const saved = localStorage.getItem('uif-theme') as Theme | null;
      if (saved && (saved === 'light' || saved === 'dark')) {
        return saved;
      }
    } catch (e) {
      console.warn('Failed to load theme preference:', e);
    }
    return null;
  }
}

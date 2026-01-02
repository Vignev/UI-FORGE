/**
 * Theme Provider for React applications
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme } from '@ui-forge/tokens';
import { themeManager } from '@ui-forge/core';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
}

/**
 * Theme Provider component
 * Wraps the application to provide theme context
 */
export function ThemeProvider({
  children,
  defaultTheme = 'light',
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Load saved theme or use system preference
    if (enableSystem) {
      themeManager.loadSavedTheme();
      const currentTheme = themeManager.getTheme();
      setThemeState(currentTheme);
      // Apply theme to DOM
      themeManager.setTheme(currentTheme);

      // Watch for system theme changes
      const unwatch = themeManager.watchSystemTheme((newTheme) => {
        setThemeState(newTheme);
      });

      return unwatch;
    } else {
      // Apply default theme to DOM
      themeManager.setTheme(defaultTheme);
    }
  }, [enableSystem, defaultTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    themeManager.setTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook to access theme context
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

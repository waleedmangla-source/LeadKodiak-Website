import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeOption {
  id: string;
  name: string;
  subtitle: string;
  swatches: [string, string, string, string]; // [Primary, Neutral, Canvas, Accent]
  colorHuntUrl?: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'kodiak-classic',
    name: 'Classic Kodiak',
    subtitle: 'Navy & Cognac (Default)',
    swatches: ['#0A2947', '#D3D4C0', '#F3E4C9', '#8B5E3C'],
  },
  {
    id: 'crimson-slate',
    name: 'Crimson & Slate',
    subtitle: 'Wine & Linen',
    swatches: ['#2D0000', '#757D6F', '#EEEAD7', '#6D0808'],
    colorHuntUrl: 'https://colorhunt.co/palette/6d08082d0000757d6feeead7',
  },
  {
    id: 'terracotta-ember',
    name: 'Terracotta Ember',
    subtitle: 'Charcoal & Coral',
    swatches: ['#524646', '#A8A492', '#FCF2E5', '#EC5B38'],
    colorHuntUrl: 'https://colorhunt.co/palette/524646a8a492fcf2e5ec5b38',
  },
  {
    id: 'slate-blaze',
    name: 'Slate & Blaze',
    subtitle: 'Steel Teal & Orange',
    swatches: ['#303841', '#76ABAE', '#F5F5F5', '#FF5722'],
    colorHuntUrl: 'https://colorhunt.co/palette/f5f5f576abae303841ff5722',
  },
  {
    id: 'burgundy-sky',
    name: 'Burgundy & Sky',
    subtitle: 'Maroon & Powder Mist',
    swatches: ['#790D16', '#AEC4D4', '#F5EFE1', '#E5D3AF'],
    colorHuntUrl: 'https://colorhunt.co/palette/790d16e5d3aff5efe1aec4d4',
  },
  {
    id: 'nordic-ruby',
    name: 'Nordic Teal & Ruby',
    subtitle: 'Alpine Teal & Ruby',
    swatches: ['#6C1A1A', '#31AAA9', '#F8E0A4', '#A82020'],
    colorHuntUrl: 'https://colorhunt.co/palette/31aaa9f8e0a4a820206c1a1a',
  },
];

interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeId: string) => void;
  themes: ThemeOption[];
  activeThemeOption: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'leadkodiak_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'kodiak-classic';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  const activeThemeOption =
    THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  const setTheme = (themeId: string) => {
    if (THEMES.some((t) => t.id === themeId)) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themes: THEMES,
        activeThemeOption,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

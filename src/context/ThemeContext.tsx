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
  {
    id: 'glacier-teal',
    name: 'Glacier & Deep Sea',
    subtitle: 'Charcoal & Aqua Ice',
    swatches: ['#2C3333', '#A5C9CA', '#E7F6F2', '#395B64'],
    colorHuntUrl: 'https://colorhunt.co/palette/2c3333395b64a5c9cae7f6f2',
  },
  {
    id: 'celadon-salmon',
    name: 'Celadon & Salmon',
    subtitle: 'Mint, Peach & Rust',
    swatches: ['#3A241F', '#D4E2D4', '#FCF8E8', '#DF7861'],
    colorHuntUrl: 'https://colorhunt.co/palette/fcf8e8d4e2d4ecb390df7861',
  },
  {
    id: 'dusty-denim',
    name: 'Dusty Denim & Sand',
    subtitle: 'Slate Blue, Oat & Cocoa',
    swatches: ['#403430', '#D7C0AE', '#EEE3CB', '#9BABB8'],
    colorHuntUrl: 'https://colorhunt.co/palette/9babb8eee3cbd7c0ae967e76',
  },
  {
    id: 'forest-gold',
    name: 'Forest & Antique Gold',
    subtitle: 'Deep Evergreen & Ochre',
    swatches: ['#395144', '#4E6C50', '#F0EBCE', '#AA8B56'],
    colorHuntUrl: 'https://colorhunt.co/palette/3951444e6c50aa8b56f0ebce',
  },
  {
    id: 'espresso-walnut',
    name: 'Espresso & Walnut',
    subtitle: 'Black Earth & Khaki Bone',
    swatches: ['#1A120B', '#D5CEA3', '#E5E5CB', '#3C2A21'],
    colorHuntUrl: 'https://colorhunt.co/palette/1a120b3c2a21d5cea3e5e5cb',
  },
];

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeId: string) => void;
  themes: ThemeOption[];
  activeThemeOption: ThemeOption;
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'leadkodiak_theme';
const MODE_STORAGE_KEY = 'leadkodiak_mode';

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

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(MODE_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [mode]);

  const activeThemeOption =
    THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  const setTheme = (themeId: string) => {
    if (THEMES.some((t) => t.id === themeId)) {
      setCurrentTheme(themeId);
    }
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themes: THEMES,
        activeThemeOption,
        mode,
        toggleMode,
        setMode,
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

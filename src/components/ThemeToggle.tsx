import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { mode, toggleMode, activeThemeOption } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={
        isDark
          ? `Switch to Light Mode (${activeThemeOption.name})`
          : `Switch to Dark Mode (${activeThemeOption.name})`
      }
      className={`p-2 rounded-xl transition-all border border-sage-300 text-navy-900 bg-cream-100/60 hover:bg-sage-300/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cognac-500 shadow-sm flex items-center justify-center ${className}`}
    >
      {isDark ? (
        <Sun size={17} className="text-amber-400 rotate-0 transition-transform duration-300" />
      ) : (
        <Moon size={17} className="text-navy-800 rotate-0 transition-transform duration-300" />
      )}
    </button>
  );
};

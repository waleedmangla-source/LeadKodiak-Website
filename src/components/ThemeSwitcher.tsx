import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, ChevronDown, Check, Sparkles } from 'lucide-react';

interface ThemeSwitcherProps {
  compact?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ compact = false }) => {
  const { currentTheme, setTheme, themes, activeThemeOption } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Color Theme"
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-2 rounded-xl transition-all border border-sage-300 text-navy-900 bg-cream-100/60 hover:bg-sage-300/40 focus:outline-none focus:ring-2 focus:ring-cognac-500 shadow-sm ${
          compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-xs sm:text-sm font-semibold'
        }`}
      >
        <Palette size={16} className="text-cognac-500 shrink-0" />

        {!compact && (
          <span className="hidden lg:inline text-xs font-mono font-bold">
            {activeThemeOption.name}
          </span>
        )}

        {/* 4 Swatch Preview Chips */}
        <div className="flex items-center -space-x-1 shrink-0">
          {activeThemeOption.swatches.map((color, idx) => (
            <span
              key={idx}
              className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <ChevronDown
          size={14}
          className={`text-navy-800 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 rounded-2xl glass-card border border-sage-300 shadow-glass p-3 space-y-1 animate-fade-in ${
            compact
              ? 'left-0 right-0 sm:right-auto sm:left-0 w-72'
              : 'right-0 w-80'
          }`}
        >
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-sage-300/40 mb-2">
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-cognac-600 flex items-center gap-1.5">
              <Sparkles size={12} /> Color Palettes
            </span>
            <span className="text-[10px] font-mono text-navy-800/60">
              {themes.length} Curated Themes
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-1 pr-0.5">
            {themes.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between gap-3 transition-all ${
                    isActive
                      ? 'bg-navy-900 text-cream-100 shadow-sm'
                      : 'hover:bg-sage-300/40 text-navy-900'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold truncate">
                        {theme.name}
                      </span>
                    </div>
                    <div
                      className={`text-[10px] font-mono truncate ${
                        isActive ? 'text-sage-300' : 'text-navy-800/70'
                      }`}
                    >
                      {theme.subtitle}
                    </div>
                  </div>

                  {/* 4 Swatches and Active Indicator */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="flex items-center -space-x-1">
                      {theme.swatches.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-white/80 shadow-xs"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>

                    <div className="w-4 h-4 flex items-center justify-center">
                      {isActive && (
                        <Check size={14} className="text-cognac-400 stroke-[3]" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

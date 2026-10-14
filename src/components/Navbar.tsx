import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { KodiakLogo } from './KodiakLogo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Plans & Discounts', path: '/plans-discounts' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-card shadow-glass border-b border-sage-300/80 backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand with Bear Logo Placeholder */}
          <KodiakLogo iconSize={40} />

          {/* Desktop Navigation Links - Exact Order */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-navy-900 bg-sage-300/40 font-bold shadow-sm'
                      : 'text-navy-800/80 hover:text-navy-900 hover:bg-sage-300/25'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {item.name}
                    {isActive && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cognac-500 animate-pulse" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls: Theme Switcher & Light/Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <ThemeToggle />
            <ThemeSwitcher compact={true} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy-800 bg-sage-300/50 hover:bg-sage-300 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-sage-300 shadow-xl px-4 pt-3 pb-6 mt-3 animate-fade-in space-y-3">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-navy-900 bg-sage-300/60 font-bold'
                      : 'text-navy-800 hover:bg-sage-300/30'
                  }`
                }
              >
                <span>{item.name}</span>
                {location.pathname === item.path && (
                  <span className="w-2 h-2 rounded-full bg-cognac-500" />
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

interface KodiakLogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  inverted?: boolean;
}

export const KodiakBearIcon: React.FC<{
  size?: number;
  className?: string;
  inverted?: boolean;
}> = ({ size = 44, className = '' }) => {
  return (
    <img
      src="/LeadKodiak-Branding.svg"
      alt="Lead Kodiak Emblem"
      width={size}
      height={size}
      className={`object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      loading="eager"
    />
  );
};

export const KodiakLogo: React.FC<KodiakLogoProps> = ({
  className = '',
  iconSize = 46,
  showText = true,
  inverted = false,
}) => {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 no-underline transition-all ${className}`}
      aria-label="Lead Kodiak Home"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <KodiakBearIcon size={iconSize} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-sans text-xl font-extrabold tracking-tight leading-none ${
              inverted ? 'text-cream-100' : 'text-navy-800'
            }`}
          >
            Lead <span className="text-cognac-500">Kodiak</span>
          </span>
          <span
            className={`font-mono text-[9px] font-semibold tracking-wider mt-0.5 ${
              inverted ? 'text-sage-300' : 'text-navy-900/70'
            }`}
          >
            Software &amp; Marketing Firm
          </span>
        </div>
      )}
    </Link>
  );
};

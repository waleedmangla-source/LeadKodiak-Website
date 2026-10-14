# Lead Kodiak — Design System (`DESIGN.md`)

## 1. Color Palette

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| **Navy** | `#0A2947` | Primary Dark | Headings, dark cards, inverted surfaces, primary text[cite: 1] |
| **Cream** | `#F3E4C9` | Canvas Base | Page backdrop, light surface fill, inverted copy[cite: 1] |
| **Sage** | `#D3D4C0` | Structural Neutral | Borders, dividers, subtle pills, inactive controls[cite: 1] |
| **Cognac** | `#8B5E3C` | Accent & Action | Primary CTA buttons, interactive sliders, highlight badges[cite: 1] |

---

## 2. Typography

* **Sans (UI & Headings)**: `Plus Jakarta Sans`, sans-serif (`400`, `600`, `700`, `800`)[cite: 1]
* **Mono (Telemetry & Data)**: `Space Grotesk`, monospace (`500`, `700`)[cite: 1]

---

## 3. Tailwind Configuration

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071E36',
          800: '#0A2947',
          700: '#12375C',
        },
        cream: {
          100: '#F3E4C9',
          200: '#E8D2AF',
        },
        sage: {
          300: '#D3D4C0',
          400: '#BCBEA5',
        },
        cognac: {
          500: '#8B5E3C',
          600: '#734C2E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
    },
  },
};
```

---

## 4. Surfaces & Backdrop Styles

```css
/* Ambient Canvas Backdrop */
body {
  background-color: #F3E4C9;
  color: #0A2947;
  background-image: 
    radial-gradient(at 15% 10%, rgba(211, 212, 192, 0.5) 0px, transparent 50%),
    radial-gradient(at 85% 65%, rgba(139, 94, 60, 0.12) 0px, transparent 60%);
}

/* Light Glass Surface */
.glass-card {
  background: rgba(243, 228, 201, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(211, 212, 192, 0.85);
}

/* Inverted Dark Surface */
.glass-card-dark {
  background: rgba(10, 41, 71, 0.96);
  border: 1px solid rgba(211, 212, 192, 0.2);
  color: #F3E4C9;
}
```

---

## 5. Core Components

* **Primary CTA**: Background `#8B5E3C` (Cognac), hover `#734C2E`, text white, rounded `12px` (`rounded-xl`), with subtle active press effect (`active:scale-95`)[cite: 1].
* **Secondary CTA**: `.glass-card` background, border `1px solid #D3D4C0`, text `#0A2947` (Navy)[cite: 1].
* **Status Pill**: Background `#D3D4C0` (Sage), text `#0A2947`, rounded-full, with a pulsing green indicator[cite: 1].
* **Interactive Sliders**: Native range inputs styled with `accent-color: #8B5E3C`[cite: 1].
* **Featured Pricing Card**: Solid `#0A2947` background, `2px` border in `#8B5E3C`, elevated by `-8px` on desktop[cite: 1].
* **Terminal Panels**: Embedded inside `.glass-card-dark` using `#071E36` sub-containers and Space Grotesk data counters[cite: 1].

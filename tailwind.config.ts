const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const svgToDataUri = require('mini-svg-data-uri');

// Design tokens are defined as RGB channels in src/styles/globals.css
// (light on :root, dark on .dark) so every colour supports `/opacity`.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh) * 100)',
      },
      colors: {
        // "Built Solid" design system
        bg: token('bg'),
        surface: token('surface'),
        muted: token('muted'),
        line: token('line'),
        fg: token('fg'),
        subtle: token('subtle'),
        brand: token('brand'),
        'brand-hover': token('brand-hover'),
        ink: token('ink'),

        // Legacy names kept so nothing else breaks
        text: token('fg'),
        LightModeBG: '#F7F6F3',
        DarkModeBG: '#0B0F14',
        primary: '#0B0F14',
        secondary: token('brand'),
        accent: '#000000',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        roboto: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)',
        lift: '0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -16px rgb(15 23 42 / 0.28)',
        brand: '0 12px 28px -10px rgb(199 33 36 / 0.55)',
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        aurora: 'aurora 60s linear infinite',
        'infinite-loop': 'infinite-loop 20s linear infinite',
        marquee: 'marquee 40s linear infinite',
        kenburns: 'kenburns 8s linear forwards',
        progress: 'progress linear forwards',
        'scroll-dot': 'scroll-dot 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
        },
        'infinite-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '70%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

// Adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors)
      .filter(([, val]) => typeof val === 'string' && !String(val).includes('var('))
      .map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ':root': newVars });
}

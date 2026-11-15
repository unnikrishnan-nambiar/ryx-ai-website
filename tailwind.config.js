/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Night-to-morning palette. Pages open in `night` (the hours the
        // agents work unattended) and continue on `paper` (the morning the
        // owner wakes up to). `signal` is the deck's blue; `dawn` is the
        // single warm note, kept for times of day and highlights.
        night: '#0B1030',
        dusk: '#1A2158',
        signal: {
          DEFAULT: '#3D5AFE',
          deep: '#2A41D6',
          soft: '#E4E8FF',
          glow: '#8C9CFF',
        },
        dawn: '#FFB36B',
        paper: '#F4F6FB',
        card: '#FFFFFF',
        ink: '#0C1024',
        'ink-2': '#454B66',
        'ink-3': '#676D8A',
        rule: 'rgba(12,16,36,0.12)',
        'rule-night': 'rgba(255,255,255,0.14)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        // The hero's one orchestrated moment: log entries arrive in order.
        arrive: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dropdown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%, 80%, 100%': { opacity: '0.25' },
          '40%': { opacity: '1' },
        },
      },
      animation: {
        arrive: 'arrive 600ms cubic-bezier(0.22,1,0.36,1) both',
        dropdown: 'dropdown 220ms cubic-bezier(0.22,1,0.36,1)',
        typing: 'typing 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

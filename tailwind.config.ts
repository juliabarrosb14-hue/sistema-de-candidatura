import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        drenesse: {
          red: '#E10B17',
          redDark: '#B4090F',
          redDeep: '#7A0509',
          black: '#0B0B0C',
          ink: '#171718'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(0,0,0,0.35)',
        glow: '0 0 0 4px rgba(225,11,23,0.12)'
      },
      backgroundImage: {
        'drenesse-gradient':
          'radial-gradient(120% 140% at 100% 0%, #ff2f3a 0%, #E10B17 32%, #9a070f 68%, #4a0308 100%)'
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: {
        '10': '#e1e1e6',
        '15': '#bdbcc6',
        '90': '#636176',
        '100': '#3f3d56',
        '110': '#323145',
      },
      secondary: {
        '10': '#fefbf6',
        '15': '#ffd288',
        '90': '#fab951',
        '100': '#f9a826',
        '110': '#c7861e',
      },
      tertiary: {
        '10': '#fff0f3',
        '15': '#ffd1da',
        '90': '#ff849d',
        '100': '#ff6584',
        '110': '#d7516c',
      },
      neutral: {
        '10': '#f3f3f6',
        '15': '#cfcfd6',
        '70': '#3f3d56',
        '80': '#262534',
        '90': '#13121a',
        '100': '#060609',
      },
    },
    fontSize: {
      sm: ['0.875rem', '150%'],
      base: ['1rem', '150%'],
      lg: ['1.5rem', '150%'],
      xl: ['2rem', '150%'],
      '2xl': ['4rem', '150%'],
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    extend: {},
  },
  plugins: [],
};
export default config;

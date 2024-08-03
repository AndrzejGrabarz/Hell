/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'custom-gradient': 'linear-gradient(to right, #725E4A, #A3927D, #7D6751)'
      },

      fontFamily: {
        test: ['Caveat'],
        RedHatItalic: ['Red+Hat+Text'],
        RedHatItalic2: ['RedHatTextVariableFont'],
      },

      skew: {
        40: '40deg',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1736px',
      '4xl': '2136px',
      
    },
  },
  plugins: [],
};

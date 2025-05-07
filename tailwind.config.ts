import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pastel-gradient": "linear-gradient(120deg, #fcc5e4 0%, #fda34b 100%)", // Example pastel gradient
        "button-gradient": "linear-gradient(to right, #a8c0ff, #3f2b96)", // Example button gradient
        "profile-gradient": "radial-gradient(circle, rgba(174,213,255,0.8) 0%, rgba(241,196,255,0.8) 100%)", // Gradient for profile circle
      },
      colors: {
        'pastel-pink': '#fcc5e4',
        'pastel-blue': '#a8c0ff',
        'pastel-purple': '#e0b0ff',
        'card-bg': 'rgba(255, 255, 255, 0.6)', // Semi-transparent white for cards
        'primary-text': '#333333',
        'secondary-text': '#777777',
      },
      borderRadius: {
        'xl': '1.5rem', // Larger border radius for cards
        '2xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)', // Softer shadow
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      }
    },
  },
  plugins: [],
};
export default config;


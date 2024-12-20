/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        // Button Colors 
        primary: {
          DEFAULT: "#134dcd", // Primary Blue
          hover: "#1043b1", // Darker for hover
          active: "#0d358c", // Even darker for active
        },
        secondary: {
          DEFAULT: "#D88B09", // Amber Gold 
          hover: "#d97706", // Darker for hover
          active: "#b45309", // Even darker for active
        },
        tertiary: {
          DEFAULT: "#6b7280", // Tertiary Warm Gray
          hover: "#4b5563",
          active: "#374151",
        },
        

        // Background Colors
        'midnight-navy': '#0a0f24',
      },
      keyframes: {
        scroll:{
          '0%': { 
            transform: 'translateX(0)', 
            '-webkit-transform': 'translateX(0)',
          },
          '100%': { 
            transform: 'translateX(-50%)',
            '-webkit-transform': 'translateX(-50%)',
          },
        }
      },
      animation:{
        scroll: 'scroll 20s linear infinite 1s',
      }
    },
  },
  plugins: [],
};

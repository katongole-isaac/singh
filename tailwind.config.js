/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001d4a',
        secondary: '#7c3aed', // purple - shades
        mute: '#64748b', // slate-500

        // secondary: "#5a189a",  //  "#3a0ca3", // purple -shadow
        // mute: '#4b5563',
      },

      backgroundImage: {
        onboard: "url('@/assets/images/05.jpg')",
        updates: "url('@/assets/images/bg-pattern-2.png')",
      },
    },
  },
  plugins: [],
}

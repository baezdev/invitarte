/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a259ff",
        secon: "#ffc700",
        third: "#ec4899",
      },
      keyframes: {
        dance: {
          "0%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(-8deg)" },
        },
      },
      animation: {
        dance: "dance .3s linear infinite",
      },
    },
  },
  plugins: [],
}

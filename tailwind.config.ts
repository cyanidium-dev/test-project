import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#020518",
      },
      fontFamily: {
        actay: ["Actay", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "radial-button": `
          radial-gradient(circle at 0% 10%, #a7c7ff 5%, transparent 25%),
          radial-gradient(circle at 80% 100%, #91baff 5%, transparent 25%)
        `,
      },
    },
  },
  plugins: [],
};

export default config;

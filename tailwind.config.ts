import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBrown:"#F5F5F5"
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxl': '1.75rem', // 28px
        'custom-font': '14px', // 48px
      },
    },
  },
  plugins: [],
};
export default config;

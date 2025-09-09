import type { Config } from "tailwindcss"

export default {
  darkMode: "selector",
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      borderRadius: {
        // lg: "0.5rem",
        // md: "calc(0.5rem - 2px)",
        // sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        // sans: ["PT Sans Caption", "sans-serif"],
        // inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        // "heading-hg": ["40px", { lineHeight: "120%", fontWeight: "700" }],
        // "heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
        // "heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],
        // "heading-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
        // "heading-sm": ["20px", { lineHeight: "120%", fontWeight: "700" }],
        // "heading-xs": ["16px", { lineHeight: "120%", fontWeight: "700" }],
        // "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        // "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        // "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],
        // "body-tag": ["12px", { lineHeight: "100%", fontWeight: "400" }],
        // "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        // "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
    },
  },
} satisfies Config

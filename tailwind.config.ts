import { montserrat, quicksand } from "./lib/font";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: {
        "10": "#e1e1e6",
        "15": "#bdbcc6",
        "90": "#636176",
        "100": "#3f3d56",
        "110": "#323145",
      },
      secondary: {
        "10": "#fefbf6",
        "15": "#ffd288",
        "90": "#fab951",
        "100": "#f9a826",
        "110": "#c7861e",
      },
      tertiary: {
        "10": "#fff0f3",
        "15": "#ffd1da",
        "90": "#ff849d",
        "100": "#ff6584",
        "110": "#d7516c",
      },
      neutral: {
        "10": "#f3f3f6",
        "15": "#cfcfd6",
        "70": "#3f3d56",
        "80": "#262534",
        "90": "#13121a",
        "100": "#060609",
      },
      danger: {
        "10": "#f8d7d7",
        "15": "#f4c4c4",
        "90": "#e26161",
        "100": "#db3939",
        "110": "#af2e2e",
      },
      success: {
        "10": "#cfe7e3",
        "15": "#b7dad6",
        "90": "#70b6ac",
        "100": "#108575",
        "110": "#0d6a5e",
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      quicksand: ["var(--font-quicksand)"],
    },
    fontSize: {
      sm: ["0.875rem", "150%"],
      base: ["1rem", "150%"],
      lg: ["1.5rem", "150%"],
      xl: ["2.25rem", "110%"],
      "2xl": ["3.5rem", "110%"],
    },

    extend: {
      screens: {
        xs: "540px",
        "2xl": "1440px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        shadprimary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        shadsecondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "navbar-height-sm": "var(--navbar-height-sm)",
        "navbar-height-lg": "var(--navbar-height-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-reverse": {
          from: { opacity: "0", transform: "translateY(-18px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s both",
        "fade-in-reverse": "fade-in-reverse 0.6s both",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;

// Tailwind: design tokens para Marin.dev V2 (oscuro premium + acentos comerciales)
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#22D3EE",
          dark: "#0891B2",
          blue: "#3B82F6",
          violet: "#8B5CF6",
          success: "#34D399",
          warning: "#FBBF24",
        },
        ink: {
          DEFAULT: "#070A12",
          950: "#050816",
          900: "#070A12",
          850: "#080B14",
          800: "#0B1020",
        },
        surface: {
          DEFAULT: "#0D1222",
          900: "#0D1222",
          850: "#10172A",
          800: "#111C31",
          glass: "rgba(15, 23, 42, 0.72)",
        },
        line: {
          DEFAULT: "rgba(148, 163, 184, 0.14)",
          strong: "rgba(148, 163, 184, 0.24)",
          glow: "rgba(34, 211, 238, 0.32)",
        },
        muted: {
          DEFAULT: "#94A3B8",
          soft: "#CBD5E1",
          bright: "#E2E8F0",
        },
        cyan: {
          electric: "#22D3EE",
        },
        violet: {
          electric: "#8B5CF6",
        },
        blue: {
          electric: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: "72rem",
        copy: "44rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 6px 30px -12px rgba(0,0,0,0.25)",
        glow: "0 24px 80px -32px rgba(34, 211, 238, 0.45)",
        premium:
          "0 28px 90px -40px rgba(15, 23, 42, 0.95), 0 0 0 1px rgba(148, 163, 184, 0.10)",
        "premium-hover":
          "0 34px 110px -42px rgba(34, 211, 238, 0.35), 0 0 0 1px rgba(148, 163, 184, 0.18)",
      },
      backgroundImage: {
        "radial-cyan":
          "radial-gradient(circle at 15% 10%, rgba(34, 211, 238, 0.20), transparent 30%)",
        "radial-violet":
          "radial-gradient(circle at 85% 20%, rgba(139, 92, 246, 0.16), transparent 32%)",
        "premium-grid":
          "linear-gradient(rgba(148, 163, 184, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(135deg, #22D3EE 0%, #3B82F6 52%, #8B5CF6 100%)",
        "surface-glow":
          "linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(13, 18, 34, 0.78))",
      },
    },
  },
  plugins: [],
};

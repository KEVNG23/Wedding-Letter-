import { Cormorant_Garamond, Great_Vibes, Playfair_Display } from "next/font/google";

export const serifFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["vietnamese"],
  weight: ["300", "400"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

export const displayFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["vietnamese"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true,
});

export const scriptFont = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  fallback: ["cursive"],
  adjustFontFallback: true,
});

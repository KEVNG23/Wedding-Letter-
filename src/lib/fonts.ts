import { Cormorant_Garamond, Great_Vibes, Playfair_Display } from "next/font/google";

export const serifFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const displayFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const scriptFont = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  display: "swap",
  preload: true,
});

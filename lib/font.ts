import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const poppins = Poppins({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

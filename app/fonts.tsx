import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  Inter,
  Manrope,
  Instrument_Serif,
  Instrument_Sans,
  Unbounded,
} from "next/font/google";

import localFont from "next/font/local";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-unbounded",
});

const overusedGrotesk = localFont({
  src: "../public/fonts/OverusedGroteskRoman-VF.ttf",
  variable: "--font-overused-grotesk",
});

export default {
  InstrumentSerif: instrumentSerif,
  InstrumentSans: instrumentSans,
  Inter: inter,
  GeistSans,
  GeistMono,
  Manrope: manrope,
  Unbounded: unbounded,
  OverusedGrotesk: overusedGrotesk,
};

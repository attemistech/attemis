import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

import Fonts from "@/app/fonts";

import Navbar from "@/components/NavbarModern";
import PageTransitionEffect from "@/components/PageTransitionEffect";

import { cn } from "@/lib/utils";

import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            "overflow-x-hidden",
            Fonts.InstrumentSerif.variable,
            Fonts.InstrumentSans.variable,
            Fonts.GeistSans.variable,
            Fonts.GeistMono.variable,
            Fonts.Manrope.variable,
            Fonts.Inter.variable,
            Fonts.Unbounded.variable,
            Fonts.OverusedGrotesk.variable
          )}
        >
          <Navbar />
          <PageTransitionEffect>
            <ReactLenis root />
            {children}
          </PageTransitionEffect>
        </body>
      </html>
    </ViewTransitions>
  );
}

import Fonts from "@/app/fonts";

import Navbar from "@/components/Navbar";

import { cn } from "@/lib/utils";

import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import PageTransitionEffect from "@/components/PageTransitionEffect";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
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
            <div
              id="portal"
              className="absolute inset-0 min-h-screen min-w-screen"
            />
            {children}
          </PageTransitionEffect>
        </body>
      </html>
    </ViewTransitions>
  );
}

export const metadata = {
  generator: "v0.app",
};

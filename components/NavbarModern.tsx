"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/assets/attemis-logo.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { warpVariants } from "@/lib/animations";

const PAGES = [
  { label: "Home", path: "/" },
  { label: "Sobre nós", path: "/about" },
  { label: "Tecnologias", path: "/technologies" },
  { label: "Patentes", path: "/patents" },
  { label: "Contato", path: "/contact" },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className={cn(
          "fixed top-8 z-[9999] mx-auto hidden w-full gap-4 flex-row items-center justify-center self-start rounded-full md:flex transition-all duration-300 px-5 sm:px-20",
          !isAnimating && "![filter:unset]"
        )}
        variants={warpVariants}
        initial="hidden"
        animate={"visible"}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <MotionLink
          className="flex justify-center items-center transition-all duration-300 p-3 h-12 w-12 aspect-square rounded-full backdrop-blur-sm saturate-150 bg-offwhite/80"
          href="/"
        >
          <Image
            alt="Logo"
            src={Logo}
            height={22}
            width={22}
            className="pb-[2px]"
          />
        </MotionLink>

        <div className="p-3 px-6 h-12 rounded-full backdrop-blur-sm saturate-150 bg-offwhite/90 inset-0 hidden flex-row gap-6 items-center justify-start space-x-2 text-sm font-medium text-black/70 transition duration-200 hover:text-black md:flex md:space-x-2">
          {PAGES.map((p) => (
            <Link
              key={p.path}
              className={cn(
                `text-lg font-[400] font-overused-grotesk tracking-tight text-black/70 hover:text-blackcursor-pointer transition-all`,
                pathname === p.path && "text-black font-regular"
              )}
              href={p.path}
            >
              <span className="relative z-20">{p.label}</span>
            </Link>
          ))}
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        className={cn(
          "fixed w-full flex flex-col top-8 z-[9999] items-center justify-between rounded-full md:hidden px-4 py-3 transition-all duration-300",
          !isAnimating && "![filter:unset]"
        )}
        variants={warpVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="w-full h-16 flex flex-row items-center justify-between gap-6 rounded-full md:flex transition-all duration-300 px-4 py-2">
          <MotionLink
            className="z-50 flex justify-center items-center transition-all duration-300 p-3 h-12 w-12 aspect-square rounded-full backdrop-blur-sm saturate-150 bg-offwhite/80"
            href="/"
          >
            <Image
              alt="Logo"
              src={Logo}
              height={22}
              width={22}
              className="pb-[2px]"
            />
          </MotionLink>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-3 h-12 w-12 aspect-square backdrop-blur-sm saturate-150 bg-offwhite/80 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg
                  key="close"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-black"
                  initial={{ filter: "blur(10px)", scale: 0, opacity: 0 }}
                  animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                  exit={{ filter: "blur(10px)", scale: 0, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-black"
                  initial={{ filter: "blur(10px)", scale: 0, opacity: 0 }}
                  animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
                  exit={{ filter: "blur(10px)", scale: 0, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden z-[9998] w-full bg-offwhite/80 backdrop-blur-md saturate-150 border border-[#ffffff11] rounded-b-2xl shadow-2xl p-6 rounded-2xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="flex flex-col space-y-4">
                {PAGES.map((p) => (
                  <Link
                    key={`mobile-${p.path}`}
                    href={p.path}
                    className={cn(
                      "text-lg font-[400] tracking-tight p-2 pl-3 text-black/80 hover:text-black transition-colors rounded-xl hover:bg-black/10 font-title",
                      pathname === p.path && "text-black bg-black/5"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

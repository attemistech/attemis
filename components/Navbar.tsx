"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/assets/attemis-logo.svg";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { ModalPageAnimation } from "@/lib/page-transitions";

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
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useTransitionRouter();
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-start self-start rounded-full md:flex transition-all duration-300 px-5 sm:px-20`}
      >
        <div
          className={`w-full flex-row items-center justify-between gap-6 rounded-full backdrop-blur-md md:flex border border-default-border transition-all duration-300 py-4 px-4 ${
            isScrolled ? "shadow-lg" : "border-transparent shadow-none"
          } py-2`}
          style={{
            background: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          }}
        >
          <MotionLink
            className={`z-50 flex flex-row gap-3 items-center justify-center transition-all duration-300 w-max`}
            href="/"
            initial={{ gap: 12 }}
            animate={{ gap: isScrolled ? 0 : 12 }}
          >
            <Image alt="Logo" src={Logo} height={24} />
            <motion.div
              initial={{
                opacity: 1,
                width: "auto",
              }}
              animate={{
                opacity: isScrolled ? 0 : 1,
                width: isScrolled ? 0 : "auto",
              }}
            >
              <motion.div className="flex flex-col items-center justify-center gap-0 overflow-clip pl-3">
                <h1 className="!font-unbounded tracking-tight font-black text-[1rem] -mb-2 pr-px right-0">
                  attemis
                </h1>
                <h1 className="!font-unbounded tracking-tight font-medium text-[.81rem] right-0">
                  tecnologia
                </h1>
              </motion.div>
            </motion.div>
          </MotionLink>

          <span className="text-black/70 text-lg font-geist-sans font-medium">
            /
          </span>

          <div className="inset-0 hidden flex-1 flex-row gap-6 items-center justify-start space-x-2 text-sm font-medium text-black/70 transition duration-200 hover:text-black md:flex md:space-x-2">
            {PAGES.map((p) => (
              <Link
                key={p.path}
                className={cn(
                  `text-base font-medium font-overused-grotesk uppercase tracking-tight text-black/70 hover:text-blackcursor-pointer transition-all`,
                  pathname === p.path && "text-black font-bold"
                )}
                href={p.path}
              >
                <span className="relative z-20">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed w-full top-4 z-[9999] flex items-center justify-between rounded-full md:hidden px-4 py-3 transition-all duration-300`}
      >
        <div
          className={`w-full h-16 flex flex-row items-center justify-between gap-6 rounded-full backdrop-blur-md md:flex border border-default-border transition-all duration-300 py-4 px-4 ${
            isScrolled ? "shadow-lg" : "border-transparent shadow-none"
          } py-2`}
          style={{
            background: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          }}
        >
          <a className="flex items-center justify-center gap-2 w-max" href="/">
            <Image alt="Logo" src={Logo} height={24} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
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
                  transition={{ duration: 0.2 }}
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
                  transition={{ duration: 0.2 }}
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-24 left-4 right-4 backdrop-blur-md border border-[#ffffff11] rounded-2xl shadow-2xl p-6"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <nav className="flex flex-col space-y-4">
                {PAGES.map((p) => (
                  <Link
                    key={`mobile-${p.path}`}
                    href={p.path}
                    className="text-left px-4 py-3 text-lg font-medium tracking-tighter uppercase text-white/80 hover:text-white transition-colors rounded-xl hover:bg-white/10 font-title"
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

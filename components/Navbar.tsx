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
        style={{
          willChange: "transform",
          transform: "translateZ(0) translateX(-50%)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          background: "transparent",
          left: "50%",
        }}
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
            <Image src={Logo} height={24} />
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
                <h1 className="font-unbounded tracking-tight font-black text-[1rem] -mb-2 pr-px right-0">
                  attemis
                </h1>
                <h1 className="font-unbounded tracking-tight font-medium text-[.81rem] right-0">
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
                className={cn(
                  `text-sm font-medium font-geist-sans uppercase tracking-tight text-black/70 hover:text-black transition-colors cursor-pointer`,
                  pathname === p.path && "text-black font-bold"
                )}
                href={p.path}
                onClick={(e: any) => {
                  e.preventDefault();
                  router.push(p.path, {
                    onTransitionReady: ModalPageAnimation,
                  });
                }}
              >
                <span className="relative z-20">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled
            ? "border-white/20 shadow-lg"
            : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center justify-center gap-2" href="/">
          <Image src={Logo} height={24} />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
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
              className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <nav className="flex flex-col space-y-4">
                {PAGES.map((p) => (
                  <Link
                    href={p.path}
                    className="text-left px-4 py-3 text-lg font-medium uppercase text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 font-geist-sans tracking-tight"
                    onClick={(e: any) => {
                      e.preventDefault();
                      router.push(p.path, {
                        onTransitionReady: ModalPageAnimation,
                      });
                    }}
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

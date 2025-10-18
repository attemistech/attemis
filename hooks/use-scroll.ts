import { useEffect, useState } from "react";

export function useScroll() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
          setScrollDistance(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return { isScrolled, scrollDistance };
}
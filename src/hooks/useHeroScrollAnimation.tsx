// Hook para animar elementos da HeroSection conforme o scroll
import { useEffect, useRef } from "react";

export function useHeroScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const section = ref.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Quanto da seção ainda está visível (0 = sumiu, 1 = totalmente visível)
      const visible = Math.max(0, Math.min(1, 1 - Math.abs(rect.top) / windowHeight));
      section.style.setProperty("--hero-scroll", visible.toString());
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ref;
}

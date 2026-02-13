// Hook para animação de entrada com efeito de salto (bounce) ao aparecer no viewport
import { useEffect, useRef } from "react";

export function useBounceInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let lastVisible = false;
    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = rect.top < windowHeight && rect.bottom > 0;
      if (visible && !lastVisible) {
        el.classList.add("animate-bounce-in");
      } else if (!visible && lastVisible) {
        el.classList.remove("animate-bounce-in");
      }
      lastVisible = visible;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ref;
}

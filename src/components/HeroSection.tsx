import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useHeroScrollAnimation } from "../hooks/useHeroScrollAnimation";

const HeroSection = () => {

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };
  const heroRef = useHeroScrollAnimation();

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-primary text-primary-foreground pt-12 md:pt-0"
      style={{
        ...({'--hero-scroll': 1} as Record<string, any>),
      }}
    >
      {/* Imagem de fundo floresta */}
      <img
        src="/floresta_fundo.jpg"
        alt="Fundo floresta"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none' }}
      />
      {/* Gradiente opcional sobre a imagem */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(122_39%_49%/0.15),transparent_60%)] z-10" />
      <div
        className="container relative py-8 md:py-16 lg:py-24 z-20 transition-transform duration-500"
        style={{
          transform: 'translateY(calc(-60px * (1 - var(--hero-scroll, 1))))',
          opacity: 'calc(var(--hero-scroll, 1))',
          transition: 'transform 0.5s, opacity 0.5s',
        }}
      >
        <div
          className="max-w-2xl mx-auto text-center md:text-left md:mx-0 mt-[-40px] transition-transform duration-500"
          style={{
            transform: 'translateY(calc(-40px * (1 - var(--hero-scroll, 1))))',
            opacity: 'calc(var(--hero-scroll, 1))',
            transition: 'transform 0.5s, opacity 0.5s',
          }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
            🌿 100% Natural • Resultados Reais
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 font-display">
            Quer emagrecer de forma{" "}
            <span className="text-accent">saudável e segura?</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
            Ative sua saciedade natural, reduza a fome e transforme seu corpo com nossos encapsulados 100% naturais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToProducts}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-black text-lg h-14 px-10 rounded-full animate-pulse-glow"
              size="lg"
            >
              QUERO EMAGRECER AGORA
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-8 justify-center md:justify-start text-sm text-primary-foreground/60">
            <span>✅ Frete grátis acima de R$189,99</span>
            <span>✅ Garantia de 7 dias</span>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce transition-transform duration-500"
        style={{
          transform: 'translateY(calc(40px * (1 - var(--hero-scroll, 1))))',
          opacity: 'calc(var(--hero-scroll, 1))',
          transition: 'transform 0.5s, opacity 0.5s',
        }}
      >
        <ArrowDown className="h-6 w-6 text-primary-foreground/40" />
      </div>
      {/* Modelo Psyllium no canto inferior direito */}
      <img
        src="/modelo_psyllium.png"
        alt="Modelo segurando Psyllium"
        className="hidden md:block absolute bottom-0 right-0 w-[500px] max-w-[40vw] z-30 drop-shadow-xl transition-transform duration-500"
        style={{
          pointerEvents: 'none',
          transform: 'translateY(calc(80px * (1 - var(--hero-scroll, 1))))',
          opacity: 'calc(var(--hero-scroll, 1))',
          transition: 'transform 0.5s, opacity 0.5s',
        }}
      />
    </section>
  );
};

export default HeroSection;

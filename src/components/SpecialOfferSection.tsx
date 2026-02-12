import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { Gift, Truck, Clock } from "lucide-react";

const SpecialOfferSection = () => {
  const { addItem } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const bestSeller = products[0];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-black mb-4 font-display">
          Oferta Especial — <span className="text-accent">Combo 3 Potes</span>
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Leve 3 potes de {bestSeller.name} com desconto exclusivo + frete grátis!
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Clock className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">Oferta expira em:</span>
          <div className="flex gap-2">
            {[
              { value: timeLeft.hours, label: "h" },
              { value: timeLeft.minutes, label: "m" },
              { value: timeLeft.seconds, label: "s" },
            ].map((t) => (
              <div key={t.label} className="bg-accent/20 rounded-lg px-3 py-2 min-w-[50px]">
                <span className="text-2xl font-black text-accent">{pad(t.value)}</span>
                <span className="text-xs text-primary-foreground/60 ml-0.5">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 max-w-md mx-auto">
          <div className="mb-4">
            <span className="text-sm line-through text-primary-foreground/50">
              De R$ {bestSeller.variations[2].originalPrice.toFixed(2).replace(".", ",")}
            </span>
            <div className="text-4xl font-black text-accent mt-1">
              R$ {bestSeller.variations[2].price.toFixed(2).replace(".", ",")}
            </div>
            <span className="text-sm text-primary-foreground/60">ou 3x de R$ {(bestSeller.variations[2].price / 3).toFixed(2).replace(".", ",")} sem juros</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-accent mb-6">
            <Truck className="h-4 w-4" />
            <span className="font-medium">FRETE GRÁTIS para todo o Brasil</span>
          </div>
          <Button
            onClick={() => addItem(bestSeller, 2)}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-black text-lg h-14 rounded-full animate-pulse-glow"
          >
            QUERO O COMBO COM DESCONTO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;

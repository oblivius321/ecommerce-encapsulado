import { ShieldCheck, Lock, Award } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-16 md:py-24">
    <div className="container text-center">
      <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-black mb-4 font-display">
        Garantia de <span className="text-accent">7 Dias</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-10">
        Se você não ficar satisfeito com os resultados em até 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          { icon: ShieldCheck, label: "Compra Segura" },
          { icon: Lock, label: "Dados Protegidos" },
          { icon: Award, label: "Qualidade Garantida" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-muted-foreground">
            <s.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GuaranteeSection;

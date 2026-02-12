import { Apple, Flame, Brain, Zap } from "lucide-react";

const benefits = [
  { icon: Apple, title: "Controle do Apetite", description: "Reduza a fome de forma natural e sem sofrimento." },
  { icon: Flame, title: "Acelera o Metabolismo", description: "Queime mais calorias mesmo em repouso." },
  { icon: Brain, title: "Reduz a Compulsão", description: "Acabe com a vontade de doces e beliscar." },
  { icon: Zap, title: "Mais Energia", description: "Disposição de sobra para o dia inteiro." },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4 font-display">
        Por que escolher a <span className="text-accent">NATU-CÁPSULAS?</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Nossos encapsulados são formulados com ingredientes naturais de alta potência.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <b.icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;

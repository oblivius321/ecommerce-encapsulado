import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina, 34 anos",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    text: "Perdi 8kg em 2 meses usando o NatuSlim Pro. Minha fome diminuiu muito e eu não sinto mais vontade de beliscar!",
    result: "-8kg em 60 dias",
    rating: 5,
  },
  {
    name: "Marcos Silva, 42 anos",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    text: "O psyllium mudou meu treino. Tenho muito mais disposição e minha barriga está sumindo. Recomendo!",
    result: "-12kg em 60 dias",
    rating: 5,
  },
  {
    name: "Juliana Santos, 28 anos",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    text: "Tentei várias dietas e nada funcionava. Com o combo psyllium + finalmente consegui resultados reais.",
    result: "-6kg em 45 dias",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4 font-display">
        Resultados <span className="text-accent">Reais</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Veja o que nossos clientes estão dizendo sobre os encapsulados do Natu-Cápsulas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-sm">{t.name}</h4>
                <span className="text-xs font-semibold text-accent">{t.result}</span>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

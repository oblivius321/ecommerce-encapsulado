import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Qual o prazo de entrega?", a: "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega varia de 5 a 12 dias úteis, dependendo da sua região." },
  { q: "Como devo usar os encapsulados?", a: "Cada produto tem instruções específicas na embalagem. Em geral, recomendamos 2 cápsulas ao dia com um copo de água, 30 minutos antes das refeições." },
  { q: "Os produtos são seguros?", a: "Sim! Todos os nossos produtos são 100% naturais, registrados na ANVISA e fabricados em laboratório certificado com Boas Práticas de Fabricação (BPF)." },
  { q: "Em quanto tempo vejo resultados?", a: "A maioria dos nossos clientes percebe resultados visíveis entre 15 e 30 dias de uso contínuo, combinado com alimentação equilibrada." },
  { q: "Posso parcelar minha compra?", a: "Sim! Aceitamos PIX (com desconto) e cartão de crédito em até 12x. O parcelamento é processado de forma segura via Stripe." },
  { q: "E se eu não gostar do produto?", a: "Oferecemos garantia de 30 dias. Se não ficar satisfeito, basta entrar em contato que devolvemos 100% do valor pago." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4 font-display">
        Perguntas <span className="text-accent">Frequentes</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10">Tire suas dúvidas antes de comprar.</p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

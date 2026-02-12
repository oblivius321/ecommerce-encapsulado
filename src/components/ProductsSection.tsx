import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsSection = () => (
  <section id="produtos" className="py-16 md:py-24">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4 font-display">
        Nossos <span className="text-accent">Produtos</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Escolha o encapsulado ideal para o seu objetivo e comece sua transformação hoje.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

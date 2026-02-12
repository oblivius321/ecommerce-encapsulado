import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addItem } = useCart();
  const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col">
      <Link to={`/produto/${product.slug}`} className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            -{discountPercent}%
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <Link to={`/produto/${product.slug}`}>
          <h3 className="font-bold text-lg mb-1 hover:text-accent transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{product.shortDescription}</p>
        <div className="mb-4">
          <span className="text-sm line-through text-muted-foreground">
            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-2xl font-black text-primary ml-2">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <Button
          onClick={() => addItem(product)}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-11 rounded-full"
        >
          COMPRAR AGORA
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

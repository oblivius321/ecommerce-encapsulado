import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { openCart, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-primary text-primary-foreground shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-accent" />
          <span className="font-display text-xl font-black tracking-tight">NATU-CÁPSULAS</span>
        </Link>
        <button
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
          aria-label="Abrir carrinho"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

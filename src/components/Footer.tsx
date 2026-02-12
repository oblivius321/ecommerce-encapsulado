import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="font-display text-lg font-black">NATU-CÁPSULAS</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            Encapsulados naturais de alta potência para transformar seu corpo de forma saudável e segura.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>natuencapsulas@gmail.com</li>
            <li>WhatsApp: (11) 99999-9999</li>
            <li className="flex gap-3 pt-2">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Natu-cápsulas. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;

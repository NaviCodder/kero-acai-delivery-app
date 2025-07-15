
import { ShoppingCart, MapPin, Clock, Menu as MenuIcon, X as CloseIcon, Search as SearchIcon, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Cardápio", path: "/cardapio" },
  { label: "Promoções", path: "/promocoes" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Contato", path: "/contato" },
  { label: "Delivery", path: "/delivery" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/busca?query=${encodeURIComponent(search)}`);
      setSearch("");
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-acai-700 via-acai-500 to-green-400/80 backdrop-blur-lg border-b border-acai-200/30 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Espaço reservado para o logo */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center shadow-inner border-2 border-acai-200">
            {/* LOGO AQUI futuramente */}
            <span className="text-acai-700 font-bold text-xl select-none">LOGO</span>
          </div>
          <div className="ml-2">
            <h1 className="text-2xl font-extrabold text-white drop-shadow-sm tracking-tight">Kero Açaí</h1>
            <p className="text-xs text-green-100 font-medium tracking-wide">O verdadeiro sabor do açaí – Delivery rápido e fresco!</p>
          </div>
        </div>
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white font-medium hover:text-green-100 transition-colors px-2 py-1 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative ml-4">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="rounded-full px-4 py-1 text-sm bg-white/80 text-acai-800 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-acai-400"
              aria-label="Buscar produtos"
            />
            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 text-acai-600 hover:text-green-600">
              <SearchIcon className="w-4 h-4" />
            </button>
          </form>
          {/* Redes sociais */}
          <a href="https://www.instagram.com/keroacai_delivery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Kero Açaí" className="ml-4 text-white hover:text-pink-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Kero Açaí" className="ml-2 text-white hover:text-blue-300">
            <Facebook className="w-6 h-6" />
          </a>
        </nav>
        {/* Menu Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
        {/* Carrinho */}
        <div className="flex items-center space-x-3 ml-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="relative border-acai-300 bg-white/80 hover:bg-green-100 text-acai-700 font-medium shadow-md"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Carrinho</span>
            <span className="absolute -top-2 -right-2 bg-gradient-to-br from-acai-500 to-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              0
            </span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-gradient-to-b from-acai-700 via-acai-500 to-green-400 shadow-xl p-6 flex flex-col gap-6 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center mb-6">
              <span className="text-white text-xl font-bold">Menu</span>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white text-lg font-medium py-2 rounded hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="relative mt-4">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="rounded-full px-4 py-2 text-base bg-white/80 text-acai-800 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-acai-400 w-full"
                aria-label="Buscar produtos"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-acai-600 hover:text-green-600">
                <SearchIcon className="w-5 h-5" />
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

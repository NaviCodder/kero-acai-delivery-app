
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Get unique categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-acai-800 mb-6">
            Nosso <span className="text-gradient">Cardápio</span>
          </h2>
          <p className="text-acai-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Descubra sabores únicos preparados com açaí puro e ingredientes selecionados. 
            Cada tigela é uma experiência autêntica da Amazônia.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 gradient-acai rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-3xl">🥥</span>
            </div>
            <p className="text-acai-600 text-xl font-medium">Nenhum produto encontrado nesta categoria.</p>
            <p className="text-acai-500 mt-2">Experimente selecionar outra categoria do cardápio.</p>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-acai-900 to-acai-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="font-bold text-2xl">Açaí Express</h3>
              </div>
              <p className="text-purple-200">O açaí mais autêntico da cidade com entrega rápida e ingredientes frescos.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-white mb-4">Contato</h4>
              <p className="text-purple-200">📱 (11) 99999-9999</p>
              <p className="text-purple-200">📧 contato@acaiexpress.com</p>
              <p className="text-purple-200">📍 São Paulo - SP</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-white mb-4">Horário de Funcionamento</h4>
              <p className="text-purple-200">Segunda a Domingo</p>
              <p className="text-purple-200">10h às 23h</p>
              <p className="text-yellow-300 font-medium">Sempre aberto para você!</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-purple-200">
            <p>&copy; 2024 Açaí Express. Feito com ❤️ para os amantes de açaí.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

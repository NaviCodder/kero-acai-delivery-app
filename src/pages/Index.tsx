
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso <span className="text-gradient">Cardápio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha entre nossas deliciosas opções de açaí, todas preparadas com ingredientes frescos e naturais
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-purple-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Açaí Express</h3>
              <p className="text-gray-600">O melhor açaí da cidade com entrega rápida e segura.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Contato</h4>
              <p className="text-gray-600">📱 (11) 99999-9999</p>
              <p className="text-gray-600">📧 contato@acaiexpress.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Horário</h4>
              <p className="text-gray-600">Segunda a Domingo</p>
              <p className="text-gray-600">10h às 23h</p>
            </div>
          </div>
          <div className="border-t border-purple-100 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Açaí Express. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

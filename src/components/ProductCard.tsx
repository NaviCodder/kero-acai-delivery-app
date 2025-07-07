
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Adicionando ${product.name} ao carrinho`);
    // TODO: Implementar lógica do carrinho
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center animate-fade-in hover:-translate-y-1">
      {product.popular && (
        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          <Star className="w-3 h-3 mr-1" />
          Popular
        </Badge>
      )}
      
      <div className="relative mb-4 w-full h-48 overflow-hidden rounded-xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {product.size && (
          <Badge variant="outline" className="border-purple-200 text-purple-700">
            {product.size}
          </Badge>
        )}

        {product.toppings && product.toppings.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {product.toppings.slice(0, 3).map((topping, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-purple-50 text-purple-700 hover:bg-purple-100"
              >
                {topping}
              </Badge>
            ))}
            {product.toppings.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                +{product.toppings.length - 3}
              </Badge>
            )}
          </div>
        )}

        <div className="pt-2 space-y-3">
          <p className="text-2xl font-bold text-purple-700">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full gradient-acai hover:opacity-90 transition-opacity text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

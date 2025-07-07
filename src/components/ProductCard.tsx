
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Adicionando ${product.name} ao carrinho`);
    // TODO: Implementar lógica do carrinho
  };

  return (
    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center animate-fade-in hover:-translate-y-2 border border-acai-100/50">
      {product.popular && (
        <Badge className="absolute top-3 left-3 gradient-acai text-white border-0 shadow-lg">
          <Star className="w-3 h-3 mr-1 fill-current" />
          Popular
        </Badge>
      )}
      
      <div className="relative mb-6 w-full h-52 overflow-hidden rounded-2xl bg-gradient-acai-light">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-acai-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="w-4 h-4 text-acai-600" />
        </button>
      </div>

      <div className="flex-1 space-y-4 w-full">
        <h3 className="text-xl font-bold text-acai-800 group-hover:text-acai-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-acai-600/80 leading-relaxed">
          {product.description}
        </p>

        {product.size && (
          <Badge variant="outline" className="border-acai-300 text-acai-700 bg-acai-50">
            {product.size}
          </Badge>
        )}

        {product.toppings && product.toppings.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {product.toppings.slice(0, 3).map((topping, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-gradient-acai-light text-acai-700 border-acai-200 hover:bg-acai-100"
              >
                {topping}
              </Badge>
            ))}
            {product.toppings.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-acai-100 text-acai-600">
                +{product.toppings.length - 3} mais
              </Badge>
            )}
          </div>
        )}

        <div className="pt-4 space-y-4">
          <p className="text-3xl font-bold text-acai-800">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full gradient-acai hover:opacity-90 transition-all text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

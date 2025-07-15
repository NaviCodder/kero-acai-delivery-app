
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Heart, Share2, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Suporte a variants
  const [selectedVariant, setSelectedVariant] = useState(product.variants ? product.variants[0] : undefined);

  const handleAddToCart = () => {
    const info = selectedVariant
      ? `${product.name} - ${selectedVariant.size} (R$ ${selectedVariant.price.toFixed(2).replace('.', ',')})`
      : `${product.name} (R$ ${product.price?.toFixed(2).replace('.', ',')})`;
    console.log(`Adicionando ${info} ao carrinho`);
    // TODO: Implementar lógica do carrinho
  };

  const shareText = encodeURIComponent(
    selectedVariant
      ? `Olha esse açaí incrível: ${product.name} (${selectedVariant.size}) por R$${selectedVariant.price.toFixed(2).replace('.', ',')} na Kero Açaí!`
      : `Olha esse açaí incrível: ${product.name} por R$${product.price?.toFixed(2).replace('.', ',')} na Kero Açaí!`
  );
  const shareUrl = encodeURIComponent(window.location.origin + '/cardapio');

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
        <div className="flex flex-wrap gap-2 justify-center items-center mb-1">
          {product.vegan && (
            <Badge variant="secondary" className="bg-green-200 text-green-900 border-green-400 uppercase font-bold text-xs">Vegano</Badge>
          )}
          {typeof product.calories === 'number' && (
            <span className="text-xs text-acai-700 bg-acai-100 rounded px-2 py-0.5 font-semibold" aria-label="Calorias">{product.calories} kcal</span>
          )}
        </div>
        <p className="text-sm text-acai-900 leading-relaxed font-medium" style={{filter: 'contrast(1.2)'}}> {/* Contraste alto */}
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
        {/* Avaliações */}
        <div className="flex items-center justify-center gap-1 mt-2" aria-label="Avaliação do produto">
          {product.rating && (
            <span className="text-yellow-500 font-bold flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 mr-1" aria-hidden="true" />
              {product.rating.toFixed(1)}
            </span>
          )}
          {product.reviews && (
            <span className="text-xs text-acai-600 ml-1">({product.reviews} avaliações)</span>
          )}
        </div>
        {/* Vídeo de preparo */}
        {product.videoUrl && (
          <div className="mt-3 rounded-lg overflow-hidden aspect-video border-2 border-acai-100 shadow">
            <iframe
              src={product.videoUrl}
              title={`Vídeo de preparo de ${product.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-40"
              aria-label={`Vídeo de preparo de ${product.name}`}
            />
          </div>
        )}
        {/* Botões de compartilhamento */}
        <div className="flex justify-center gap-2 mt-2" aria-label="Compartilhar produto">
          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no WhatsApp"
            className="rounded-full bg-green-100 hover:bg-green-200 p-2 text-green-700 shadow"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no Facebook"
            className="rounded-full bg-blue-100 hover:bg-blue-200 p-2 text-blue-700 shadow"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={`https://www.instagram.com/keroacai_delivery/`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Instagram da Kero Açaí"
            className="rounded-full bg-pink-100 hover:bg-pink-200 p-2 text-pink-700 shadow"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        {/* Se houver variants, mostrar seleção de tamanho/preço */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-4">
            <label htmlFor={`variant-${product.id}`} className="block text-acai-700 font-semibold mb-1">Tamanho</label>
            <select
              id={`variant-${product.id}`}
              value={selectedVariant?.size}
              onChange={e => setSelectedVariant(product.variants?.find(v => v.size === e.target.value))}
              className="w-full rounded-lg border border-acai-200 px-4 py-2 text-acai-800 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
              aria-label="Selecionar tamanho"
            >
              {product.variants.map((variant, idx) => (
                <option key={idx} value={variant.size}>
                  {variant.size} - {variant.description} - R$ {variant.price.toFixed(2).replace('.', ',')}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Se não houver variants, mostrar preço único */}
        {!product.variants && product.price && (
          <p className="text-3xl font-bold text-acai-800">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        )}
        <Button 
          onClick={handleAddToCart}
          className="w-full gradient-acai hover:opacity-90 transition-all text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <Plus className="w-5 h-5 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

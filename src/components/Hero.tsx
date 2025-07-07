
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Star, Heart, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-acai-900 via-acai-800 to-acai-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pink-400/20 rounded-full animate-float" />
      <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300/15 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400/15 rounded-full animate-float delay-500" />
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-float delay-300" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Açaí 100% Natural e Cremoso</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            O açaí mais
            <span className="block text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 bg-clip-text">
              autêntico da cidade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Feito com polpa pura de açaí e os melhores complementos. 
            Saboreie a tradição amazônica com entrega expressa!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-acai-800 hover:bg-purple-50 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 text-lg"
            >
              <Heart className="mr-3 w-5 h-5 text-pink-500" />
              Peça Agora
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <Truck className="w-6 h-6 text-yellow-300" />
              <div className="text-left">
                <div className="font-bold text-yellow-300">Frete Grátis</div>
                <div className="text-sm text-purple-200">acima de R$ 25</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-3xl font-bold text-yellow-300">30min</div>
              <div className="text-sm text-purple-200">Entrega rápida</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2" />
              <div className="text-3xl font-bold text-pink-300">100%</div>
              <div className="text-sm text-purple-200">Natural</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl">
              <Star className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <div className="text-3xl font-bold text-yellow-300">5★</div>
              <div className="text-sm text-purple-200">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            O melhor açaí da cidade
            <span className="block text-yellow-300">direto na sua casa!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto">
            Açaí fresquinho, cremoso e delicioso com entrega rápida em até 30 minutos. 
            Peça agora e saboreie a tradição!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Ver Cardápio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-2 text-yellow-300">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">Frete Grátis acima de R$ 25</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">30min</div>
              <div className="text-sm text-purple-200">Entrega rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-purple-200">Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5★</div>
              <div className="text-sm text-purple-200">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;

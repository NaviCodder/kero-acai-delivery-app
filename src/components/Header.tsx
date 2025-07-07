
import { ShoppingCart, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-acai-200/30 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 relative flex items-center justify-center">
                <img 
                  src="/lovable-uploads/734fe34d-c4ac-487b-9929-d25d8681f439.png" 
                  alt="Kero Açaí Logo" 
                  className="w-full h-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Kero Açaí</h1>
                <p className="text-xs text-acai-600/70">Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm text-acai-700">
            <div className="flex items-center space-x-2 bg-gradient-acai-light rounded-lg px-3 py-2">
              <MapPin className="w-4 h-4 text-acai-700" />
              <span className="font-medium">Entrega em 30min</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-acai-light rounded-lg px-3 py-2">
              <Clock className="w-4 h-4 text-acai-700" />
              <span className="font-medium">Aberto até 23h</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="relative border-acai-300 hover:bg-gradient-acai-light text-acai-700 font-medium shadow-md"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Carrinho</span>
              <span className="absolute -top-2 -right-2 gradient-acai text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

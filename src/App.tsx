import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cardapio from "./pages/Cardapio";
import Promocoes from "./pages/Promocoes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Delivery from "./pages/Delivery";
import Blog from "./pages/Blog";
// Página de busca (placeholder)
const Busca = () => <div className="min-h-screen flex items-center justify-center text-2xl text-acai-700">Em breve: busca de produtos!</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/menu" element={<Cardapio />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/busca" element={<Busca />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

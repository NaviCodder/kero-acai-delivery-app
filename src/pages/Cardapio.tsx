import Header from "@/components/Header";

const Cardapio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-acai-800 mb-6 text-center">Cardápio</h2>
        <p className="text-acai-600 max-w-2xl mx-auto text-center mb-8">Explore nosso cardápio completo de açaís, bowls, toppings e opções veganas, kids e luxuosas.</p>
        {/* Filtros e grid de produtos serão implementados aqui */}
        <div className="text-center text-acai-400">(Em breve: filtros e grid de produtos!)</div>
      </main>
    </div>
  );
};

export default Cardapio; 
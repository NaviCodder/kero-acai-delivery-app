import Header from "@/components/Header";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-acai-800 mb-8 text-center">Sobre a Kero Açaí</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Nossa História</h2>
          <p className="text-acai-700 leading-relaxed">A Kero Açaí nasceu da paixão por oferecer o verdadeiro <strong>açaí cremoso</strong> e fresco, direto da Amazônia para Capão da Canoa, Capão Novo e Xangri-lá. Valorizamos ingredientes naturais, fornecedores locais e o sabor autêntico do açaí brasileiro.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Ingredientes Frescos e Selecionados</h2>
          <p className="text-acai-700 leading-relaxed">Trabalhamos apenas com <strong>açaí puro</strong>, frutas frescas, granola artesanal e opções veganas. Nosso compromisso é entregar qualidade e saúde em cada bowl.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Rede Local e Comunidade</h2>
          <p className="text-acai-700 leading-relaxed">Apoiamos produtores locais e promovemos ações sociais na região. Cada pedido fortalece nossa comunidade e incentiva o consumo consciente.</p>
        </section>
      </main>
    </div>
  );
};

export default Sobre; 
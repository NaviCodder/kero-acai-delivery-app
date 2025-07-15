import Header from "@/components/Header";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-acai-800 mb-8 text-center">Blog Kero Açaí</h1>
        <article className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-acai-700 mb-4">Benefícios do Açaí para Energia Diária</h2>
          <img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop&crop=center" alt="Bowl de açaí cremoso com morango e granola da Kero Açaí" className="rounded-lg mb-4 w-full h-64 object-cover" loading="lazy" />
          <p className="text-acai-700 leading-relaxed mb-2">O <strong>açaí</strong> é uma fruta típica da Amazônia, conhecida por seu alto valor energético e antioxidante. Ideal para quem busca mais disposição no dia a dia!</p>
          <ul className="list-disc pl-6 text-acai-700 mb-2">
            <li>Fonte de energia natural</li>
            <li>Rico em antioxidantes</li>
            <li>Ajuda na recuperação muscular</li>
            <li>Opção saudável para lanches</li>
          </ul>
          <p className="text-acai-700">Experimente nosso <strong>açaí delivery</strong> em Capão da Canoa e região. Peça já e sinta a diferença!</p>
        </article>
      </main>
    </div>
  );
};

export default Blog; 
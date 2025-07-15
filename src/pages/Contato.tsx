import Header from "@/components/Header";

const Contato = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-acai-800 mb-8 text-center">Fale com a Kero Açaí</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Formulário de Contato</h2>
          <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4" aria-label="Formulário de contato">
            <label htmlFor="nome" className="font-semibold text-acai-800">Nome</label>
            <input id="nome" name="nome" type="text" required className="rounded border border-acai-200 px-3 py-2 focus:ring-2 focus:ring-green-300" aria-required="true" />
            <label htmlFor="email" className="font-semibold text-acai-800">E-mail</label>
            <input id="email" name="email" type="email" required className="rounded border border-acai-200 px-3 py-2 focus:ring-2 focus:ring-green-300" aria-required="true" />
            <label htmlFor="mensagem" className="font-semibold text-acai-800">Mensagem</label>
            <textarea id="mensagem" name="mensagem" required rows={4} className="rounded border border-acai-200 px-3 py-2 focus:ring-2 focus:ring-green-300" aria-required="true" />
            <button type="submit" className="bg-gradient-to-r from-acai-700 to-green-400 text-white font-bold py-3 rounded-lg shadow hover:scale-105 transition-transform mt-2">Enviar</button>
          </form>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Nossos Contatos</h2>
          <p className="text-acai-700 mb-1">Telefone: <a href="tel:+5551999999999" className="text-green-700 font-bold">(51) 99999-9999</a></p>
          <p className="text-acai-700 mb-1">WhatsApp: <a href="https://wa.me/5551999999999" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold">(51) 99999-9999</a></p>
          <p className="text-acai-700">E-mail: <a href="mailto:contato@keroacai.com" className="text-green-700 font-bold">contato@keroacai.com</a></p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-acai-700 mb-2">Onde Estamos</h2>
          <div className="rounded-lg overflow-hidden shadow border-2 border-acai-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0000000000005!2d-50.00000000000001!3d-29.750000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2Fw4W8gZGEgQ2Fub2EgLSBLZXJvIMOBY2Fpw6k!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Kero Açaí"
              aria-label="Mapa da localização da Kero Açaí"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contato; 
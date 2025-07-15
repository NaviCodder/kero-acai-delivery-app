import Header from "@/components/Header";
import { useState } from "react";

const cidades = [
  { nome: "Capão da Canoa", frete: 8 },
  { nome: "Capão Novo", frete: 10 },
  { nome: "Xangri-lá", frete: 12 },
];

const Delivery = () => {
  const [cidade, setCidade] = useState(cidades[0].nome);
  const [subtotal, setSubtotal] = useState(30); // valor simulado do pedido
  const frete = cidades.find(c => c.nome === cidade)?.frete || 0;
  const total = subtotal + frete;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-acai-800 mb-6 text-center">Delivery</h2>
        <p className="text-acai-600 max-w-2xl mx-auto text-center mb-8">Escolha sua cidade para calcular o frete do seu pedido:</p>
        <div className="mb-6">
          <label htmlFor="cidade" className="block text-acai-700 font-medium mb-2">Cidade de entrega</label>
          <select
            id="cidade"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            className="w-full rounded-lg border border-acai-200 px-4 py-2 text-acai-800 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
          >
            {cidades.map(c => (
              <option key={c.nome} value={c.nome}>{c.nome}</option>
            ))}
          </select>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-acai-700">Subtotal dos produtos</span>
            <span className="font-medium text-acai-900">R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-acai-700">Frete ({cidade})</span>
            <span className="font-medium text-acai-900">R$ {frete.toFixed(2)}</span>
          </div>
          <div className="border-t border-acai-100 my-2"></div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-green-700">R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-acai-700 to-green-400 text-white font-bold py-3 rounded-lg shadow hover:scale-105 transition-transform">Finalizar Pedido</button>
      </main>
    </div>
  );
};

export default Delivery; 
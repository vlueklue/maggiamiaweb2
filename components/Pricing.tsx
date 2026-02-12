
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-yellow-50" id="precios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-950">Elige tu Plan MaggiaMia</h2>
          <p className="text-purple-800/70 italic">Dos opciones diseñadas para cada familia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {/* Plan PRO */}
          <div className="glass-card rounded-3xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-500 flex flex-col bg-white shadow-sm">
            <div className="p-8 bg-purple-50 border-b border-purple-100 text-center">
              <span className="font-montserrat text-xs font-black tracking-widest text-purple-400 uppercase">Plan</span>
              <h3 className="text-4xl font-black mt-2 text-purple-900 italic">PRO</h3>
              <p className="text-purple-800/60 mt-1 font-medium">Para amantes de la lectura</p>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-purple-400 text-2xl font-bold">$</span>
                <span className="text-5xl font-black text-purple-950">110</span>
                <span className="text-purple-800/40 font-medium">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-purple-950/80 font-medium">
                  <span className="text-yellow-500 font-black">✓</span> 200 hojas de para crear cuentos nuevos
                </li>
                <li className="flex items-center gap-3 text-purple-950/80 font-medium">
                  <span className="text-yellow-500 font-black">✓</span> Biblioteca ilimitada de historias
                </li>
                <li className="flex items-center gap-3 text-purple-950/80 font-medium">
                  <span className="text-yellow-500 font-black">✓</span> Cuentos ilustrados personalizados
                </li>
                <li className="flex items-center gap-3 text-purple-950/80 font-medium">
                  <span className="text-yellow-500 font-black">✓</span> Selección de valores educativos
                </li>
              </ul>
            </div>
            <div className="p-8 pt-0">
              <button className="font-montserrat w-full py-4 bg-purple-50 hover:bg-purple-100 text-purple-900 font-black rounded-2xl border-2 border-purple-200 transition-all active:scale-95">
                Elegir Plan PRO
              </button>
            </div>
          </div>

          {/* Plan ULTRA */}
          <div className="glass-card rounded-3xl overflow-hidden border-4 border-purple-700 shadow-2xl flex flex-col relative scale-105 z-10 bg-white">
            <div className="absolute top-4 right-4 bg-purple-700 text-yellow-50 text-xs font-black px-3 py-1 rounded-full uppercase font-montserrat tracking-tighter">Más Popular</div>
            <div className="p-8 bg-yellow-400/20 border-b border-purple-100 text-center">
              <span className="font-montserrat text-xs font-black tracking-widest text-purple-700 uppercase">Plan</span>
              <h3 className="text-4xl font-black mt-2 text-purple-950 italic">ULTRA</h3>
              <p className="text-purple-800/70 mt-1 font-medium italic">La experiencia completa mágica</p>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-purple-700 text-2xl font-bold">$</span>
                <span className="text-5xl font-black text-purple-950">190</span>
                <span className="text-purple-800/40 font-medium">/mes</span>
              </div>
              <p className="text-purple-700 font-black mb-4 text-center text-sm uppercase tracking-widest">Todo lo de PRO, más:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-purple-950 font-bold">
                  <span className="text-purple-700">★</span> Audiocuentos ilimitados
                </li>
                <li className="flex items-center gap-3 text-purple-950 font-bold">
                  <span className="text-purple-700">★</span> Impresión PDF sin límite
                </li>
                <li className="flex items-center gap-3 text-purple-950 font-bold">
                  <span className="text-purple-700">★</span> Historias con animación
                </li>
                <li className="flex items-center gap-3 text-purple-950 font-bold">
                  <span className="text-purple-700">★</span> Soporte prioritario 24/7
                </li>
              </ul>
            </div>
            <div className="p-8 pt-0">
              <button className="font-montserrat w-full py-5 bg-purple-700 hover:bg-purple-800 text-yellow-50 font-black rounded-2xl shadow-lg transition-all active:scale-95 text-lg">
                Elegir Plan ULTRA
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-purple-900/60 font-bold uppercase tracking-tighter font-montserrat">
          <div className="flex items-center gap-2">🛡️ Cancela cuando quieras</div>
          <div className="flex items-center gap-2">🔄 Garantía 30 días</div>
          <div className="flex items-center gap-2">💳 Pago 100% seguro</div>
        </div>
      </div>
    </section>
  );
};

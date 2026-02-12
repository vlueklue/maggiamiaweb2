
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-yellow-50">
      {/* Background with story-mixed feel - Updated with magical illustration vibe */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1510172951991-859a69c76251?auto=format&fit=crop&q=80&w=1920" 
          alt="Magical Storybook Illustration"
          className="w-full h-full object-cover opacity-20 blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/80 via-yellow-50/40 to-yellow-50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="font-montserrat inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-purple-100 text-purple-700 rounded-full border border-purple-200">
          La App #1 de Cuentos Infantiles
        </span>
        
        {/* Se añadió py-4 y leading-[1.3] para asegurar que las colas de las 'g' (descenders) no se corten al usar bg-clip-text e italic */}
        <h1 className="text-6xl md:text-8xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-950 to-purple-800 leading-[1.3] italic py-4 px-2">
          MaggiaMia
        </h1>
        
        <p className="text-2xl md:text-3xl font-light italic mb-12 text-purple-900 max-w-2xl mx-auto leading-relaxed">
          "Donde cada niño es el protagonista de su propia historia mágica"
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="glass-card px-8 py-4 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-500 float-animation bg-white/60">
            <p className="text-lg font-bold text-purple-700">Cuentos Únicos</p>
          </div>
          <div className="glass-card px-8 py-4 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-500 float-animation [animation-delay:1s] bg-white/60">
            <p className="text-lg font-bold text-purple-700">Momentos Especiales</p>
          </div>
          <div className="glass-card px-8 py-4 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-500 float-animation [animation-delay:2s] bg-white/60">
            <p className="text-lg font-bold text-purple-700">Magia Real</p>
          </div>
        </div>

        <button className="font-montserrat px-12 py-5 bg-purple-700 hover:bg-purple-800 text-yellow-50 text-xl font-black rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-500/30 active:scale-95 border-2 border-purple-600/20 uppercase tracking-tight">
          Descubre la Magia Ahora
        </button>
      </div>

      {/* Floating Book Visual Representation - Updated with the pop-up book illustration feel */}
      <div className="mt-24 relative max-w-5xl w-full px-4">
        <div className="aspect-[16/9] glass-card rounded-3xl overflow-hidden border-4 border-purple-100/50 group hover:border-purple-400/30 transition-all duration-700 shadow-2xl bg-white/40">
          <img 
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1600" 
            alt="Libro de Aventuras" 
            className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-purple-700 rounded-full flex items-center justify-center animate-pulse cursor-pointer shadow-[0_0_40px_rgba(88,28,135,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-50 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

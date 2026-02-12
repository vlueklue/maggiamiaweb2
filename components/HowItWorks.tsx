
import React from 'react';

const steps = [
  { id: 1, title: 'Crear Idea', description: 'Escribe tu propia idea o elige de nuestra biblioteca de historias.', color: 'bg-amber-400' },
  { id: 2, title: 'Personalizar', description: 'Añade el nombre del niño, su apariencia y características.', color: 'bg-purple-400' },
  { id: 3, title: 'Valores', description: 'Selecciona los valores educativos y temas que quieres transmitir.', color: 'bg-yellow-400' },
  { id: 4, title: '¡Disfrutar!', description: 'Genera y disfruta tu cuento ilustrado único en segundos.', color: 'bg-purple-600' },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-yellow-100/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-950">¿Cómo Funciona?</h2>
          <p className="text-purple-800/70 text-lg italic">4 pasos simples para crear magia real</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.id % 2 === 0 ? 'bg-purple-700 text-yellow-50' : 'bg-yellow-400 text-purple-900'} flex items-center justify-center text-2xl font-black rounded-full z-10 shadow-lg group-hover:scale-110 transition-transform`}>
                {step.id}
              </div>
              <div className="glass-card p-8 pt-12 rounded-2xl h-full border border-purple-100 hover:border-purple-300 transition-all duration-300 bg-white/60">
                <h3 className="text-xl font-black mb-4 text-purple-900 group-hover:text-purple-600 transition-colors italic">{step.title}</h3>
                <p className="text-purple-800/80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-2 bg-purple-900/5 rounded-full text-purple-900 border border-purple-900/10 font-medium">
            <span className="w-2 h-2 bg-purple-700 rounded-full animate-ping"></span>
            ¡Todo el proceso toma menos de 2 minutos!
          </p>
        </div>
      </div>
    </section>
  );
};

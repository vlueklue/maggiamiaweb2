
import React from 'react';

const features = [
  { 
    title: 'Cuentos Ilustrados', 
    desc: 'Historias completas con ilustraciones mágicas que capturan la imaginación.',
    icon: '🎨'
  },
  { 
    title: 'Biblioteca Personal', 
    desc: 'Guarda todos los cuentos creados en tu biblioteca privada para siempre.',
    icon: '📚'
  },
  { 
    title: 'Audiocuentos', 
    desc: 'Escucha las historias sin pantallas, perfecto para momentos de calma.',
    icon: '🎧'
  },
  { 
    title: 'Impresión PDF', 
    desc: 'Descarga e imprime los cuentos para leerlos abrazados, como antes.',
    icon: '📄'
  },
  { 
    title: 'Adaptado por Edad', 
    desc: 'Cuentos diseñados para edades de 3 a 11 años con lenguaje apropiado.',
    icon: '🧒'
  },
  { 
    title: 'Valores Educativos', 
    desc: 'Elige entre empatía, autoestima, respeto y más para cada historia.',
    icon: '🌟'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-950">Características que Encantan</h2>
          <p className="text-purple-800/70 italic">Magia diseñada para toda la familia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl group hover:bg-white transition-all duration-300 border-purple-50 shadow-sm hover:shadow-md">
              <div className="text-4xl mb-6 scale-110 group-hover:scale-125 transition-transform duration-300 inline-block">{f.icon}</div>
              <h3 className="text-xl font-black mb-3 text-purple-800 italic">{f.title}</h3>
              <p className="text-purple-950/70 leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="font-montserrat mt-12 bg-purple-100 border border-purple-200 py-4 px-8 rounded-full text-center text-purple-700 font-bold">
          ✨ Nuevas historias y funciones añadidas regularmente
        </div>
      </div>
    </section>
  );
};

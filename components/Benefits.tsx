
import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-yellow-100 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-purple-950">Beneficios para el Desarrollo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-2xl border-l-8 border-l-purple-700 bg-white/70">
              <h3 className="text-xl font-black mb-4 text-purple-900 italic">Desarrollo Cognitivo</h3>
              <ul className="space-y-2 text-purple-950 font-medium">
                <li>✓ Mejora la comprensión lectora</li>
                <li>✓ Expande el vocabulario</li>
                <li>✓ Desarrolla pensamiento crítico</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-2xl border-l-8 border-l-yellow-500 bg-white/70">
              <h3 className="text-xl font-black mb-4 text-purple-900 italic">Creatividad e Imaginación</h3>
              <ul className="space-y-2 text-purple-950 font-medium">
                <li>✓ Estimula la imaginación al máximo</li>
                <li>✓ Fomenta el pensamiento creativo</li>
                <li>✓ Inspira a crear sus propias historias</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Large Highlight */}
          <div className="md:col-span-7 space-y-8">
            <div className="glass-card p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden group border-purple-200 bg-white/50 shadow-inner">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-purple-900">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6 text-purple-800 italic">Empatía y Habilidades Sociales</h3>
              <p className="text-xl text-purple-950/80 leading-relaxed mb-8">
                Al ser el protagonista, el niño aprende a identificarse con diferentes emociones y situaciones, desarrollando mayor empatía hacia los demás.
              </p>
              <div className="p-6 bg-purple-700/5 rounded-xl border border-purple-200 italic text-purple-900 font-medium">
                "Los niños que leen cuentos personalizados muestran un 40% más de empatía en interacciones sociales."
              </div>
            </div>
          </div>
        </div>

        {/* Center Bottom Card */}
        <div className="mt-12 glass-card p-10 rounded-3xl text-center max-w-3xl mx-auto border-4 border-yellow-400/30 bg-white/80 shadow-lg">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-2xl font-black mb-4 text-purple-900">Recuerdos Familiares Duraderos</h3>
          <p className="text-purple-950/70 leading-relaxed">
            Cada cuento se convierte en un tesoro familiar, creando momentos de conexión que los niños recordarán toda su vida.
          </p>
        </div>
      </div>
    </section>
  );
};

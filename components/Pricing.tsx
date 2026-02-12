import React, { useState } from 'react';
import { Check, Star, Sparkles, Zap, ShieldCheck, Clock, CreditCard } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = {
    pro: {
      price: billingCycle === 'monthly' ? 110 : 1122,
      sheets: 180,
      features: [
        "180 hojas para crear cuentos nuevos por mes",
        "Biblioteca ilimitada de historias",
        "Cuentos ilustrados personalizados",
        "Selección de valores educativos",
        "Audiocuentos incluidos",
        "Impresión PDF sin límite"
      ]
    },
    ultra: {
      price: billingCycle === 'monthly' ? 190 : 1900,
      sheets: 350,
      features: [
        "350 hojas para crear cuentos nuevos por mes",
        "Todas las funciones del Plan Pro",
        "Acceso prioritario a nuevas funciones",
        "Soporte prioritario 24/7",
        "Sin costo adicional por actualizaciones"
      ]
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-yellow-50/50 to-white min-h-screen" id="precios">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-purple-950 tracking-tight">
            Elige tu Plan <span className="text-purple-600">MaggiaMia</span>
          </h2>
          <p className="text-purple-800/60 text-lg font-medium">Magia a medida para cada familia</p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-purple-900' : 'text-purple-300'}`}>Mensual</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-purple-100 rounded-full p-1 transition-colors duration-300"
            >
              <div className={`w-6 h-6 bg-purple-600 rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${billingCycle === 'annual' ? 'text-purple-900' : 'text-purple-300'}`}>Anual</span>
              <span className="bg-yellow-400 text-purple-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Ahorra 15%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan PRO */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white border border-purple-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-purple-900 mb-2">PRO</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-purple-950">$</span>
                  <span className="text-5xl font-black text-purple-950 tracking-tighter">{plans.pro.price}</span>
                  <span className="text-purple-400 font-medium">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plans.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-purple-900/80 text-sm font-semibold">
                    <div className="mt-0.5 w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {i >= 4 ? <Star className="w-3 h-3 text-purple-600 fill-purple-600" /> : <Check className="w-3 h-3 text-purple-600 stroke-[3]" />}
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-black rounded-2xl border-2 border-purple-100 hover:border-purple-600 transition-all duration-300 active:scale-95 shadow-sm">
                Comenzar ahora
              </button>
            </div>
          </div>

          {/* Plan ULTRA */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white border-2 border-purple-600 rounded-3xl p-8 shadow-2xl transform md:scale-105 active:scale-[1.02] transition-all duration-500">
              <div className="absolute -top-4 right-8 bg-purple-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Más Recomendado</div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-black text-purple-900">ULTRA</h3>
                  <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-purple-950">$</span>
                  <span className="text-5xl font-black text-purple-950 tracking-tighter">{plans.ultra.price}</span>
                  <span className="text-purple-400 font-medium">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plans.ultra.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-purple-950 text-sm font-bold">
                    <div className="mt-0.5 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-200">
                      <Zap className="w-3 h-3 text-white fill-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl shadow-xl shadow-purple-200 transition-all duration-300 active:scale-95 text-lg">
                Elegir Experiencia Ultra
              </button>
            </div>
          </div>
        </div>

        {/* trust badges */}
        <div className="mt-16 pt-10 border-t border-purple-50 flex flex-wrap justify-center gap-8 text-[11px] text-purple-900/40 font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pago 100% Seguro</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Cancela en cualquier momento</div>
          <div className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Garantía de Satisfacción</div>
        </div>
      </div>
    </section>
  );
};

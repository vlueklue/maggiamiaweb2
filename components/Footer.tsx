
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 relative overflow-hidden bg-yellow-50 border-t border-purple-100">
      {/* Background flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl font-black mb-8 text-purple-950 italic">Comienza la Aventura Hoy</h2>
        <p className="text-xl text-purple-900/80 mb-16 max-w-2xl mx-auto leading-relaxed italic">
          Descubre un mundo donde la imaginación no tiene límites y cada historia es un tesoro único para tu familia.
        </p>

        {/* Updated Footer Bottom Section with Socials and Email */}
        <div className="pt-12 border-t border-purple-100 grid grid-cols-1 md:grid-cols-3 gap-8 items-center font-montserrat">
          <p className="text-purple-900 font-bold text-lg">contacto@maggiamia.com</p>
          
          <div className="flex justify-center gap-4">
            {/* Instagram */}
            <a href="#" className="w-12 h-12 bg-purple-900 text-yellow-50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-12 h-12 bg-purple-900 text-yellow-50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-12 h-12 bg-purple-900 text-yellow-50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-12 h-12 bg-purple-900 text-yellow-50 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all shadow-md group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>

          <p className="text-purple-950/40 text-sm font-medium">© 2026 MaggiaMia. Todos los derechos reservados.</p>
        </div>

        <div className="font-montserrat mt-16 py-5 px-10 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-purple-950 rounded-full inline-flex items-center gap-3 font-black shadow-lg border-2 border-yellow-200 uppercase tracking-tighter text-base">
          💖 PORQUE CADA NIÑO MERECE SER EL HÉROE DE SU PROPIA HISTORIA
        </div>
      </div>
    </footer>
  );
};

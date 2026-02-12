
import React from 'react';

export const AppLauncher: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button 
        onClick={() => window.location.href = '#'}
        className="font-montserrat group relative flex items-center gap-2 px-6 py-3 bg-purple-700 text-yellow-100 font-bold rounded-full shadow-[0_4px_20px_rgba(88,28,135,0.3)] hover:shadow-[0_8px_30px_rgba(88,28,135,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14H8a2 2 0 00-2 2 2 2 0 002 2h4a2 2 0 002-2 2 2 0 00-2-2z" />
        </svg>
        Ir a la App
        <div className="absolute -inset-0.5 bg-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      </button>
    </div>
  );
};

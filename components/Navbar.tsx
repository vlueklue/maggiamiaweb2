import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Rocket } from 'lucide-react';

export const Navbar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-100">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent ml-1">
                                Maggiamia
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-6 mr-4 border-r border-gray-100 pr-8">
                            <Link
                                to="/"
                                className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/') ? 'text-purple-600' : 'text-gray-500 hover:text-purple-600'
                                    }`}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/precios"
                                className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive('/precios') ? 'text-purple-600' : 'text-gray-500 hover:text-purple-600'
                                    }`}
                            >
                                Precios
                            </Link>
                        </div>

                        <button
                            onClick={() => window.location.href = '#'}
                            className="group relative flex items-center gap-2 px-6 py-3 bg-purple-700 text-yellow-100 font-black rounded-full shadow-lg hover:shadow-purple-200 transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
                        >
                            <Rocket className="w-4 h-4 text-yellow-300" />
                            <span className="hidden sm:inline">Ir a la App</span>
                            <span className="sm:hidden">App</span>
                            <div className="absolute -inset-0.5 bg-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Maggiamia
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                                }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/precios"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/precios')
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                                    : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                                }`}
                        >
                            Precios
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

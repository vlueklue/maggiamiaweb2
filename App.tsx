import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { AppLauncher } from './components/AppLauncher';
import { Navbar } from './components/Navbar';

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <HowItWorks />
    <Features />
    <Benefits />
  </>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-purple-600 selection:text-yellow-100">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/precios" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import ControlPanels from './pages/services/ControlPanels';
import Programming from './pages/services/Programming';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentPath.startsWith('#/products/')) {
      const productId = currentPath.replace('#/products/', '');
      return <ProductDetail productId={productId} />;
    }

    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/expertise':
        return <Expertise />;
      case '#/services':
        return <Services />;
      case '#/services/control-panels':
        return <ControlPanels />;
      case '#/services/programming':
        return <Programming />;
      case '#/products':
        return <Products />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="py-8 px-6 border-t border-emerald-900/30 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold tracking-widest">SGA</span>
            <span className="text-gray-500 text-sm">| INDUSTRIAL AUTOMATIONS</span>
          </div>
          <div className="text-gray-500 text-xs font-mono">
            EST. HYDERABAD // DETERMINISTIC CONTROL SYSTEMS // ISA-95 COMPLIANT
          </div>
          <div className="flex gap-6 text-xs font-mono text-emerald-400">
            <a href="#/privacy" className="hover:text-white transition-colors">SECURE_PROTOCOL</a>
            <a href="#/terms" className="hover:text-white transition-colors">OPERATIONAL_TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

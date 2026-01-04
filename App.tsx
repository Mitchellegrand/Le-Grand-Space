
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Zap,
} from 'lucide-react';
import { PageId, NavItem } from './types';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 bg-slate-100 overflow-hidden">
        {/* SVG Recreation of the user's logo for sharp rendering */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-900 fill-current">
            <path d="M50 20 L90 70 L50 70 Q 70 45 50 20 Z" />
        </svg>
    </div>
    <div className="flex flex-col leading-none">
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-slate-400">Le Grand</span>
        <span className="text-lg font-serif italic font-bold tracking-tight text-white">Space</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigateTo={navigateTo} />;
      case 'services': return <Services />;
      case 'how-it-works': return <HowItWorks />;
      case 'pricing': return <Pricing navigateTo={navigateTo} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="cursor-pointer group" 
            onClick={() => navigateTo('home')}
          >
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-white ${currentPage === item.id ? 'text-white border-b border-white/40 pb-1' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-white text-slate-950 px-6 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold hover:bg-slate-200 transition-all"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-slate-950 z-40 flex flex-col items-center justify-center space-y-10 page-transition">
            <Logo className="mb-8" />
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`text-xl font-serif italic ${currentPage === item.id ? 'text-white' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-white text-slate-950 px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-bold"
            >
              Get Started
            </button>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-600 mt-4 uppercase text-[10px] tracking-widest">Close</button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <Logo className="mb-8" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                Engineering conversion-focused digital infrastructure for boutique services and expert trades. We prioritize results over vanity.
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Studio</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('services')} className="text-slate-500 hover:text-white text-xs transition-colors">Services</button></li>
                <li><button onClick={() => navigateTo('how-it-works')} className="text-slate-500 hover:text-white text-xs transition-colors">Process</button></li>
                <li><button onClick={() => navigateTo('pricing')} className="text-slate-500 hover:text-white text-xs transition-colors">Investment</button></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Company</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('about')} className="text-slate-500 hover:text-white text-xs transition-colors">Our Story</button></li>
                <li><button onClick={() => navigateTo('contact')} className="text-slate-500 hover:text-white text-xs transition-colors">Contact</button></li>
                <li><a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Legal</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Contact</h4>
              <p className="text-slate-400 text-xs mb-6 font-light italic">Currently accepting 2 new projects for next month.</p>
              <a 
                href="mailto:hello@legrandspace.com.au"
                className="text-white text-sm border-b border-white/20 pb-1 hover:border-white transition-all font-medium"
              >
                hello@legrandspace.com.au
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-slate-600 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <p>&copy; {new Date().getFullYear()} Le Grand Space Studio.</p>
            <p className="mt-4 md:mt-0">Conversion Engineering for Service Professionals</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, Smartphone, Clock, Globe } from 'lucide-react';
import { PageId } from '../types';

interface HomeProps {
  navigateTo: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
              High-Performance Engineering
            </div>
            <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-10 leading-[1.05] tracking-tight">
              A website that works <br className="hidden md:block" />
              as hard as <span className="text-slate-400 underline decoration-slate-700 underline-offset-8">you do.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-16">
              Most websites are digital paperweights. We engineer lead-generation systems specifically for trades and service businesses that actually convert visitors into revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-white text-slate-950 px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-black hover:bg-slate-200 transition-all shadow-2xl shadow-white/5"
              >
                Request a Build
              </button>
              <button 
                onClick={() => navigateTo('pricing')}
                className="bg-slate-900/50 border border-white/10 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-black hover:bg-slate-800 transition-all"
              >
                View Investment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 py-12 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale">
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Blue Collar</span>
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Hospitality</span>
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Home Maintenance</span>
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Professional Services</span>
            <span className="text-xs uppercase tracking-[0.4em] font-bold">And More</span>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-white/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
               <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  alt="High end service" 
                  className="relative rounded-[2rem] aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-6 block">The Approach</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">Conversion is an <br /><span className="italic">architectural</span> choice.</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-12">
                We've moved beyond "design." Every font, button color, and layout structure we use is backed by data from over 140 successful local business launches. We don't guess—we engineer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Target className="w-5 h-5 text-white mb-4" />
                    <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2">Intent Mapping</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Directing every visitor toward your primary call to action with surgical precision.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Zap className="w-5 h-5 text-white mb-4" />
                    <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2">Performance Focus</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Sub-second load times that prevent potential customers from bouncing to competitors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">Built for Authority</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-light">We integrate premium features into every build as standard, ensuring your business looks like the market leader it is.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-12 bg-slate-950 border border-white/5 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all group">
              <div>
                <Smartphone className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif italic text-white mb-4">Mobile Dominance</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">Engineered for the 85% of local searches happening on mobile devices while customers are on the move.</p>
              </div>
            </div>
            <div className="p-12 bg-slate-950 border border-white/5 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all group">
              <div>
                <Globe className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif italic text-white mb-4">Local SEO Native</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">Hard-coded with local schema and semantic tagging so you rank in your specific suburbs from day one.</p>
              </div>
            </div>
            <div className="p-12 bg-slate-950 border border-white/5 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all group">
              <div>
                <Clock className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif italic text-white mb-4">14-Day Delivery</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">Our standardized engineering process allows us to ship a premium build in exactly two weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative p-16 md:p-24 bg-white rounded-[3rem] overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Logo className="w-96 h-96 scale-[5]" />
             </div>
             <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-serif text-slate-950 mb-8 leading-tight">Ready to double your <br /><span className="italic">enquiries?</span></h2>
                <p className="text-slate-600 mb-12 max-w-md mx-auto font-medium">
                  We only take on 2 new builds per month to maintain our engineering standards. Enquire today to secure your slot.
                </p>
                <button 
                    onClick={() => navigateTo('contact')}
                    className="bg-slate-950 text-white px-12 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-black hover:bg-slate-800 transition-all"
                >
                    Start a Project
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 bg-slate-900 overflow-hidden">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white fill-current">
              <path d="M50 20 L90 70 L50 70 Q 70 45 50 20 Z" />
          </svg>
      </div>
      <div className="flex flex-col leading-none text-left">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-slate-600">Le Grand</span>
          <span className="text-lg font-serif italic font-bold tracking-tight text-slate-900">Space</span>
      </div>
    </div>
);

export default Home;

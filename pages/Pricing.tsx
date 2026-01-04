
import React from 'react';
import { Check, ArrowRight, Zap, Shield, Activity, X } from 'lucide-react';
import { PageId } from '../types';

interface PricingProps {
  navigateTo: (page: PageId) => void;
}

const Pricing: React.FC<PricingProps> = ({ navigateTo }) => {
  return (
    <div className="page-transition pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Disruptive Header */}
        <div className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-6 block">The Industry Disruption</span>
          <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-10 leading-[1.05] tracking-tight max-w-4xl">
            Elite quality without the <span className="text-slate-500 line-through decoration-slate-700 decoration-4">$2,500</span> price tag.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Most agencies charge $2,500 minimum for basic builds to cover their overhead. We've replaced bloated agency costs with <strong className="text-white">AI-powered efficiency</strong>, delivering high-performance systems for a fraction of the cost.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Card */}
          <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Zap className="w-64 h-64 text-slate-950 scale-150 rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <span className="bg-slate-950 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">Core Engineering</span>
              </div>
              
              <div className="mb-12">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Investment Starts At</div>
                <div className="flex items-baseline">
                  <span className="text-8xl md:text-9xl font-serif italic font-bold text-slate-950 tracking-tighter">$800</span>
                  <span className="text-slate-500 text-sm font-bold ml-4 uppercase tracking-widest">Fixed One-Time</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                {[
                  "Custom Conversion Design",
                  "AI-Optimized Speed Stack",
                  "Mobile-Native Architecture",
                  "Local SEO Implementation",
                  "Lead-Gen Intent Mapping",
                  "14-Day Rapid Delivery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-slate-700 font-medium text-sm">
                    <Check className="w-4 h-4 text-slate-950 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigateTo('contact')}
                className="w-full bg-slate-950 text-white py-6 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl"
              >
                Secure My $800 Slot
              </button>
            </div>
          </div>

          {/* Side Card: Management */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Activity className="w-5 h-5 text-white opacity-50" />
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Elite Management</span>
              </div>
              
              <div className="mb-10">
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Monthly Upkeep From</div>
                <div className="flex items-baseline">
                  <span className="text-6xl font-serif italic font-bold text-white tracking-tighter">$35</span>
                  <span className="text-slate-500 text-xs font-bold ml-3 uppercase tracking-widest">/ Month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Premium Cloud Hosting",
                  "24/7 Uptime Monitoring",
                  "Weekly Security Patches",
                  "Unlimited Content Edits"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-400 text-xs font-light">
                    <div className="w-1 h-1 bg-white/20 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest text-center border-t border-white/5 pt-8">
                No Lock-In Contracts. Cancel Anytime.
              </p>
            </div>

            {/* Brag Comparison */}
            <div className="p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl">
              <h4 className="text-white font-serif italic text-lg mb-4">How we do it:</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Traditional agencies waste 60% of their billable hours on meetings, emails, and manual coding. We use proprietary <strong className="text-white font-medium">AI-powered workflows</strong> that automate the boilerplate, letting our elite engineers focus 100% of their time on your <span className="italic">conversion logic</span>. You get $2,500 value for $800.
              </p>
            </div>
          </div>
        </div>

        {/* The Contrast Section */}
        <div className="mt-32 pt-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl font-serif text-white mb-8 italic">The Disruption Factor</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2">The Agency Way</h5>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">High overheads, $2,500+ minimums, 6-week timelines, and junior developers doing the actual work.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-slate-950" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2">The Le Grand Way</h5>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">Disruptive $800 entry, AI-efficient build pipeline, 14-day launch, and elite engineering standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-12 rounded-[2rem] border border-white/5">
               <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Current Capacity</div>
               <div className="space-y-6">
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-bold uppercase tracking-tight">Active Builds</span>
                    <span className="text-slate-400">8 / 10</span>
                 </div>
                 <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-white"></div>
                 </div>
                 <p className="text-[10px] text-slate-500 italic">We strictly limit project volume to maintain our sub-$1k price point without sacrificing performance.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

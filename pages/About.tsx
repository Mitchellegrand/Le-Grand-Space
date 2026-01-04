
import React from 'react';
import { Target, TrendingUp, Zap, Hammer, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-transition py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="bg-indigo-600/10 text-indigo-500 inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              The Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 uppercase tracking-tight leading-none italic">
              Built for the builders. <br />Engineered for growth.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Le Grand Space was born out of a simple observation: Local businesses are being failed by the digital industry. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Big agencies charge "bloat" fees to cover their fancy offices, and DIY builders leave owners with a site that looks okay but generates zero business. We saw a gap for a <strong>lean, technical, results-focused</strong> partner who talks straight and delivers fast.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800">
                <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" />
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-tight">The Founder's Promise</p>
                <p className="text-slate-500 text-sm">No fluff. No waste. Just results.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Our values" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl">
                  <h4 className="text-2xl font-black text-white uppercase mb-2">Our Goal</h4>
                  <p className="text-indigo-100 text-sm">To provide affordable sites for those who are there for us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 border border-slate-800">
              <Target className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Radical Transparency</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We don't hide behind jargon. We tell you exactly what you need and what it costs. No surprises.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 border border-slate-800">
              <TrendingUp className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Obsessive Focus</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We only build for local services. We know the industry patterns that lead to conversion better than anyone else.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 border border-slate-800">
              <Zap className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Lean Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We optimize for speed and efficiency. Every project is handled with precision to meet our 14-day delivery goal.</p>
          </div>
        </div>

        {/* Culture / Team Section */}
        <div className="mt-32 border-t border-slate-900 pt-32">
          <div className="flex flex-col md:flex-row gap-20">
             <div className="flex-1">
                <h2 className="text-3xl font-black text-white uppercase mb-6">Built for results</h2>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
                    <span className="text-4xl font-black text-indigo-500">140+</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Websites Delivered</span>
                  </div>
                  <div className="flex items-center space-x-6 bg-slate-900/40 p-6 rounded-3xl border border-slate-800">
                    <span className="text-4xl font-black text-indigo-500">10k+</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Leads Generated</span>
                  </div>
                </div>
             </div>
             <div className="flex-[1.5]">
                <p className="text-2xl font-light text-slate-300 italic mb-8">
                  "Most local businesses are one high-performing website away from doubling their revenue. We provide the machine that makes it happen."
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                    <Hammer className="text-indigo-500 w-5 h-5" />
                    <span className="text-white text-xs font-bold uppercase">Trades Focus</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                    <Zap className="text-indigo-500 w-5 h-5" />
                    <span className="text-white text-xs font-bold uppercase">Agile Builds</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                    <Users className="text-indigo-500 w-5 h-5" />
                    <span className="text-white text-xs font-bold uppercase">Expert Team</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

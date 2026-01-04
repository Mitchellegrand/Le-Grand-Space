
import React from 'react';
import { Target, Search, Palette, Rocket, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: "Discovery & Goals",
      description: "We start with a 30-minute strategy call to understand your ideal customer, your high-margin services, and your business goals. No fluff, just a clear plan for your new site.",
      icon: <Search className="w-8 h-8" />
    },
    {
      id: '02',
      title: "Build & Optimise",
      description: "Our engineers build your conversion engine. We write lead-focused copy and design mobile-first layouts using our proprietary local-conversion frameworks.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      id: '03',
      title: "Review & Refine",
      description: "We walk you through the build. You give us the green light or suggest tweaks. We ensure every button works and every form fires correctly to your inbox.",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      id: '04',
      title: "Launch & Support",
      description: "We go live. We handle the DNS, the hosting, and the initial indexing. Then, we stay by your side with ongoing maintenance so you never have to worry about 'IT' again.",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  return (
    <div className="page-transition py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">The 14-Day Blueprint</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We've removed the bloated agency process. Here's how we get you from 'online ghost' to 'booking machine' in two weeks.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full text-center lg:text-left">
                  <div className="inline-block bg-indigo-600 text-white text-xs font-black px-4 py-1.5 rounded-md mb-6 uppercase tracking-widest">
                    Step {step.id}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight italic">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_4px_rgba(79,70,229,0.3)] flex items-center justify-center text-indigo-500">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block">
                  <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 border-dashed">
                    <p className="text-slate-500 font-medium italic">"The transparency was the best part. I knew exactly where we were at every stage."</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-40 text-center">
          <div className="bg-slate-900 border border-slate-800 p-16 rounded-[3rem] max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight italic">Ready for take off?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Our schedule fills up fast because of our speed. Lock in your build window today.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-xl shadow-indigo-600/20">
              Start Discovery Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

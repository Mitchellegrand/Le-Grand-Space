
import React from 'react';
// Added Sparkles to the imports
import { Target, Zap, Smartphone, Globe, BarChart3, ShieldCheck, Hammer, MessageSquare, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Conversion-Focused Builds",
      description: "We don't just build sites; we build sales tools. Every page is mapped to lead the user toward a specific action—booking a call or requesting a quote.",
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      features: ["Strategic CTA Placement", "Psychological Friction Removal", "High-Converting Form Design"]
    },
    {
      title: "Local SEO Foundations",
      description: "Getting found in your local area is priority #1. We optimize for local searches so customers in your suburb see you first.",
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      features: ["Google Business Integration", "Keyword Optimized Service Pages", "Location-Based Landing Pages"]
    },
    {
      title: "Mobile Optimisation",
      description: "Trades and services are searched for on-the-go. Your site will be just as powerful on a smartphone as it is on a desktop.",
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      features: ["Responsive Grid Systems", "Click-to-Call Functionality", "Fast-Load Image Compression"]
    },
    {
      title: "Speed Engineering",
      description: "We use lightweight frameworks to ensure your site loads instantly. No bloated themes or unnecessary plugins slowing you down.",
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      features: ["Clean Code Architecture", "Premium Cloud Hosting", "Edge Content Delivery"]
    },
    {
      title: "Site Insights & Analytics",
      description: "Get clear, actionable insights on your site's performance. We provide simplified reporting that shows you exactly how your investment is working.",
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      features: ["Simplified Performance Reports", "Conversion tracking", "Traffic Behavior Insights"]
    },
    {
      title: "Ongoing Support & Hosting",
      description: "Never worry about a broken plugin again. We handle the tech stack so you can focus on the job site.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
      features: ["24/7 Monitoring", "Security Backups", "Unlimited Small Edits"]
    }
  ];

  return (
    <div className="page-transition py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">Our Core Offerings</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            We don't do 'social media management' or 'blog writing'. We focus on the foundation of your digital presence: a high-performing website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/40 transition-all flex flex-col">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
              <ul className="space-y-3 pt-6 border-t border-slate-800">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Focus */}
        <div className="mt-32 bg-indigo-600 rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Hammer className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">We handle the tech.<br />You handle the trade.</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white text-indigo-600 p-2 rounded-lg mr-4 mt-1"><MessageSquare size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase mb-1">Direct Communication</h4>
                    <p className="text-indigo-100/70">No account managers or ticket queues. Talk directly to the engineers building your growth engine.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-indigo-600 p-2 rounded-lg mr-4 mt-1"><Sparkles size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase mb-1">Polished Polish</h4>
                    <p className="text-indigo-100/70">Premium typography and clean layouts that command respect and project authority in your market.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                alt="Tech and Trade" 
                className="rounded-3xl shadow-2xl rotate-3 scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

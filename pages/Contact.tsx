
import React, { useState } from 'react';
import { Send, CheckCircle2, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="page-transition min-h-[70vh] flex items-center justify-center px-6">
        <div className="bg-slate-900 border border-white/10 p-16 rounded-[3rem] text-center max-w-lg shadow-2xl">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={40} className="text-slate-950" />
          </div>
          <h2 className="text-4xl font-serif italic text-white mb-6">Enquiry Received.</h2>
          <p className="text-slate-400 mb-10 leading-relaxed font-light">
            We prioritize quality and response speed. An engineer will review your business goals and reach out within 4 business hours to discuss your project.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-white text-[10px] uppercase tracking-widest font-black border-b border-white/20 pb-1"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-8 block">Project Inquiry</span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-10 leading-tight">
              Let's engineer your <br />next <span className="text-slate-400">breakthrough.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-16 font-light leading-relaxed max-w-sm">
              Brief us on your business goals and we will prepare a preliminary conversion strategy for our first call.
            </p>

            <div className="space-y-4">
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Official Communication</p>
               <a 
                href="mailto:hello@legrandspace.com.au"
                className="text-2xl font-serif italic text-white hover:text-slate-300 transition-colors block"
               >
                hello@legrandspace.com.au
               </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-white/5 p-8 md:p-16 rounded-[3rem] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. David Smith"
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-white/20 transition-all font-light"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="david@company.com"
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-white/20 transition-all font-light"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Business</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Business name or Industry"
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-white/20 transition-all font-light"
                    value={formData.business}
                    onChange={e => setFormData({...formData, business: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea 
                    rows={6}
                    placeholder="Briefly describe your current conversion pain points or project goals..."
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-5 text-white focus:outline-none focus:border-white/20 transition-all resize-none font-light"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'sending'}
                  type="submit" 
                  className="w-full bg-white text-slate-950 py-6 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-200 transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {formState === 'sending' ? (
                     <span className="flex items-center"><Zap size={14} className="animate-spin mr-3" /> Transmitting...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

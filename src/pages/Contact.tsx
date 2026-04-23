import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col">
      <section className="px-6 py-24 md:py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold rounded mb-6 uppercase tracking-widest">Connect with Sales</div>
              <h1 className="text-6xl font-black mb-8 italic">Get a <span className="text-brand-accent">Quotation</span>.</h1>
              <p className="text-xl text-brand-primary/60 mb-12 max-w-lg">
                Our sales engineers are ready to help you find the right equipment and configuration 
                for your specific mission.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Sales & Inquiries", value: "sales@terramachina.com" },
                  { icon: Phone, label: "Emergency Support", value: "+62 800-444-TERRA" },
                  { icon: MapPin, label: "Visit Warehouse", value: "Jl. Industri Berat No. 99, Surabaya, ID" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-primary transition-all">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <div className="text-xs text-brand-primary/40 uppercase tracking-widest font-black mb-1">{item.label}</div>
                      <div className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[50px] shadow-2xl shadow-brand-primary/5 border border-gray-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-24 h-24 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mb-8">
                    <MessageSquare size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 italic">Inquiry Received</h3>
                  <p className="text-brand-primary/60">Our sales representative will contact you shortly with a personalized proposal.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-brand-primary/40">Full Name</label>
                       <input required type="text" className="w-full bg-brand-bg border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none font-medium" placeholder="E.g. Pak Budi Santoso" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-brand-primary/40">Email Address</label>
                       <input required type="email" className="w-full bg-brand-bg border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none font-medium" placeholder="budi@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-brand-primary/40">Interested Industry</label>
                     <select className="w-full bg-brand-bg border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none appearance-none font-bold">
                        <option>Open-Pit Mining</option>
                        <option>Infrastructure/Construction</option>
                        <option>Forestry & Plantation</option>
                        <option>Rental Partnership</option>
                        <option>Spare Parts Only</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-brand-primary/40">Unit Type / Message</label>
                     <textarea rows={4} className="w-full bg-brand-bg border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-accent outline-none font-medium" placeholder="Tell us about your project requirements..." />
                  </div>
                  <button type="submit" className="w-full bg-brand-primary text-brand-accent py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3">
                    Submit Inquiry
                    <Send size={24} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

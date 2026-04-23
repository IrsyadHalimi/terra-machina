import { motion } from "motion/react";
import { Shield, Hammer, Users, Award, Landmark } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 italic">Est. 1995</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Building the <span className="text-brand-accent italic font-serif">backbone</span> of progress.
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed mb-8">
              For over three decades, Terra Machina has provided the heavy-duty machinery 
              that shapes national landscapes. We aren't just a dealer; we are a partner 
              in your project's success.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Machinery Units Solid", value: "8,500+" },
                { label: "Technical Staff", value: "300+" },
                { label: "Service Centers", value: "24" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((s, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-brand-primary mb-1">{s.value}</div>
                  <div className="text-sm text-brand-primary/40 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-primary rounded-[60px] overflow-hidden flex items-center justify-center">
               <div className="text-white/10 text-9xl font-black select-none rotate-90 scale-150">TERRA</div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-accent p-10 rounded-3xl shadow-xl max-w-xs">
              <Shield className="text-brand-primary mb-4" size={40} />
              <p className="text-brand-primary font-bold italic">"Unmatched durability for the toughest tasks."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl font-bold mb-6 italic">Engineering Trust.</h2>
            <p className="text-xl text-brand-primary/60">Our guiding principles in every transaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Landmark, title: "Heritage", desc: "A decades-long legacy of reliability in heavy industry." },
              { icon: Hammer, title: "Resilience", desc: "Equipment and services designed to withstand extreme conditions." },
              { icon: Users, title: "Commitment", desc: "Your deadlines are our priority. We work as hard as our machines." },
            ].map((v, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-primary text-brand-accent rounded-full flex items-center justify-center mb-8">
                  <v.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-brand-primary/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] text-brand-accent uppercase mb-12 block italic">Worldwide Partners</h2>
          <div className="flex flex-wrap justify-center gap-20 opacity-40">
             <div className="text-4xl font-black italic tracking-tighter">Caterpillar</div>
             <div className="text-4xl font-black italic tracking-tighter">Komatsu</div>
             <div className="text-4xl font-black italic tracking-tighter">Bobcat</div>
             <div className="text-4xl font-black italic tracking-tighter">John Deere</div>
          </div>
        </div>
      </section>
    </div>
  );
}

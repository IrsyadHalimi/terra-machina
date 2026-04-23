import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowUpRight, ShieldCheck, HeartPulse } from "lucide-react";

const jobs = [
  { title: "Heavy Equipment Mechanic", dept: "Operations", type: "Full-time", location: "Site Kalimantan / Jakarta" },
  { title: "Sales Engineer (Mining Div)", dept: "Sales", type: "Full-time", location: "Jakarta HQ" },
  { title: "Logistic & Spare Part Manager", dept: "Supply Chain", type: "Full-time", location: "Surabaya Warehouse" },
  { title: "Safety Officer (K3)", dept: "EHS", type: "Full-time", location: "On-site Rotation" },
  { title: "Fleet Monitoring Specialist", dept: "Tech Support", type: "Contract", location: "Remote/Hybrid" },
];

export default function Career() {
  return (
    <div className="flex flex-col">
      <section className="px-6 py-24 md:py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold rounded-lg mb-6 uppercase tracking-widest">Join the Force</div>
            <h1 className="text-6xl font-black mb-8 italic">Build your <span className="text-brand-accent">legacy</span>.</h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed">
              We look for individuals with grit. At Terra Machina, we value raw talent 
              and hard work over pedigree. Join our global team of 800+ experts.
            </p>
          </div>

          <div className="space-y-4">
             {jobs.map((j, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 hover:border-brand-accent transition-all cursor-pointer"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-xs font-black text-brand-primary/40 uppercase tracking-widest">{j.dept}</span>
                       <span className="w-1 h-1 bg-brand-accent rounded-full" />
                       <span className="text-xs font-bold text-brand-accent uppercase">{j.type}</span>
                    </div>
                    <h3 className="text-3xl font-bold group-hover:italic transition-all">{j.title}</h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-brand-primary/40 font-medium">
                      <MapPin size={20} />
                      {j.location}
                    </div>
                    <div className="w-16 h-16 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
           <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6 italic">Why Terra?</h2>
              <p className="text-brand-primary/60 italic leading-relaxed">
                We take care of our people on the field and in the office. 
                Your growth is our engine.
              </p>
           </div>
           <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: ShieldCheck, title: "Unbeatable Security", desc: "Stable career growth within a legacy industry that powers the world." },
                { icon: Clock, title: "Flexible Rotation", desc: "Competitive on-site rotation programs (6 weeks on / 2 weeks off)." },
                { icon: HeartPulse, title: "Family Shield", desc: "Premium health coverage including extended family and dental." },
                { icon: Briefcase, title: "Skill Lab", desc: "Ongoing certification programs with global heavy equipment giants." },
              ].map((b, idx) => (
                <div key={idx} className="flex gap-6">
                   <div className="w-12 h-12 bg-brand-bg text-brand-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <b.icon size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-2">{b.title}</h4>
                      <p className="text-brand-primary/60 text-sm leading-relaxed">{b.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { Truck, Wrench, Settings, RotateCcw, ShieldCheck, Map } from "lucide-react";

const services = [
  { 
    icon: Truck, 
    title: "Unit Sales & Leasing", 
    desc: "A vast catalog of new and used machinery available for direct purchase or flexible long-term leasing.",
    color: "bg-orange-500" 
  },
  { 
    icon: RotateCcw, 
    title: "Rental Fleet", 
    desc: "Short-term heavy equipment rental for specific project needs with flexible daily, weekly, or monthly rates.",
    color: "bg-yellow-500" 
  },
  { 
    icon: Wrench, 
    title: "On-Site Maintenance", 
    desc: "Our mobile workshop units bring certified mechanics directly to your project site to minimize downtime.",
    color: "bg-zinc-700" 
  },
  { 
    icon: Settings, 
    title: "Genuine Spare Parts", 
    desc: "Official distributor of engine components, filters, hydraulics, and tracks for major global brands.",
    color: "bg-red-600" 
  },
  { 
    icon: ShieldCheck, 
    title: "Safety Audits", 
    desc: "Comprehensive certification and inspection services to ensure all equipment fits industrial safety standards.",
    color: "bg-emerald-600" 
  },
  { 
    icon: Map, 
    title: "Logistic Solutions", 
    desc: "Specialized transportation of heavy-duty machinery to remote locations across the archipelago.",
    color: "bg-blue-600" 
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-24 md:py-32 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h1 className="text-6xl font-black mb-8">Heavy Duty <span className="text-brand-accent">Excellence</span>.</h1>
              <p className="text-xl text-white/50 max-w-xl">
                 We provide end-to-end solutions for the infrastructure, 
                 mining, and agriculture sectors.
              </p>
           </div>
           <div className="h-64 bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center p-12">
               <Truck size={100} className="text-white/10" />
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-brand-bg p-12 rounded-[40px] border border-transparent hover:border-brand-accent/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${s.color} text-white rounded-2xl flex items-center justify-center mb-8`}>
                  <s.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-brand-primary/60 mb-8 leading-relaxed text-sm">{s.desc}</p>
                <button className="text-brand-primary font-black flex items-center gap-2 group/btn uppercase text-xs tracking-widest">
                  View Detail
                  <motion.div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary group-hover/btn:translate-x-2 transition-transform">
                    →
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-6 py-32 bg-brand-bg overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Need 24/7 Technical Support?</h2>
           <p className="text-brand-primary/60 text-lg mb-12 max-w-xl mx-auto">
              Our emergency repair team is ready to deploy within hours to ensure 
              your operation never stops.
           </p>
           <div className="flex justify-center gap-6">
              <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold">Contact Support</button>
              <button className="bg-white border border-gray-200 text-brand-primary px-8 py-4 rounded-xl font-bold">Service Locations</button>
           </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Truck, HardHat, Settings, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Truck, title: "Premium Fleet", desc: "Access to the latest models of world-class excavators, haulers, and loaders." },
  { icon: Wrench, title: "Expert Maintenance", desc: "24/7 technical support and on-site repair services by certified mechanics." },
  { icon: Settings, title: "Original Parts", desc: "Complete inventory of genuine spare parts for maximum equipment longevity." },
  { icon: HardHat, title: "Safety First", desc: "All equipment undergoes rigorous safety inspections and certification." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-40 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[150px] -mr-64 -mt-64" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              Heavy Duty Reliability
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Powering Your <span className="text-brand-accent">Infrastructure</span>.
            </h1>
            <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
              Terra Machina is the leading distributor of heavy equipment for mining, construction, 
              and forestry. High performance, minimized downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-brand-accent text-brand-primary px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                View Equipment
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Inquiry Now
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-brand-bg rounded-[40px] shadow-2xl relative overflow-hidden group border-4 border-brand-accent/20">
               <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-40" />
               <div className="p-12 h-full flex flex-col justify-end">
                  <div className="text-brand-accent text-5xl font-bold mb-2">TM-X900</div>
                  <div className="text-brand-primary font-bold text-xl mb-4 italic uppercase">Next-Gen Excavator</div>
                  <p className="text-brand-primary/60 max-w-xs">Engineered for the most demanding environments on Earth.</p>
               </div>
               
               {/* Visual placeholder for equipment */}
               <div className="absolute inset-0 -z-10 bg-brand-bg flex items-center justify-center">
                  <Truck size={200} className="text-brand-primary/10 rotate-12" />
               </div>
            </div>
            
            {/* Stats badges */}
            <div className="absolute -top-6 -right-6 bg-brand-accent p-6 rounded-3xl shadow-xl text-brand-primary">
              <div className="text-3xl font-black">2000+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider">Machines in Field</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
           <div className="text-2xl font-black italic tracking-tighter">Caterpillar</div>
           <div className="text-2xl font-black italic tracking-tighter">Komatsu</div>
           <div className="text-2xl font-black italic tracking-tighter">Volvo</div>
           <div className="text-2xl font-black italic tracking-tighter">Hitachi</div>
           <div className="text-2xl font-black italic tracking-tighter">Sany</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Total Industry Support.</h2>
              <p className="text-brand-primary/60 text-lg max-w-xl">
                We don't just sell machines; we provide the lifecycle support 
                that keeps your project moving forward.
              </p>
            </div>
            <Link to="/about" className="text-brand-accent font-bold flex items-center gap-2 group">
              About Terra Machina
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-bg p-10 rounded-[32px] hover:bg-brand-primary hove:text-white transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-accent rounded-xl flex items-center justify-center mb-6">
                  <f.icon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{f.title}</h3>
                <p className="text-brand-primary/60 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 py-32 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 opacity-5">
           <HardHat size={500} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-10">Reliability built in <br/><span className="text-brand-accent">steel</span>.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
               <div>
                  <div className="text-6xl font-bold text-brand-accent mb-4">24h</div>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Response Guarantee</p>
               </div>
               <div>
                  <div className="text-6xl font-bold text-brand-accent mb-4">15k+</div>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Parts in stock</p>
               </div>
               <div>
                  <div className="text-6xl font-bold text-brand-accent mb-4">98%</div>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Availability Rate</p>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}

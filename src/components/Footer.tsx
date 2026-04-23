import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-accent rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-brand-primary rotate-45" />
            </div>
            <span className="italic">TERRA MACHINA</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed italic">
            Over 30 years of excellence in heavy equipment distribution and site services across the archipelago.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/about" className="hover:text-brand-accent">About Us</Link></li>
            <li><Link to="/career" className="hover:text-brand-accent">Careers</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Services</Link></li>
            <li><Link to="/" className="hover:text-brand-accent">Press</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><button className="hover:text-brand-accent">Privacy Policy</button></li>
            <li><button className="hover:text-brand-accent">Terms of Service</button></li>
            <li><button className="hover:text-brand-accent">Cookie Policy</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Social</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><button className="hover:text-brand-accent">Twitter</button></li>
            <li><button className="hover:text-brand-accent">LinkedIn</button></li>
            <li><button className="hover:text-brand-accent">Instagram</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Nexus Dynamics. All rights reserved.
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Instagram, Twitter, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          THVEILPLACE.NG
        </motion.div>
        
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase">
          {["Collection", "Story", "Atelier", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:text-white/60 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-xl font-display uppercase tracking-widest">
              {["Collection", "Story", "Atelier", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1518005020453-eb58a336250d?q=80&w=1920&auto=format&fit=crop"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </motion.div>

      <div className="relative z-10 text-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-white/50 mb-8 block">
            Est. 2025
          </span>
          <h1 className="text-[10vw] md:text-[7vw] font-serif italic leading-[0.9] tracking-tighter mb-12 flex flex-col items-center">
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="inline-block"
            >
              THVEILPLACE
            </motion.span>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="inline-block"
            >
              KATZE
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white/70 leading-relaxed"
          >
            A convergence of timeless elegance and contemporary minimalism. 
            Crafted for those who seek beauty in the subtle.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">Explore Collection</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={16} />
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section id="collection" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" 
                alt="KATZE THVEILPLACE.NG Collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">01</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">uno.</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Our philosophy is rooted in the subtraction of the unnecessary. Every piece in the KATZE THVEILPLACE.NG collection is a testament to the power of simplicity, designed to endure beyond the seasons.
            </p>
            <div className="flex gap-8">
              <div className="border-l border-white/20 pl-6">
                <span className="block text-2xl font-serif mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Organic Silk</span>
              </div>
              <div className="border-l border-white/20 pl-6">
                <span className="block text-2xl font-serif mb-1">Hand</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Finished</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-20 border-y border-white/10 overflow-hidden bg-white text-black">
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap gap-20 text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter"
      >
        <span>KATZE THVEILPLACE.NG Atelier</span>
        <span>KATZE THVEILPLACE.NG Atelier</span>
        <span>KATZE THVEILPLACE.NG Atelier</span>
        <span>KATZE THVEILPLACE.NG Atelier</span>
        <span>KATZE THVEILPLACE.NG Atelier</span>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <h3 className="text-4xl font-serif italic mb-8">Stay in the loop.</h3>
          <div className="flex gap-4 max-w-md">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm focus:border-white outline-none transition-colors"
            />
            <button className="text-xs uppercase tracking-widest font-bold hover:text-white/60 transition-colors">Join</button>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Social</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a 
                href="https://www.instagram.com/thveilplace.ng?igsh=bjZieGNtaXE2bGRq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/60 transition-colors"
              >
                <Instagram size={14} /> Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white/60 cursor-pointer transition-colors">
              <Twitter size={14} /> Twitter
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2 hover:text-white/60 cursor-pointer transition-colors">
              <Mail size={14} /> hello@katzethveilplace.ng
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
        <p>© 2024 KATZE THVEILPLACE.NG. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <FeatureSection />
      <Marquee />
      <section id="story" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12 leading-tight">
              "Every piece tells a story of quiet beauty."
            </h2>
            <p className="text-white/40 uppercase tracking-[0.4em] text-xs">— The KATZE THVEILPLACE.NG Philosophy</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

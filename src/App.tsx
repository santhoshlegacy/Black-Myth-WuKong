import { ParallaxSection } from './components/ParallaxSection';
import { AboutGame, AboutUs, Testimonials, Contact } from './components/Content';
import { Navbar } from './components/Navbar';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Lenis from 'lenis';
import { Volume2, VolumeX } from 'lucide-react';
import Cursor from './components/Cursor';
import Sidebar from './components/Sidebar';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // 2. Loading Timer
  useEffect(() => {
    // Simulate a loading time to let the animation play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // 3. Audio Toggle logic
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-black relative selection:bg-gold selection:text-black overflow-x-clip">
      <Cursor />
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/bg-music.mp3" loop />

      {/* Floating Audio Button */}
      <button 
        onClick={toggleAudio} 
        className="fixed bottom-8 left-8 z-[100] p-4 rounded-full border border-[#c5a059]/30 backdrop-blur-md text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all shadow-2xl"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Replaces the old static right-side indicators */}
      <Sidebar />

      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      {/* Navigation */}
      <Navbar />

      {/* Noise Overlay */}
      <div className="noise-overlay fixed inset-0" />

      {/* Left Decoration (Theme Pattern) */}
      <div className="absolute top-0 left-0 w-full h-[200vh] pointer-events-none z-50">
        <div className="sticky top-1/2 -translate-y-1/2 left-10 w-48 max-w-[200px] p-4 opacity-20 hidden 2xl:block pointer-events-none">
          <p className="text-[9px] leading-relaxed tracking-widest uppercase mb-4">
            Based on the Chinese classic Journey to the West, Black Myth: Wukong is a genre-defining action RPG.
          </p>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Make sure Hero has the 'hero' id for the Sidebar scroll spy */}
      <div id="hero">
        <Hero />
      </div>

      {/* About The Game (already has id="world" inside) */}
      <div className="w-full bg-black z-20 relative">
        <AboutGame />
      </div>

      {/* About Us (already has id="myth" inside) */}
      <div className="w-full bg-black z-20 relative">
        <AboutUs />
      </div>

      {/* Testimonials */}
      <section className="bg-zinc-950 py-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <ParallaxSection offset={20}>
        <Contact />
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-display text-4xl text-white font-black tracking-tighter">WUKONG</h2>
            <p className="text-stone-500 text-sm max-w-xs">
              A digital tribute to the Great Sage, Heaven's Equal. Journey through the myths.
            </p>
          </div>

          <div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-display text-gold/60">
            <a href="#" className="hover:text-gold transition-colors">Lore</a>
            <a href="#" className="hover:text-gold transition-colors">Treasures</a>
            <a href="#" className="hover:text-gold transition-colors">Discord</a>
          </div>

          <div className="text-stone-600 text-[10px] uppercase tracking-widest text-center md:text-right">
            © 2026 Black Myth Tribute. All rights reserved. <br />
            Inspired by Game Science.
          </div>
        </div>
      </footer>
    </main>
  );
}

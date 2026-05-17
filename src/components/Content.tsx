import { motion } from 'motion/react';
import { Send, Star, Zap, Shield, Wand2 } from 'lucide-react';

export const AboutGame = () => {
  return (
    <section 
      id="world" 
      className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/foggy-mountain.jpg')` }} 
    >
      {/* The Crucial Overlay: This creates a dark fade from left to right. 
          It ensures the text on the left is readable, but lets the mountain art shine on the right. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Content Container - z-10 keeps it above the dark overlay */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="max-w-xl">
          <h2 className="text-white text-5xl md:text-7xl font-display font-black uppercase leading-tight">
            Return To <br/>
            The <br/>
            <span className="text-[#c5a059]">Foggy</span> <br/>
            <span className="text-[#c5a059]">Mountains</span>
          </h2>
          
          <p className="mt-8 text-gray-300 text-lg leading-relaxed font-light">
            Black Myth: Wukong is an action RPG rooted in Chinese mythology. 
            Venture into the challenges and marvels ahead, to uncover the 
            obscured truth beneath the veil of a glorious legend.
          </p>
          
          {/* Your icon buttons/links go here */}
          <div className="flex gap-4 mt-8">
            {/* Keeping it clean as requested */}
          </div>
        </div>

        {/* Right Column: The Image Box */}
        <div className="relative">
          <div className="premium-card p-2 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
            
            {/* UPDATED IMAGE TAG HERE */}
            <img 
              src="/temple.jpg" 
              alt="Ancient Mythical Temple" 
              className="w-full h-auto object-cover rounded grayscale hover:grayscale-0 transition-all duration-700"
            />
            
          </div>
        </div>

      </div>
      
      {/* Add this blending gradient right here */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
    </section>
  );
};

export const AboutUs = () => {
  return (
    <section 
      id="myth" 
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden py-24 text-center px-4"
      style={{ backgroundImage: `url('/creators-bg.jpg')` }} 
    >
      {/* The Dark Overlay: This ensures the text pops while keeping the mythical mood */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content Container - z-10 keeps it above the overlay */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <span className="text-[#c5a059] tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-4">
          The Creators
        </span>
        
        <h2 className="text-white text-5xl md:text-7xl font-display font-black uppercase leading-tight drop-shadow-2xl">
          Tribute To <br />
          Mastery
        </h2>
        
        <p className="mt-8 text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-2xl">
          DIGITAL CRAFTSMEN DEDICATED TO BRINGING THE SPIRIT OF THE DESTINED ONE 
          TO THE MODERN WEB. EVERY PIXEL IS CRAFTED WITH PRECISION.
        </p>

        {/* Optional: Add a glassmorphism button here if you want them to click to your portfolio */}
        <button className="mt-12 px-8 py-3 border border-[#c5a059]/50 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all duration-300 tracking-widest uppercase text-sm">
          Meet the Dev
        </button>
        
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { name: "Elder Sage", text: "The most visceral combat experience in a decade. A technical masterpiece that defies belief.", role: "Legendary Critic" },
    { name: "Destined One", text: "Journey through the myths with unparalleled fluidity and visual awe. Truly immersive.", role: "Pro Player" },
    { name: "Great Sage", text: "A breathtaking experience that captures the true essence of the legend.", role: "Mythic Reviewer" },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h3 className="text-[11px] text-gold tracking-[0.5em] uppercase mb-4 opacity-70">Echoes of Glory</h3>
        <h2 className="font-display text-4xl md:text-5xl text-white font-bold">Community Reviews</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="premium-card p-12 rounded-sm relative"
          >
            <p className="text-sm md:text-base italic font-display text-stone-200/80 leading-loose mb-8">"{r.text}"</p>
            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">{r.name}</p>
              <p className="text-stone-500 text-[9px] font-sans uppercase tracking-[0.4em] mt-1">{r.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pb-24">
      <div className="space-y-12">
        <h2 className="font-display text-5xl md:text-7xl text-white font-bold leading-tight">Seek the <span className="text-gold">Truth</span></h2>
        <div className="w-16 h-[1px] bg-gold opacity-50" />
        <p className="text-stone-400 text-[13px] uppercase tracking-widest leading-loose max-w-md">
          Have questions about the journey or want to contribute to the legend? Send us a message through the mystical winds.
        </p>
      </div>
      
      <div className="premium-card-accent p-10 md:p-14 rounded-sm space-y-10 group">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 opacity-80">Summon Interest</p>
        <form className="space-y-10">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="YOUR NOMENCLATURE"
              className="w-full bg-transparent border-b border-white/20 pb-4 text-[11px] uppercase tracking-[0.3em] font-sans focus:border-gold outline-none transition-colors placeholder:text-white/10"
            />
          </div>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="SPIRITUAL ADDRESS"
              className="w-full bg-transparent border-b border-white/20 pb-4 text-[11px] uppercase tracking-[0.3em] font-sans focus:border-gold outline-none transition-colors placeholder:text-white/10"
            />
          </div>
          <div className="space-y-4">
            <textarea 
              rows={3}
              placeholder="YOUR MESSAGE"
              className="w-full bg-transparent border-b border-white/20 pb-4 text-[11px] uppercase tracking-[0.3em] font-sans focus:border-gold outline-none transition-colors resize-none placeholder:text-white/10"
            />
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-gold hover:text-white transition-colors"
          >
            Manifest Message <span className="text-lg">→</span>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

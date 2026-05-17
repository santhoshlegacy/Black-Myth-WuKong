import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-max px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between gap-8 shadow-2xl">
      
      {/* Logo */}
      <div className="text-[#c5a059] font-black text-xl tracking-widest">
        悟空
      </div>

      {/* Desktop Links (Hidden on mobile to keep it clean) */}
      <div className="hidden md:flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-gray-300">
        <a href="#hero" className="hover:text-[#c5a059] transition-colors">Journey</a>
        <a href="#world" className="hover:text-[#c5a059] transition-colors">The Legend</a>
        <a href="#myth" className="hover:text-[#c5a059] transition-colors">Creators</a>
      </div>

      {/* Call to Action Button */}
      <button className="px-5 py-2 rounded-full border border-[#c5a059]/50 text-[#c5a059] text-xs uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all">
        Order Now
      </button>

    </nav>
  );
};

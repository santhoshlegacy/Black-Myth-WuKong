import { motion } from 'motion/react';
import React from 'react';

export default function Loader() {
    return (
        <motion.div
            // This ensures the loader covers the entire screen and sits on top of everything
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-zinc-950"
            // The exit animation: blurs out and fades away when loading is complete
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex items-center justify-center">

                {/* Outer Spinning Ring */}
                <motion.div
                    className="absolute w-36 h-36 rounded-full border border-t-[#c5a059] border-r-[#c5a059]/30 border-b-transparent border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />

                {/* Inner Reverse Spinning Ring */}
                <motion.div
                    className="absolute w-28 h-28 rounded-full border border-b-[#c5a059] border-l-[#c5a059]/50 border-t-transparent border-r-transparent"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />

                {/* Center Character (Breathing Effect) */}
                <motion.h1
                    className="text-[#c5a059] text-5xl font-display font-black drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    悟空
                </motion.h1>

            </div>

            <motion.div className="mt-16 flex flex-col items-center gap-3">
                <p className="text-[#c5a059]/70 tracking-[0.4em] text-xs font-semibold uppercase">
                    Awakening the Myth
                </p>

                {/* The Staff Progress Line */}
                <div className="w-64 h-[2px] bg-white/5 overflow-hidden relative rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[#c5a059] shadow-[0_0_10px_#c5a059]"
                        initial={{ width: "0%" }}
                        // This fakes a loading sequence. You can tie this to actual image loading later if needed.
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}
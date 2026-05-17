import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  offset?: number;
}

export const ParallaxSection = ({ children, backgroundImage, className, offset = 50 }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={cn("relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6", className)}>
      {backgroundImage && (
        <motion.div
          style={{ y, backgroundImage: `url(${backgroundImage})` }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-110"
        />
      )}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-transparent to-black" />
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
      </motion.div>
    </div>
  );
};

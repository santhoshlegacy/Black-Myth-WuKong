import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // --- CONFIGURATION ---
  const frameCount = 247;
  const imagePrefix = '/wukong-frames/ezgif-frame-';
  const imageExtension = '.jpg';
  // ---------------------

  // 1. Preload the Images
  useEffect(() => {
    imagesRef.current = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `${imagePrefix}${frameNum}${imageExtension}`;
      imagesRef.current.push(img);
    }
  }, []);

  // 2. Handle Canvas Drawing and Scroll Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Helper function to draw and resize dynamically
    const drawImageToCanvas = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Dynamically set canvas to match the exact size of the ezgif frame
      if (canvas.width !== img.naturalWidth) canvas.width = img.naturalWidth;
      if (canvas.height !== img.naturalHeight) canvas.height = img.naturalHeight;

      context.drawImage(img, 0, 0);
    };

    // Draw the first frame on load
    if (imagesRef.current[0]) {
      if (imagesRef.current[0].complete) {
        drawImageToCanvas(imagesRef.current[0]);
      } else {
        imagesRef.current[0].onload = () => drawImageToCanvas(imagesRef.current[0]);
      }
    }

    let currentFrame = 0;
    let targetFrame = 0;
    let animationFrameId: number;

    const render = () => {
      // Linear interpolation for buttery smooth frame transitions
      currentFrame += (targetFrame - currentFrame) * 0.08;

      const frameIndexToDraw = Math.min(frameCount - 1, Math.round(currentFrame));

      if (imagesRef.current[frameIndexToDraw]) {
        drawImageToCanvas(imagesRef.current[frameIndexToDraw]);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Start the continuous render loop
    render();

    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollDistance = -top;
      const maxScroll = height - windowHeight;

      const scrollFraction = Math.max(0, Math.min(1, scrollDistance / maxScroll));

      // Update target frame smoothly instead of drawing immediately
      targetFrame = Math.min(
        frameCount - 1,
        scrollFraction * frameCount
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">

        {/* The object-cover class will now correctly scale the dynamically sized canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none w-full px-4">
          <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-widest mix-blend-overlay">
            The Legend
          </h1>
          <p className="text-gray-300 mt-4 text-xl md:text-2xl font-light tracking-widest mix-blend-overlay">
            Awaken the myth.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
      </div>

    </div>
  );
}
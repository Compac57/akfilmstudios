import React, { useState, useEffect } from 'react';

// Fixed Cinematic Mountain Image for immediate loading
const HERO_IMAGE = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Camera Drift Effect
  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          // Calculate percentage from center (-1 to 1)
          const x = (clientX / window.innerWidth) * 2 - 1;
          const y = (clientY / window.innerHeight) * 2 - 1;
          
          // Move background slightly opposite to mouse (Parallax)
          setOffset({
              x: x * -15, // Max move 15px
              y: y * -10  // Max move 10px
          });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
        // Calculate absolute position
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        // Scroll to exact top (offset 0) so the fixed navbar overlaps the section's padding
        const offsetPosition = elementPosition;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
      
      {/* Fixed Background Image with Parallax Drift */}
      <div 
        className="absolute inset-[-20px] z-0 transition-transform duration-100 ease-out"
        style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10" />
        
        <div className="absolute inset-0">
            <img 
              src={HERO_IMAGE} 
              alt="Cinematic Mountains Background" 
              className="w-full h-full object-cover scale-105"
              loading="eager"
            />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tight leading-[1] animate-slide-up drop-shadow-xl mt-12">
          Eure Liebe. <br />
          <span className="font-serif-alt italic text-brand font-normal">Modern erzählt.</span>
        </h1>
        
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-brand to-transparent my-6"></div>

        <p className="max-w-lg text-gray-100 text-lg md:text-xl font-light leading-relaxed mb-10 animate-fade-in drop-shadow-lg">
          Zuhause in Bregenz. Wir schaffen zeitlose Erinnerungen mit authentischem Storytelling vor der Kulisse des Bodensees.
        </p>
        
        <div className="animate-fade-in-delayed">
            <a 
                href="#work" 
                onClick={scrollToWork}
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium tracking-tighter text-white border border-white/50 hover:border-brand transition-all duration-500 rounded-sm bg-white/10 backdrop-blur-md hover:bg-white/20"
            >
                <span className="relative text-xs tracking-[0.25em] uppercase group-hover:text-brand transition-colors duration-300">Galerie ansehen</span>
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center z-20 animate-pulse text-white/80">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] mb-4 text-brand">Scroll</span>
            <div className="h-10 w-[1px] bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
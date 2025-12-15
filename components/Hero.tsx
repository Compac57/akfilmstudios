import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  // 1. Bregenz / Bodensee Vibe (Molo/Pier Atmosphere)
  "https://images.unsplash.com/photo-1506462706852-646261f062d0?q=80&w=2500&auto=format&fit=crop",
  // 2. Burg / Historic Stone Architecture (Gebhardsberg/Schattenburg Vibe)
  "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2500&auto=format&fit=crop",
  // 3. Panoramic Lake View (Pfänder View Vibe)
  "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=2500&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F9F9F7]">
      
      {/* Background Images Slider with Parallax Drift */}
      <div 
        className="absolute inset-[-20px] z-0 transition-transform duration-200 ease-out"
        style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10" />
        
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt="Bregenz Bodensee Burg Atmosphere" 
              className="w-full h-full object-cover scale-105" 
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tight leading-[1] animate-[slideUp_1.2s_ease-out] drop-shadow-xl mt-12">
          Eure Liebe. <br />
          <span className="font-serif-alt italic text-brand font-normal">Modern erzählt.</span>
        </h1>
        
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-brand to-transparent my-6"></div>

        <p className="max-w-lg text-gray-100 text-lg md:text-xl font-light leading-relaxed mb-10 animate-[fadeIn_1.5s_ease-out] drop-shadow-lg">
          Zuhause in Bregenz. Wir schaffen zeitlose Erinnerungen mit authentischem Storytelling vor der Kulisse des Bodensees.
        </p>
        
        <div className="animate-[fadeIn_2s_ease-out]">
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
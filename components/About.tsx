import React, { useRef, useEffect, useState } from 'react';
import TiltWrapper from './TiltWrapper';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const LOCATIONS = ["BREGENZ", "DORNBIRN", "LECH", "FELDKIRCH", "MONTAFON", "ZÜRICH"];

  return (
    <section 
      id="studio" 
      ref={sectionRef} 
      className={`py-24 md:py-40 bg-white text-gray-800 relative overflow-hidden fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        
        {/* Text Column */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-brand"></div>
             <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Über Uns</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.2] text-gray-900">
            Verwurzelt in Bregenz,<br/>
            Inspiriert von <span className="font-serif-alt italic text-brand text-5xl md:text-6xl">Emotionen.</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed max-w-lg">
            <p>
              AK Film Studio ist eine Boutique Foto- und Filmanagentur im Herzen von Vorarlberg. Wir haben uns darauf spezialisiert, die echten, ungestellten Momente eures Hochzeitstages festzuhalten.
            </p>
            <p>
              Ausgestattet mit High-End Sony Cinema Kameras und DJI Drohnentechnologie verwandeln wir flüchtige Augenblicke in unvergessliche Erinnerungen – vom Bodenseeufer bis zu den Gipfeln des Arlbergs.
            </p>
          </div>
          
          <div className="pt-4">
            <a href="#contact" className="inline-block border-b border-gray-300 pb-1 text-xs uppercase tracking-widest hover:text-brand hover:border-brand transition-colors text-gray-500">
                Lernt uns kennen
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative order-1 md:order-2">
          <TiltWrapper maxTilt={5}>
            <div className="aspect-[3/4] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-brand/10 mix-blend-multiply z-10 pointer-events-none"></div>
              <img 
                  src="https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?q=80&w=2940&auto=format&fit=crop" 
                  alt="Fotograf mit Sony Kamera" 
                  className="w-full h-full object-cover filter contrast-[1.05] hover:scale-105 transition-all duration-[1.5s] ease-in-out"
              />
            </div>
            {/* Accent Box - 3D Layer */}
            <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F9F9F7] -z-10 shadow-lg"
                style={{ transform: "translateZ(-20px)" }}
            ></div>
            <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand/30 -z-10 translate-x-3 translate-y-3"
                style={{ transform: "translateZ(-40px)" }}
            ></div>
          </TiltWrapper>
        </div>
      </div>

      {/* Locations / Marquee */}
      <div className="border-t border-gray-100 py-16 bg-[#F9F9F7]">
         <div className="container mx-auto px-6 text-center">
            <p className="text-brand text-[10px] tracking-[0.4em] uppercase mb-12">Verfügbar in ganz Vorarlberg & darüber hinaus</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
                {LOCATIONS.map(loc => (
                    <span key={loc} className="text-xl md:text-2xl font-serif text-gray-800 hover:text-brand transition-colors duration-300 cursor-default">
                        {loc}
                    </span>
                ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default About;
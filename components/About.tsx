import React, { useRef, useEffect, useState } from 'react';
import TiltWrapper from './TiltWrapper';
import { MapPin, Globe } from 'lucide-react';

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

  return (
    <section 
      id="studio" 
      ref={sectionRef} 
      className={`pt-24 md:pt-40 bg-white text-gray-800 relative overflow-hidden fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
        
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
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop" 
                  alt="Brautpaar in den Bergen" 
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

      {/* Simple, Elegant Travel Section */}
      <div className="relative w-full py-24 bg-[#F2F2F0] border-t border-gray-200">
         
         {/* Subtle Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
             <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop" 
                alt="Alpen Textur" 
                className="w-full h-full object-cover grayscale"
             />
         </div>

         <div className="container mx-auto px-6 text-center relative z-10">
            
            {/* Icon / Top Label */}
            <div className="flex justify-center mb-6">
                <div className="border border-brand/40 rounded-full p-3 bg-white/50 backdrop-blur-sm">
                    <Globe size={20} className="text-brand" />
                </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
                Zuhause in Vorarlberg.<br/>
                <span className="italic text-gray-500 font-serif-alt font-light">Für euch überall.</span>
            </h3>

            <p className="max-w-xl mx-auto text-gray-600 font-light leading-relaxed mb-12">
                Ob eine intime Zeremonie am Bodensee, eine Berghochzeit am Arlberg oder ein Abenteuer im Ausland. Wir reisen dorthin, wo eure Geschichte geschrieben wird.
            </p>

            {/* Location List - Clean Editorial Style */}
            <div className="max-w-4xl mx-auto border-t border-b border-gray-300 py-8">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-[0.2em] uppercase text-gray-800 font-medium">
                    <span className="hover:text-brand transition-colors cursor-default">Bregenz</span>
                    <span className="text-brand/40">•</span>
                    <span className="hover:text-brand transition-colors cursor-default">Dornbirn</span>
                    <span className="text-brand/40">•</span>
                    <span className="hover:text-brand transition-colors cursor-default">Lech / Zürs</span>
                    <span className="text-brand/40">•</span>
                    <span className="hover:text-brand transition-colors cursor-default">Montafon</span>
                    <span className="text-brand/40">•</span>
                    <span className="hover:text-brand transition-colors cursor-default">Zürich</span>
                    <span className="text-brand/40">•</span>
                    <span className="hover:text-brand transition-colors cursor-default">Worldwide</span>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-xs font-light">
                <MapPin size={12} className="text-brand" />
                <span>Base: 6900 Bregenz, Austria</span>
            </div>

         </div>
      </div>
    </section>
  );
};

export default About;
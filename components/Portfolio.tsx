import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, ArrowRight } from 'lucide-react';
import TiltWrapper from './TiltWrapper';

const Portfolio: React.FC = () => {
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
    <section id="work" ref={sectionRef} className="py-32 bg-[#F9F9F7] text-gray-800">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <span className="text-brand text-xs tracking-[0.3em] uppercase block mb-4">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900">Liebes<span className="font-serif-alt italic text-gray-500">geschichten</span></h2>
            </div>
            <p className="max-w-sm text-gray-500 font-light text-sm leading-relaxed text-right hidden md:block">
                Eine Sammlung intimer Hochzeiten, emotionaler Filme und atemberaubender Paarshootings.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {PROJECTS.map((project, index) => (
            <div 
                key={project.id} 
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                style={{ 
                    transitionDelay: `${index * 150}ms`
                }}
            >
              <TiltWrapper className="group relative cursor-pointer" maxTilt={8}>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 shadow-xl rounded-sm transform-gpu">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  
                  {/* Play/View Button Overlay - 3D Lift Effect */}
                  <div 
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(40px)" }}
                  >
                      <div className="px-6 py-3 bg-white/90 backdrop-blur-md flex items-center gap-3 shadow-lg rounded-sm">
                          <span className="text-xs uppercase tracking-widest text-gray-900">Projekt ansehen</span>
                          <ArrowRight size={14} className="text-brand" />
                      </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Text Info - 3D Lift Effect */}
                <div className="pt-8 flex flex-col items-center text-center" style={{ transform: "translateZ(20px)" }}>
                  <p className="text-[10px] text-brand tracking-[0.25em] uppercase mb-2">{project.category}</p>
                  <h3 className="text-3xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors duration-300 mb-2">{project.title}</h3>
                  <span className="text-xs font-medium text-gray-400">{project.year}</span>
                </div>
              </TiltWrapper>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-32">
        <a href="#" className="inline-block px-12 py-4 border border-gray-300 text-xs uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 text-gray-600">
            Mehr Hochzeiten ansehen
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
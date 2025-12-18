import React from 'react';
import { Instagram, Facebook, Film, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#F9F9F7] text-gray-800 flex flex-col items-center text-center relative overflow-hidden">
      
      <div className="container px-6 relative z-10">
        <span className="text-brand text-xs tracking-[0.3em] uppercase block mb-8">Save The Date</span>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 tracking-tight text-gray-900">
          Erzählt uns eure <br/>
          <span className="font-serif-alt italic text-brand">Geschichte.</span>
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Wir nehmen derzeit Buchungen für die Hochzeitssaison 2024 & 2025 in Vorarlberg und Umgebung an.
          </p>
        </div>

        <a 
            href="mailto:hello@akfilmstudio.com" 
            className="inline-block text-2xl md:text-4xl font-serif border-b border-gray-300 pb-2 hover:text-brand hover:border-brand transition-all duration-500 hover-trigger text-gray-800"
        >
            hello@akfilmstudio.com
        </a>

        {/* Updated Grid: Map Card, Socials, Contact */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start max-w-6xl mx-auto">
            
            {/* Column 1: Map / Studio Location */}
            <div className="flex flex-col items-center w-full">
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
                    Studio & Location
                </h4>
                
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=Weiherstrasse+2,+6900+Bregenz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-full aspect-[4/3] md:aspect-square max-w-[280px] rounded-sm overflow-hidden bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 mb-6 block"
                >
                    {/* Map Background Image (Abstract Map Texture) */}
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                        alt="Map Location Bregenz" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    
                    {/* Dark Overlay for better contrast initially */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* Center Pin UI */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                                <MapPin size={20} className="text-brand fill-brand/20" />
                            </div>
                            {/* Pulse Effect */}
                            <div className="absolute inset-0 bg-brand/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        </div>
                    </div>

                    {/* Hover Label 'Route Planen' */}
                    <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-1 bg-white/95 text-gray-900 text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                            Route planen <ArrowUpRight size={10} />
                        </span>
                    </div>
                </a>

                <p className="text-gray-500 font-light leading-relaxed text-sm">
                    Weiherstrasse 2<br/>
                    6900 Bregenz, Österreich
                </p>
            </div>

            {/* Column 2: Social Icons */}
            <div className="flex flex-col items-center w-full md:pt-14">
                <div className="mb-6 text-brand">
                    <Instagram size={28} strokeWidth={1.2} />
                </div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-6 font-bold">Social Media</h4>
                <div className="flex gap-4 justify-center">
                    <a 
                        href="https://www.instagram.com/akfilmstudio/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-center w-14 h-14 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={22} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                    <a 
                        href="#" 
                        className="group flex items-center justify-center w-14 h-14 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Vimeo"
                    >
                        <Film size={22} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                    <a 
                        href="#" 
                        className="group flex items-center justify-center w-14 h-14 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <Facebook size={22} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col items-center w-full md:pt-14">
                 <div className="mb-6 text-brand">
                    <Phone size={28} strokeWidth={1.2} />
                </div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-6 font-bold">Direkt Kontakt</h4>
                <div className="space-y-4">
                    <a href="tel:+436641234567" className="block text-gray-500 font-light hover:text-brand transition-colors text-lg">
                        +43 664 123 4567
                    </a>
                    <a href="mailto:booking@akfilmstudio.com" className="block text-gray-500 font-light hover:text-brand transition-colors text-sm uppercase tracking-wider">
                        booking@akfilmstudio.com
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
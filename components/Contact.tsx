import React from 'react';
import { Instagram, Facebook, Film, MapPin, Phone } from 'lucide-react';

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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left md:text-center max-w-5xl mx-auto">
            
            {/* Studio Address */}
            <div className="flex flex-col md:items-center">
                <div className="mb-6 text-brand hidden md:block">
                    <MapPin size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Studio</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                    Rathausstraße 1<br/>
                    6900 Bregenz, Österreich
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col md:items-center">
                 <div className="mb-6 text-brand hidden md:block">
                    <Instagram size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Social</h4>
                <div className="flex gap-4 md:justify-center">
                    <a 
                        href="https://www.instagram.com/akfilmstudio/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                    <a 
                        href="#" 
                        className="group flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Vimeo"
                    >
                        <Film size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                    <a 
                        href="#" 
                        className="group flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full hover:border-brand hover:bg-brand transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <Facebook size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:items-center">
                 <div className="mb-6 text-brand hidden md:block">
                    <Phone size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Kontakt</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                    +43 664 123 4567<br/>
                    booking@akfilmstudio.com
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
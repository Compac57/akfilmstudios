import React from 'react';

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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-left md:text-center max-w-4xl mx-auto">
            <div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Studio</h4>
                <p className="text-gray-500 font-light">Rathausstraße 1<br/>6900 Bregenz, Österreich</p>
            </div>
            <div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Folgt Uns</h4>
                <div className="flex flex-col space-y-2">
                    <a href="#" className="text-gray-500 hover:text-brand transition-colors">Instagram</a>
                    <a href="#" className="text-gray-500 hover:text-brand transition-colors">Vimeo</a>
                    <a href="#" className="text-gray-500 hover:text-brand transition-colors">Facebook</a>
                </div>
            </div>
            <div>
                <h4 className="text-gray-900 text-xs uppercase tracking-widest mb-4 font-bold">Kontakt</h4>
                <p className="text-gray-500 font-light">+43 664 123 4567<br/>booking@akfilmstudio.com</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
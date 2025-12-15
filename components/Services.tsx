import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Plus } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 bg-white text-gray-800 relative">
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="text-brand text-xs tracking-[0.3em] uppercase block mb-6">Unser Angebot</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">
            Für das <br/> <span className="font-serif-alt italic text-brand">Moderne Paar</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 font-light">
            Wir kombinieren dokumentarische Fotografie mit cineastischem Storytelling. Mit modernsten Sony Alpha Kameras und DJI Drohnen halten wir jedes Detail in kristallklarer Qualität fest.
          </p>
          <a href="#contact" className="inline-flex items-center gap-3 text-sm uppercase tracking-widest border border-gray-300 px-6 py-3 hover:bg-brand hover:border-brand hover:text-white transition-all duration-300 text-gray-600">
            Preise anfragen
          </a>
        </div>

        <div className="lg:col-span-8 space-y-2">
          {SERVICES.map((service) => (
            <div 
                key={service.id} 
                className="group border-b border-gray-100 hover:border-brand transition-colors duration-500 cursor-pointer hover-trigger"
                onMouseEnter={() => setActiveService(service.id)}
            >
              <div className={`py-8 flex justify-between items-center ${activeService === service.id ? 'pl-4' : ''} transition-all duration-300`}>
                <h3 className={`text-2xl md:text-3xl font-serif ${activeService === service.id ? 'text-gray-900' : 'text-gray-400'} group-hover:text-gray-900 transition-colors duration-300`}>
                    {service.title}
                </h3>
                <Plus className={`text-brand transition-transform duration-500 ${activeService === service.id ? 'rotate-45' : 'rotate-0'}`} />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService === service.id ? 'max-h-40 opacity-100 pb-8 pl-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 text-lg max-w-2xl font-light">
                    {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
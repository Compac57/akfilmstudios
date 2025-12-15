import React from 'react';
import { Instagram, Facebook, Film } from 'lucide-react';

const Footer: React.FC = () => {
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      window.location.hash = hash;
  };

  return (
    <footer className="bg-white text-gray-500 py-12 border-t border-gray-100 relative z-40">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-[10px] tracking-widest uppercase text-center md:text-left order-3 md:order-1">
            &copy; {new Date().getFullYear()} AK Film Studio | Vorarlberg.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 order-1 md:order-2">
            <a href="https://www.instagram.com/akfilmstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">
                <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Film size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Facebook size={18} />
            </a>
        </div>

        {/* Legal Links */}
        <div className="flex space-x-8 text-[10px] tracking-widest uppercase order-2 md:order-3">
            <a 
                href="#impressum" 
                onClick={(e) => handleNav(e, '#impressum')}
                className="hover:text-brand transition-colors cursor-pointer"
            >
                Impressum
            </a>
            <a 
                href="#datenschutz" 
                onClick={(e) => handleNav(e, '#datenschutz')}
                className="hover:text-brand transition-colors cursor-pointer"
            >
                Datenschutz
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
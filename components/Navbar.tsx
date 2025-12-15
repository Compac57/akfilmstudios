import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        
        try {
            window.history.pushState(null, '', href);
        } catch (e) {
            // Fallback: Use standard hash or ignore if blocked
            window.location.hash = targetId;
        }
    } else {
        window.location.hash = targetId;
    }
  };

  const navigateHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (window.location.hash) {
          try {
             window.history.pushState("", document.title, window.location.pathname + window.location.search);
             // Ensure hash is visually gone if possible
             window.location.hash = ''; 
          } catch (e) {
             // Fallback
             window.location.hash = ''; 
          }
      } 
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Studio', href: '#studio' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
            ? 'bg-[#E6E5E3]/90 backdrop-blur-md py-4 border-b border-gray-200 text-gray-900 shadow-sm' 
            : 'bg-transparent py-8 text-white'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={navigateHome} className="flex items-center gap-3 group z-50 hover-trigger">
            <img 
                src="/logo.png" 
                alt="AK Film Studio" 
                className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? '' : 'filter brightness-0 invert'}`}
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
            />
            {/* Fallback Text Logo */}
            <div className="hidden flex flex-col items-center">
                <span className={`text-2xl font-serif tracking-widest transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                    AK
                </span>
            </div>
            
            <div className="h-8 w-[1px] bg-brand/50 mx-2"></div>
            <div className="flex flex-col justify-center h-full">
                <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                    Film Studio
                </span>
            </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xs uppercase tracking-[0.2em] font-medium relative group/link hover-trigger transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black' 
                    : 'text-gray-200 hover:text-white'
                }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 hover-trigger focus:outline-none ${isOpen ? 'text-gray-900' : (isScrolled ? 'text-gray-900' : 'text-white')}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-[#E6E5E3] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-3xl uppercase font-serif tracking-widest text-gray-800 hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
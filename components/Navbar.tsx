import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        
        try {
            window.history.pushState(null, '', href);
        } catch (e) {
            window.location.hash = targetId;
        }
    } else {
        // If element doesn't exist (e.g. we are on Impressum page), change hash to trigger router
        window.location.hash = targetId;
    }
  };

  const navigateHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsOpen(false);
      
      const isSubPage = window.location.hash === '#impressum' || window.location.hash === '#datenschutz';

      if (isSubPage) {
          // If on a sub-page, we must force a route update.
          // We push a clean state and dispatch popstate so App.tsx detects it.
          window.history.pushState(null, '', window.location.pathname);
          // Use standard Event to avoid "Script error" or compatibility issues with PopStateEvent constructor
          window.dispatchEvent(new Event('popstate'));
          window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
          // If already on home, just clean URL (optional) and scroll top
          if (window.location.hash) {
              try {
                  window.history.pushState(null, '', window.location.pathname + window.location.search);
              } catch (e) {
                  // ignore
              }
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  const navLinks = [
    { name: 'Studio', href: '#studio' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
            ? 'bg-[#E6E5E3]/95 backdrop-blur-md py-6 border-b border-gray-200 text-gray-900 shadow-sm' 
            : 'bg-transparent py-8 text-white'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center w-full relative z-[130] pointer-events-none">
        
        {/* Logo - Pointer Events Auto to enable clicking */}
        <a href="#" onClick={navigateHome} className="flex items-center gap-3 group hover-trigger shrink-0 pointer-events-auto">
            <img 
                src="/logo.png" 
                alt="AK Film Studio" 
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${isScrolled || isOpen ? '' : 'filter brightness-0 invert'}`}
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
            />
            {/* Fallback Text Logo */}
            <div className="hidden flex flex-col items-center">
                <span className={`text-xl md:text-2xl font-serif tracking-widest transition-colors ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'}`}>
                    AK
                </span>
            </div>
            
            <div className={`h-6 md:h-8 w-[1px] transition-colors mx-1 md:mx-2 ${isScrolled || isOpen ? 'bg-brand' : 'bg-brand/50'}`}></div>
            <div className="flex flex-col justify-center h-full">
                <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled || isOpen ? 'text-gray-600' : 'text-gray-300'}`}>
                    Film Studio
                </span>
            </div>
        </a>

        {/* Desktop Menu & Socials - Pointer Events Auto */}
        <div className="hidden md:flex items-center gap-10 relative z-50 pointer-events-auto">
            {/* Navigation Links */}
            <div className="flex space-x-10">
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

            {/* Divider */}
            <div className={`h-5 w-[1px] transition-colors ${isScrolled ? 'bg-gray-300' : 'bg-white/20'}`}></div>

            {/* Social Icons Desktop */}
            <div className="flex items-center gap-5">
                 <a 
                    href="https://www.instagram.com/akfilmstudio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover-trigger p-2 -m-2 transition-transform duration-300 hover:-translate-y-0.5 ${isScrolled ? 'text-gray-600 hover:text-brand' : 'text-gray-300 hover:text-white'}`}
                    aria-label="Instagram"
                 >
                    <Instagram size={18} />
                 </a>
                 <a 
                    href="mailto:hello@akfilmstudio.com"
                    className={`hover-trigger p-2 -m-2 transition-transform duration-300 hover:-translate-y-0.5 ${isScrolled ? 'text-gray-600 hover:text-brand' : 'text-gray-300 hover:text-white'}`}
                    aria-label="Email kontaktieren"
                 >
                    <Mail size={18} />
                 </a>
            </div>
        </div>

        {/* Mobile Menu Button - Pointer Events Auto */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-[140] relative w-12 h-12 -mr-2 flex items-center justify-center hover-trigger focus:outline-none transition-colors duration-300 pointer-events-auto ${
            isOpen || isScrolled ? 'text-gray-900' : 'text-white'
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} strokeWidth={1.2} /> : <Menu size={32} strokeWidth={1.2} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-[#E6E5E3] z-[110] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-4xl uppercase font-serif tracking-widest text-gray-800 hover:text-brand transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Social Links in Mobile Menu */}
        <div className={`pt-12 flex flex-col items-center gap-6 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-[1px] w-12 bg-brand/30 mb-4"></div>
            <div className="flex gap-8">
              <a 
                href="https://www.instagram.com/akfilmstudio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-brand transition-colors group"
              >
                  <div className="p-3 border border-gray-300 rounded-full group-hover:border-brand transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em]">Instagram</span>
              </a>
              <a 
                href="mailto:hello@akfilmstudio.com"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-2 text-gray-500 hover:text-brand transition-colors group"
              >
                  <div className="p-3 border border-gray-300 rounded-full group-hover:border-brand transition-colors">
                     <Mail size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em]">Email</span>
              </a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
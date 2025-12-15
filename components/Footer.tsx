import React from 'react';

const Footer: React.FC = () => {
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      window.location.hash = hash;
  };

  return (
    <footer className="bg-white text-gray-500 py-10 border-t border-gray-100 relative z-40">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} AK Film Studio | Vorarlberg.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
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
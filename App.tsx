import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

const App: React.FC = () => {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash === '#impressum') {
        setRoute('impressum');
      } else if (hash === '#datenschutz') {
        setRoute('datenschutz');
      } else {
        setRoute('home');
      }
    };

    // LOGIC FOR INITIAL LOAD
    const initialHash = window.location.hash;
    
    // Correctly route based on initial hash
    if (initialHash === '#impressum') {
        setRoute('impressum');
    } else if (initialHash === '#datenschutz') {
        setRoute('datenschutz');
    } else {
        handleNavigation();
    }

    // Listeners for subsequent navigation
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
        window.removeEventListener('hashchange', handleNavigation);
        window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  // Handle scrolling behavior based on route changes
  useEffect(() => {
    if (route === 'home') {
       // If we are at home and there is a hash (e.g. #work), scroll to it
      if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#impressum' && window.location.hash !== '#datenschutz') {
          const id = window.location.hash.replace('#', '');
          // Small delay to ensure DOM is rendered
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth"
              });
            }
          }, 100);
      } else {
          // Default home position (top)
           // Only scroll to top if we didn't just scroll to a section
           if (!window.location.hash || window.location.hash === '#') {
               window.scrollTo({ top: 0, behavior: 'smooth' });
           }
      }
    } else {
        // For Impressum/Datenschutz pages, always start at top
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [route]);

  const renderContent = () => {
    switch (route) {
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-[#F9F9F7] min-h-screen text-gray-800 selection:bg-brand selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
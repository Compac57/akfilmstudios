import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

const App: React.FC = () => {
  const [route, setRoute] = useState('home');
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // 1. Prevent browser from automatically restoring scroll position or jumping to hash
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Function to handle route changes based on hash
    const handleHashChange = () => {
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
        // Force Home Route
        setRoute('home');
        
        // Remove hash to prevent any delayed browser auto-scroll
        if (initialHash) {
            try {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            } catch (e) {
                console.warn('Could not clear hash via history API', e);
            }
        }
        
        // Force scroll to top INSTANTLY
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Listeners for subsequent navigation
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    
    // Mark initial load as done after a brief moment to allow rendering
    setTimeout(() => {
        isInitialLoad.current = false;
    }, 100);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Handle scrolling behavior based on route changes (e.g. from Impressum back to Home#contact)
  useEffect(() => {
    // Do NOT scroll on initial load if we are on home (Hero should be visible)
    if (isInitialLoad.current && route === 'home') {
        return;
    }

    if (route === 'home') {
       const hash = window.location.hash;
       // Only scroll if there is a hash existing now (user clicked nav)
       if (hash && hash !== '#') {
          const id = hash.replace('#', '');
          // Small delay to ensure DOM is rendered
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              const headerOffset = 100;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;
              
              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
            }
          }, 100);
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
            <InstagramFeed />
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
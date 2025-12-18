import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', window.location.pathname);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="pt-40 pb-24 bg-[#F9F9F7] min-h-screen text-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-8">
             <a href="#" onClick={goHome} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-brand transition-colors">
                 <ArrowLeft size={14} /> Zurück zur Startseite
             </a>
        </div>

        <span className="text-brand text-xs tracking-[0.3em] uppercase block mb-6">Rechtliches</span>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12">Impressum</h1>

        <div className="space-y-10 text-gray-600 font-light leading-relaxed">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Angaben gemäß § 5 ECG</h2>
            <p className="mb-2"><strong className="font-medium text-gray-800">AK Film Studio</strong></p>
            <p>Inhaber: [Dein Vor- und Nachname]</p>
            <p>Weiherstrasse 2</p>
            <p>6900 Bregenz</p>
            <p>Österreich</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Kontakt</h2>
            <p>Telefon: +43 664 123 4567</p>
            <p>E-Mail: <a href="mailto:hello@akfilmstudio.com" className="text-brand hover:underline">hello@akfilmstudio.com</a></p>
            <p>Web: www.akfilmstudio.com</p>
          </div>

          {/* Business Details */}
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Gewerbe- & Berufsrechtliche Vorschriften</h2>
            <p><strong>Unternehmensgegenstand:</strong> Filmproduktion, Fotografie</p>
            <p><strong>UID-Nummer:</strong> [ATU12345678]</p>
            <p><strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bezirkshauptmannschaft Bregenz</p>
            <p><strong>Kammerzugehörigkeit:</strong> Wirtschaftskammer Vorarlberg, Fachgruppe Film- und Musikwirtschaft</p>
            <p><strong>Anwendbare Rechtsvorschriften:</strong> Gewerbeordnung (GewO), abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer" className="underline hover:text-brand">www.ris.bka.gv.at</a></p>
          </div>

          {/* Content Responsibility */}
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>

          {/* Copyright */}
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten (insbesondere Bilder, Videos und Texte) unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
          
           {/* Image Credits */}
           <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">Bildnachweise</h2>
            <p>
                Bilder und Grafiken: Unsplash, AK Film Studio.
            </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Impressum;
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Datenschutz: React.FC = () => {
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

        <span className="text-brand text-xs tracking-[0.3em] uppercase block mb-6">Privatsphäre</span>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12">Datenschutz</h1>

        <div className="space-y-10 text-gray-600 font-light leading-relaxed">
          
          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
            <p><strong>Verantwortlicher:</strong></p>
            <p>AK Film Studio<br/>[Dein Name]<br/>Weiherstrasse 2, 6900 Bregenz<br/>hello@akfilmstudio.com</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">2. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Fehlerfreiheit und Optimierung).
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Kontaktformular / E-Mail Kontakt</h3>
            <p>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">3. Cookies & Web Fonts</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Cookies</h3>
            <p>
              Unsere Website verwendet so genannte „Cookies“. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-gray-900 mb-4">4. Ihre Rechte</h2>
            <p>
              Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei uns (hello@akfilmstudio.com) oder der Datenschutzbehörde beschweren.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
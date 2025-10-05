import { Link } from 'react-router-dom';
import './GroteWerken.css';

function GroteWerken() {
  const werken = [
    {
      id: 'doggerland',
      title: 'Herwinnen van Doggerland',
      description: 'Het terugwinnen van het verloren land in de Noordzee - een project dat de Nederlandse ambitie nieuw leven inblaast.',
      path: '/grote-werken/doggerland',
    },
    {
      id: 'culturele-invloed',
      title: 'Culturele Invloed',
      description: 'Het versterken en uitdragen van de Nederlandse cultuur en waarden op wereldniveau.',
      path: '/grote-werken/culturele-invloed',
    },
    {
      id: 'militaire-robotica',
      title: 'Militaire Robotica',
      description: 'Ontwikkeling van geavanceerde robotica en autonome systemen voor defensie en veiligheid.',
      path: '/grote-werken/militaire-robotica',
    },
    {
      id: 'soevereiniteit',
      title: 'Soevereiniteit',
      description: 'Onafhankelijkheid van mondiale machtsstructuren en het herdefiniëren van de Europese Unie naar Nederlands model.',
      path: '/grote-werken/soevereiniteit',
    },
    {
      id: 'digitalisatie-educatie',
      title: 'Digitalisatie van Educatie',
      description: 'Gamification van onderwijs - het transformeren van educatie door inzet van gaming platforms en digitale ervaringen.',
      path: '/grote-werken/digitalisatie-educatie',
    },
    {
      id: 'gezonde-voeding',
      title: 'Gezonde Voeding',
      description: 'Een nationale beweging voor gezonde, duurzame voeding - het transformeren van de Nederlandse voedselcultuur.',
      path: '/grote-werken/gezonde-voeding',
    },
    {
      id: 'digitaal-rechtssysteem',
      title: 'Digitaal Rechtssysteem',
      description: 'Modernisering van het rechtssysteem door digitalisering, AI en blockchain - snellere, transparantere en toegankelijkere rechtspraak.',
      path: '/grote-werken/digitaal-rechtssysteem',
    },
  ];

  return (
    <div className="grote-werken-page">
      <div className="page-header">
        <h1>Grote Werken</h1>
        <div className="header-line"></div>
      </div>

      <div className="content-container">
        <section className="intro-section">
          <p>
            Nederland heeft door de eeuwen heen grote werken verricht die de wereld hebben geïnspireerd.
            Van de Deltawerken tot de VOC, van Rembrandt tot aan moderne waterbeheersing.
            Het is tijd voor een nieuwe generatie ambitieuze projecten.
          </p>
        </section>

        <div className="werken-grid">
          {werken.map((werk) => (
            <Link to={werk.path} key={werk.id} className="werk-panel">
              <h2>{werk.title}</h2>
              <p>{werk.description}</p>
              <span className="read-more">Lees meer →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroteWerken;

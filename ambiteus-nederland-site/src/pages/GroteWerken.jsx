import { Link } from 'react-router-dom';
import './GroteWerken.css';

// Import images for each werk
import doggerlandImg from '../assets/images/Doggerland.jpg';
import nachtwachtImg from '../assets/images/Nachtwacht.jpg';
import deRuyterImg from '../assets/images/DeRuyter.jpg';
import hugoDeGroteImg from '../assets/images/Hugo de Grote.jpg';
import amsterdamImg from '../assets/images/Amsterdam1.jpg';
import landschapImg from '../assets/images/LandschapBijRhenen.jpg';
import erasmusImg from '../assets/images/Erasmus.jpg';

function GroteWerken() {
  const werken = [
    {
      id: 'doggerland',
      title: 'Herwinnen van Doggerland',
      description: 'Het terugwinnen van het verloren land in de Noordzee - een project dat de Nederlandse ambitie nieuw leven inblaast.',
      path: '/grote-werken/doggerland',
      image: doggerlandImg,
    },
    {
      id: 'culturele-invloed',
      title: 'Culturele Invloed',
      description: 'Het versterken en uitdragen van de Nederlandse cultuur en waarden op wereldniveau.',
      path: '/grote-werken/culturele-invloed',
      image: nachtwachtImg,
    },
    {
      id: 'militaire-robotica',
      title: 'Militaire Robotica',
      description: 'Ontwikkeling van geavanceerde robotica en autonome systemen voor defensie en veiligheid.',
      path: '/grote-werken/militaire-robotica',
      image: deRuyterImg,
    },
    {
      id: 'soevereiniteit',
      title: 'Soevereiniteit',
      description: 'Onafhankelijkheid van mondiale machtsstructuren en het herdefiniëren van de Europese Unie naar Nederlands model.',
      path: '/grote-werken/soevereiniteit',
      image: hugoDeGroteImg,
    },
    {
      id: 'digitalisatie-educatie',
      title: 'Digitalisatie van Educatie',
      description: 'Gamification van onderwijs - het transformeren van educatie door inzet van gaming platforms en digitale ervaringen.',
      path: '/grote-werken/digitalisatie-educatie',
      image: amsterdamImg,
    },
    {
      id: 'gezonde-voeding',
      title: 'Gezonde Voeding',
      description: 'Een nationale beweging voor gezonde, duurzame voeding - het transformeren van de Nederlandse voedselcultuur.',
      path: '/grote-werken/gezonde-voeding',
      image: landschapImg,
    },
    {
      id: 'digitaal-rechtssysteem',
      title: 'Digitaal Rechtssysteem',
      description: 'Modernisering van het rechtssysteem door digitalisering, AI en blockchain - snellere, transparantere en toegankelijkere rechtspraak.',
      path: '/grote-werken/digitaal-rechtssysteem',
      image: erasmusImg,
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
              <div className="werk-image-container">
                <img src={werk.image} alt={werk.title} className="werk-image" />
              </div>
              <div className="werk-content">
                <h2>{werk.title}</h2>
                <p>{werk.description}</p>
                <span className="read-more">Lees meer →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroteWerken;

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import TextSection from '../components/TextSection';
import './Home.css';

import heroImage from '../assets/images/Doggerland.jpg';
import afsluitdijk from '../assets/images/Afsluitdijk.avif';
import amsterdam from '../assets/images/Amsterdam1.jpg';
import amsterdamGoudenEeuw1 from '../assets/images/AmsterdamGoudenEeuw1.jpg';
import rotterdamGoudenEeuw from '../assets/images/RotterdamGoudenEeuw.jpg';
import haven from '../assets/images/HavenRotterdam.jpg';
import deltawerken from '../assets/images/Deltawerken2.avif';
import deRuyter from '../assets/images/DeRuyter.jpg';
import flevoland from '../assets/images/Flevoland1.jpg';
import flevoland2 from '../assets/images/Flevoland2.jpg';
import maaslandkering from '../assets/images/Maaslandkering.jpg';
import voc from '../assets/images/VOC.jpg';
import ijburg from '../assets/images/IJburg.jpg';
import nachtwacht from '../assets/images/Nachtwacht.jpg';
import meisjeMetDeParel from '../assets/images/MeisjeMetDeParel.jpg';
import erasmus from '../assets/images/Erasmus.jpg';
import hugoDeGrote from '../assets/images/Hugo de Grote.jpg';
import ridderVanOranje from '../assets/images/RidderVanOranje.jpg';
import landschapBijRhenen from '../assets/images/LandschapBijRhenen.jpg';

// First carousel: Waterworks and engineering
const carouselImages1 = [
  { src: afsluitdijk, alt: 'Afsluitdijk', caption: 'De Afsluitdijk' },
  { src: deltawerken, alt: 'Deltawerken', caption: 'Deltawerken - Meesterwerk van Ingenieurskunst' },
  { src: maaslandkering, alt: 'Maaslandkering', caption: 'Maaslandkering - Moderne Waterbeheersing' },
  { src: flevoland, alt: 'Flevoland', caption: 'Flevoland - Land uit Zee' },
  { src: flevoland2, alt: 'Herwonnen Zuiderzee', caption: 'Herwonnen Zuiderzee' },
  { src: ijburg, alt: 'IJburg - CentrumEiland', caption: 'Centrum Eiland IJburg - Stad uit Zee' },
  { src: haven, alt: 'Haven Rotterdam', caption: 'Rotterdamse Haven' },
];

// Second carousel: Golden Age, paintings, and historical figures
const carouselImages2 = [
  { src: nachtwacht, alt: 'De Nachtwacht', caption: 'De Nachtwacht - Rembrandt van Rijn' },
  { src: voc, alt: 'VOC Schip', caption: 'VOC - Wereldhandel' },
  { src: meisjeMetDeParel, alt: 'Meisje met de Parel', caption: 'Meisje met de Parel - Johannes Vermeer' },
  { src: amsterdam, alt: 'Amsterdam', caption: 'Amsterdam - Het Thuis van de Vrije Geest' },
  { src: rotterdamGoudenEeuw, alt: 'Rotterdam Gouden Eeuw', caption: 'Rotterdam - Handelsstad' },
  { src: deRuyter, alt: 'Michiel de Ruyter', caption: 'Michiel de Ruyter - Maritiem Strateeg' },
  { src: erasmus, alt: 'Desiderius Erasmus', caption: 'Desiderius Erasmus - Vader van de Noordelijke Rennessaince' },
  { src: landschapBijRhenen, alt: 'Landschap bij Rhenen', caption: 'Nederlands Landschap bij Rhenen' },
];

function Home() {
  return (
    <div className="home">
      <Hero
        image={heroImage}
        title="Ambitieus Nederland"
        subtitle="Wij geloven in een Nederland dat weer durft te dromen. Een Nederland dat haar grootsheid herontdekt en de grenzen van het mogelijke verlegt. Samen bouwen we aan een toekomst waardig aan ons verleden."
      />

      <TextSection
        title="Nederlandse Ambitie"
        content={
          <>
            <p>
              Nederland heeft altijd grootse dingen bereikt. Van het bedwingen van de zee tot het creëren van handelsnetwerken die de hele wereld omspanden. Onze voorouders durfden te dromen en brachten die dromen met regelmaat de werkelijkheid in door genialiteit en hard werk te verenigen.
            </p>
            <p>
              Wat Nederland historisch heeft gedaan werkt.
            </p>
            <p>
              Onze voorgangers hebben een onbewoonbaar moeras omgetoverd tot een waar paradijs waar wij elke dag de vruchten van plukken en waar de hele planeet jaloers op is. Daar  mogen we best trots op zijn.
            </p>
            <p>
              Als het Europese huis voor de vrije geest en het vrije woord hielp Nederland innovaties op gebied van wetenschap, filosofie en meer de wereld in.
            </p>
            <p>
              Ambitieus Nederland staat voor een Nederland dat trots op zichzelf is. Een volk dat via het menselijke ratio boven zichzelf uitstijgt en daarmee de grenzen van wat mogelijk werd geacht weet te verleggen.
            </p>
            <p>
              Ambitieus Nederland is het thuis voor Nederlanders met ambitie die willen bijdragen aan de <Link to="/grote-werken">Grote Werken</Link> die op de eeuwige koers van ons pad liggen.
            </p>
            <p>
              Ambitieus Nederland steunt en faciliteerd Grote Werken zoals: <Link to="/grote-werken/doggerland">Herwinnen van Doggerland</Link>, <Link to="/grote-werken/militaire-robotica">Militaire Robotica</Link>, <Link to="/grote-werken/soevereiniteit">Soevereiniteit</Link>, <Link to="/grote-werken/digitale-educatie">Digitale Educatie</Link> en <Link to="/grote-werken/digitaal-rechtssysteem">Digitaal Rechtssysteem</Link>.
            </p>
          </>
        }
        align="center"
      />

      <ImageCarousel images={carouselImages1} />

      <TextSection
        title="Grenzen Verleggen"
        content={
          <>
            <p>
              De geschiedenis leert ons dat Nederlanders op hun best zijn wanneer ze worden uitgedaagd door het onmogelijke. De Deltawerken, de polders, onze handelsgeest - allemaal voorbeelden van wat er mogelijk is met visie en daadkracht.
            </p>
          </>
        }
        align="left"
      />

      <ImageCarousel images={carouselImages2} />

      <TextSection
        title="Innovatie"
        content={
          <>
            <p>
              De toekomst wacht niet. Het is aan ons om de eerste stap te zetten. Om te laten zien dat Nederland nog steeds het land is van innovatie, ondernemerschap en ontembare ambitie.
            </p>
            <p>
              Sluit je bij ons aan en laten we samen bouwen aan een grootser Nederland.
            </p>
          </>
        }
        align="center"
      />
    </div>
  );
}

export default Home;

import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './Doggerland.css';

import heroImage from '../assets/images/Doggerland.jpg';

function Doggerland() {
  return (
    <div className="doggerland-page">
      <Hero
        image={heroImage}
        title="Herwinnen van Doggerland"
        subtitle="Het terugwinnen van het verloren land - een ambitieus project dat de Nederlandse ingenieurskunst en visie op watermanagement naar een nieuw niveau tilt."
      />

      <div className="content-container">
        <TextSection
          title="Het Verloren Land"
          content={
            <>
              <p>
              Waar onze voorgangers ons het cadeau van leefbare, bruikbare en vruchtbare grond hebben nagelaten zitten we wederom gebrekkig aan ruimte. Het is druk in Nederland, elke vierkante meter grond wordt benut.
            </p>
            <p>
              Schaarste op de huizenmarkt dwingt jonge koppels om het beginnen van een familie uit te stellen. Schaarsheid van Nederlandse landbouwgrond dwingt boeren om zich tot in extremis the intensiveren. Onze industrie hijgt met verontreinigende stoffen in de nek van woonwijken en natuurgebieden. 
            </p>
            <p>
              Dit zou niet moeten hoeven.
            </p>
            <p>
              Er is een oplossing. We moeten doen wat we altijd hebben gedaan als we geconfronteerd werden met een gebrek aan ruimte. Landwinning van het water.
            </p>
            <p>
              Het is het lot van Nederland om de Noordzee, het gezonken Doggerland, te herwinnen van de zee.
            </p>
            <p>
                Duizenden jaren geleden strekte zich tussen Nederland en Groot-Brittannië een uitgestrekt landschap uit: Doggerland.
                Dit vruchtbare gebied ging verloren aan de stijgende zeespiegel na de laatste ijstijd.
              </p>
              <p>
                Met moderne technologie en Nederlandse kennis van watermanagement kunnen we dit land terugwinnen.
                Niet alleen als herinnering aan ons verleden, maar als blauwdruk voor de toekomst.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Technische Haalbaarheid"
          content={
            <>
              <p>
                De Deltawerken en de Afsluitdijk hebben bewezen dat Nederland in staat is tot grootse waterstaatkundige projecten.
                Het terugwinnen van delen van Doggerland is de logische volgende stap in deze traditie.
              </p>
              <p>
                Door gebruik te maken van moderne dammen, kunstmatige eilanden en innovatieve landaanwinningstechnieken
                kunnen we stapsgewijs nieuw land creëren in de Noordzee.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Toepassingen en Voordelen"
          content={
            <>
              <p>
                Dit nieuwe land biedt ongeëvenaarde mogelijkheden: ruimte voor duurzame energieopwekking,
                natuurgebieden, innovatieve landbouw en nieuwe woongebieden. Het project creëert werkgelegenheid
                voor generaties en positioneert Nederland als wereldleider in klimaatadaptatie.
              </p>
              <p>
                Bovendien kunnen we de gewonnen ervaring delen met andere landen die worstelen met zeespiegelstijging,
                waarmee we niet alleen Nederland maar de hele wereld vooruithelpen.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Een Nieuw Hoofdstuk"
          content={
            <>
              <p>
                Het Doggerlandproject is meer dan een technisch project - het is een statement.
                Een verklaring dat Nederland nog steeds het land is van visie, innovatie en ontembare ambitie.
              </p>
              <p>
                Samen kunnen we dit nieuwe hoofdstuk schrijven in de Nederlandse geschiedenis.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default Doggerland;

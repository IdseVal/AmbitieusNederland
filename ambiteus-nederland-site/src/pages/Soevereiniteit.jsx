import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './Soevereiniteit.css';

import heroImage from '../assets/images/Hugo de Grote.jpg';

function Soevereiniteit() {
  return (
    <div className="soevereiniteit-page">
      <Hero
        image={heroImage}
        title="Soevereiniteit"
        subtitle="Een onafhankelijk Nederland dat zijn eigen koers vaart - vrij van mondiale machtsstructuren en leidend binnen een vernieuwd Europa."
      />

      <div className="content-container">
        <TextSection
          title="Onafhankelijkheid Heroveren"
          content={
            <>
              <p>
                Nederland heeft een lange traditie van onafhankelijkheid en zelfbeschikking. Van de Tachtigjarige Oorlog
                tot de moderne rechtsstaat - we hebben altijd onze eigen weg gevonden. Het is tijd om die traditie
                te herontdekken in een veranderende geopolitieke wereld.
              </p>
              <p>
                Echte soevereiniteit betekent dat Nederland beslissingen neemt in het belang van het Nederlandse volk,
                niet in dienst van externe machtsstructuren. We moeten onze eigen koers varen, onafhankelijk van
                dominante mondiale krachten.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Onafhankelijk van Machtsblokken"
          content={
            <>
              <p>
                De huidige wereldorde wordt gedomineerd door enkele grote machtsblokken. Nederland moet zich
                losmaken van afhankelijkheid van het US-Israël imperium en een eigen, neutrale positie innemen
                op het wereldtoneel.
              </p>
              <p>
                Dit betekent niet isolationisme, maar strategische onafhankelijkheid. Nederland kan een bemiddelende,
                neutrale rol spelen in mondiale conflicten - zoals Zwitserland dat eeuwenlang heeft gedaan.
                Onze handelsgeest en diplomatieke traditie zijn hiervoor de perfecte basis.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Europa Hervormen"
          content={
            <>
              <p>
                Lidmaatschap van de Europese Unie kan waardevol zijn, maar alleen als de EU zich spiegelt aan
                Nederlandse waarden en bestuursprincipes. Niet andersom. Nederland moet niet buigen voor Brussel,
                maar Brussel moet leren van het Nederlandse model.
              </p>
              <p>
                Nederlandse pragmatiek, directheid, tolerantie en innovatiekracht moeten de leidende principes
                worden binnen de EU. Een Europa gemodelleerd naar Nederlands voorbeeld: federaal waar nodig,
                decentraal waar mogelijk, en altijd gericht op resultaten in plaats van bureaucratie.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Economische Zelfstandigheid"
          content={
            <>
              <p>
                Economische soevereiniteit is cruciaal. Nederland moet investeren in eigen productiecapaciteit,
                energieonafhankelijkheid en voedselzekerheid. Te lang hebben we ons overgeleverd aan mondiale
                toeleveringsketens die ons kwetsbaar maken.
              </p>
              <p>
                Door te investeren in Nederlandse industrie, landbouw en energie kunnen we een economie bouwen
                die weerbaarder is tegen externe schokken en die Nederlandse welvaart voor generaties waarborgt.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Culturele Identiteit"
          content={
            <>
              <p>
                Soevereiniteit gaat niet alleen over politiek en economie, maar ook over cultuur. Nederland moet
                zijn eigen culturele identiteit koesteren en beschermen tegen homogenisering door globale culturen.
              </p>
              <p>
                Dit betekent investeren in Nederlandse taal, kunst, geschiedenis en tradities. Het betekent trots
                zijn op wie we zijn en wat we hebben bereikt. Een soeverein Nederland is een Nederland dat zijn
                eigen verhaal schrijft.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Een Vrij Nederland"
          content={
            <>
              <p>
                De weg naar echte soevereiniteit begint met erkenning dat Nederland groot genoeg is om zijn eigen
                beslissingen te nemen. We zijn een kleine natie met een groot verleden en een nog grotere toekomst.
              </p>
              <p>
                Laten we bouwen aan een Nederland dat vrij is, onafhankelijk, en meester van zijn eigen lot.
                Een Nederland dat respect afdwingt door kracht van ideeën, niet door onderwerping aan machtsblokken.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default Soevereiniteit;

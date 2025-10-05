import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './DigitaalRechtssysteem.css';

import heroImage from '../assets/images/Hugo de Grote.jpg';

function DigitaalRechtssysteem() {
  return (
    <div className="digitaal-rechtssysteem-page">
      <Hero
        image={heroImage}
        title="Digitaal Rechtssysteem"
        subtitle="Revolutioneren van de rechtspraak door technologie - een rechtssysteem dat sneller, transparanter en toegankelijker is voor alle Nederlanders."
      />

      <div className="content-container">
        <TextSection
          title="De Juridische Crisis"
          content={
            <>
              <p>
                Het Nederlandse rechtssysteem kreunt onder de druk: eindeloze wachttijden, torenhoge kosten,
                ondoorzichtige procedures. Rechtzoekenden wachten jaren op uitspraken, juridische bijstand
                is onbetaalbaar voor velen, en het systeem is ontoegankelijk voor burgers zonder juridische kennis.
              </p>
              <p>
                In een tijd waarin we alles digitaal kunnen regelen - van bankieren tot belastingaangifte -
                blijft ons rechtssysteem vastzitten in het papieren tijdperk. Het is tijd voor een fundamentele
                modernisering die technologie inzet om recht toegankelijk te maken voor iedereen.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="AI-Ondersteunde Rechtspraak"
          content={
            <>
              <p>
                Kunstmatige intelligentie kan juridische documenten analyseren, precedenten zoeken en
                rechters ondersteunen bij het nemen van consistente beslissingen. AI kan routinezaken
                versnellen, zodat rechters meer tijd hebben voor complexe gevallen die menselijke afweging vereisen.
              </p>
              <p>
                Door machine learning toe te passen op juridische databases kunnen we patronen identificeren,
                inconsistenties opsporen en ervoor zorgen dat vergelijkbare zaken vergelijkbaar worden behandeld.
                Dit vergroot rechtszekerheid en verkleint willekeur.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Blockchain voor Transparantie"
          content={
            <>
              <p>
                Blockchain-technologie kan onveranderbare, transparante registers creëren van juridische
                procedures, contracten en eigendomsrechten. Elke stap in een rechtszaak wordt gedocumenteerd
                en is traceerbaar, wat fraude voorkomt en vertrouwen vergroot.
              </p>
              <p>
                Smart contracts kunnen automatisch uitvoering geven aan juridische overeenkomsten zodra
                aan voorwaarden is voldaan. Dit elimineert tussenpersonen, verlaagt kosten en voorkomt
                geschillen over interpretatie.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Digitale Rechtsbijstand"
          content={
            <>
              <p>
                AI-gedreven chatbots en juridische assistenten kunnen burgers helpen met basisvragen,
                documenten opstellen en procedures navigeren. Dit maakt juridische kennis toegankelijk
                voor iedereen, niet alleen voor degenen die een dure advocaat kunnen betalen.
              </p>
              <p>
                Online platforms kunnen partijen helpen geschillen op te lossen zonder naar de rechtbank
                te gaan. Mediatie, arbitrage en alternatieve geschillenbeslechting worden toegankelijk,
                betaalbaar en efficiënt door digitalisering.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Snellere Procedures"
          content={
            <>
              <p>
                Digitale dossiers, videoverhoren, online zittingen en geautomatiseerde processtappen kunnen
                doorlooptijden drastisch verkorten. Waar zaken nu jaren duren, kunnen ze in maanden of
                zelfs weken worden afgehandeld.
              </p>
              <p>
                Dit bespaart niet alleen tijd en geld, maar voorkomt ook de psychologische last van
                jarenlange onzekerheid. Snelle rechtspraak is effectieve rechtspraak - gerechtigheid
                die te laat komt, is geen gerechtigheid.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Open Data en Precedenten"
          content={
            <>
              <p>
                Een volledig digitaal en doorzoekbaar archief van alle rechtszaken, uitspraken en
                precedenten maakt het rechtssysteem transparanter en voorspelbaarder. Burgers kunnen
                zelf onderzoeken hoe vergelijkbare zaken zijn behandeld.
              </p>
              <p>
                Open data over rechtspraak stelt onderzoekers, journalisten en burgers in staat om
                het systeem te controleren, patronen te identificeren en verbeteringen voor te stellen.
                Transparantie is de beste garantie voor rechtvaardigheid.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Privacy en Security"
          content={
            <>
              <p>
                Digitalisering van juridische systemen vereist de hoogste beveiligingsstandaarden.
                End-to-end encryptie, zero-knowledge proofs en geavanceerde cybersecurity beschermen
                gevoelige informatie terwijl transparantie waar nodig behouden blijft.
              </p>
              <p>
                Nederlandse expertise in privacy-technologie kan een digitaal rechtssysteem creëren
                dat wereldwijd als voorbeeld dient: technologisch geavanceerd én privacy-respecterend.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Nederlandse Rechtsfilosofie"
          content={
            <>
              <p>
                Hugo de Groot legde fundamenten voor modern internationaal recht. Deze Nederlandse
                traditie van juridische innovatie moeten we voortzetten door het eerste volledig
                gedigitaliseerde rechtssysteem ter wereld te bouwen.
              </p>
              <p>
                Een systeem dat de Nederlandse waarden van rechtvaardigheid, toegankelijkheid en
                efficiëntie combineert met 21e-eeuwse technologie. Een systeem dat wereldwijd wordt
                gekopieerd, net zoals onze juridische denkers eeuwen geleden de wereld beïnvloedden.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Rechtvaardigheid voor Allen"
          content={
            <>
              <p>
                Een digitaal rechtssysteem democratiseert toegang tot gerechtigheid. Niet langer is
                recht alleen voor degenen met diepe zakken en eindeloos geduld. Technologie maakt
                recht sneller, goedkoper en begrijpelijker voor iedereen.
              </p>
              <p>
                Dit is niet alleen een technische verbetering - het is een fundamentele versterking
                van de rechtsstaat. Wanneer elk kind, elke burger toegang heeft tot snel en eerlijk
                recht, is dat een samenleving die trots kan zijn op haar rechtssysteem.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default DigitaalRechtssysteem;

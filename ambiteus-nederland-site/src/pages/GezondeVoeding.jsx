import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './GezondeVoeding.css';

import heroImage from '../assets/images/LandschapBijRhenen.jpg';

function GezondeVoeding() {
  return (
    <div className="gezonde-voeding-page">
      <Hero
        image={heroImage}
        title="Gezonde Voeding"
        subtitle="Een nationale beweging voor gezonde, lokale en duurzame voeding - het terugbrengen van kwaliteit, smaak en gezondheid naar het Nederlandse bord."
      />

      <div className="content-container">
        <TextSection
          title="De Voedselcrisis"
          content={
            <>
              <p>
                Nederland kampt met een stille crisis: ultrabewerkt voedsel, suikerverslaving, obesitas
                en chronische ziekten nemen toe. Onze kinderen groeien op met ongezonde eetgewoonten
                die hun hele leven zullen beïnvloeden.
              </p>
              <p>
                Tegelijkertijd zijn we een van de grootste landbouwexporteurs ter wereld, maar eten we
                zelf steeds meer geïmporteerd, bewerkt voedsel. Het is tijd voor een fundamentele
                heroriëntatie naar gezonde, lokale en eerlijke voeding.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Terug naar Echte Voeding"
          content={
            <>
              <p>
                Echte voeding is onbewerkt, lokaal geproduceerd en seizoensgebonden. Nederlands fruit,
                groenten van Nederlandse bodem, zuivel van Nederlandse koeien, vis uit Nederlandse wateren.
                We moeten terug naar de basis van wat ons lichaam echt nodig heeft.
              </p>
              <p>
                Door directe verbindingen tussen boeren en consumenten te stimuleren, lokale markten
                te ondersteunen en seizoensgebonden voeding te promoten, kunnen we een voedselcultuur
                creëren die zowel gezond als duurzaam is.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Educatie en Bewustwording"
          content={
            <>
              <p>
                Kinderen moeten leren waar hun voedsel vandaan komt, hoe het wordt geproduceerd en
                waarom gezonde keuzes belangrijk zijn. Schooltuinen, kookles op scholen en bezoeken
                aan boerderijen moeten standaard worden in het Nederlandse onderwijs.
              </p>
              <p>
                Door vanaf jonge leeftijd bewustzijn te creëren over voeding, bouwen we aan een
                generatie die gezonde keuzes maakt en de waarde van kwaliteitsvoedsel begrijpt.
                Dit is investeren in de gezondheid van toekomstige generaties.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Steun voor Nederlandse Boeren"
          content={
            <>
              <p>
                Nederlandse boeren zijn de ruggengraat van ons voedselsysteem. Ze verdienen eerlijke
                prijzen voor kwaliteitsproducten in plaats van gedwongen te worden tot industriële
                schaalvergroting en export-gerichte landbouw.
              </p>
              <p>
                Door kleinschalige, biologische en regeneratieve landbouw te stimuleren kunnen we
                boeren ondersteunen die de grond respecteren, biodiversiteit bevorderen en voedsel
                produceren van de hoogste kwaliteit. Dit is goed voor boeren, consumenten én het milieu.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Gezondheid en Zorgkosten"
          content={
            <>
              <p>
                De Nederlandse zorg kreunt onder de last van leefstijlgerelateerde ziekten: diabetes,
                hart- en vaatziekten, obesitas. Deze zijn grotendeels te voorkomen door gezonde voeding.
                Investeren in voedselkwaliteit is investeren in volksgezondheid.
              </p>
              <p>
                Door gezonde voeding toegankelijk en betaalbaar te maken voor iedereen, kunnen we
                zorgkosten drastisch verlagen en tegelijkertijd de levenskwaliteit van miljoenen
                Nederlanders verbeteren. Preventie is beter dan genezen.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Duurzaamheid en Milieu"
          content={
            <>
              <p>
                Lokale, seizoensgebonden voeding vermindert transportemissies, verpakkingsafval en
                voedselkilometers. Regeneratieve landbouw herstelt de bodem, verhoogt biodiversiteit
                en slaat CO2 op. Gezonde voeding en een gezonde planeet gaan hand in hand.
              </p>
              <p>
                Nederland kan een voorbeeld zijn voor de wereld: een land waar voedselproductie
                niet ten koste gaat van het milieu, maar juist bijdraagt aan ecologisch herstel
                en klimaatmitigatie.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Voedselsoevereiniteit"
          content={
            <>
              <p>
                Afhankelijkheid van internationale toeleveringsketens maakt ons kwetsbaar. Nederland
                moet investeren in lokale voedselproductie zodat we in staat zijn onze eigen bevolking
                te voeden met kwaliteitsvoedsel, ongeacht mondiale ontwikkelingen.
              </p>
              <p>
                Voedselsoevereiniteit betekent controle over ons eigen voedselsysteem, van zaad tot bord.
                Het betekent dat Nederlanders toegang hebben tot voedzaam, betaalbaar voedsel dat hier
                wordt geproduceerd door Nederlandse boeren.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Een Gezonde Toekomst"
          content={
            <>
              <p>
                De beweging naar gezonde voeding is meer dan een dieettrend - het is een fundamentele
                transformatie van hoe we denken over eten, gezondheid en onze relatie met de aarde.
                Het is een investering in generaties Nederlanders die gezonder, gelukkiger en
                weerbaarder zijn.
              </p>
              <p>
                Samen kunnen we bouwen aan een Nederland waar gezonde voeding de norm is, waar lokale
                boeren floreren en waar iedereen toegang heeft tot voedsel dat ons lichaam en onze
                planeet voedt in plaats van uitput.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default GezondeVoeding;

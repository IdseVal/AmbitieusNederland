import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './DigitalisatieEducatie.css';

import heroImage from '../assets/images/Amsterdam1.jpg';

function DigitalisatieEducatie() {
  return (
    <div className="digitalisatie-educatie-page">
      <Hero
        image={heroImage}
        title="Digitalisatie van Educatie"
        subtitle="Het transformeren van onderwijs door gamification - het creëren van boeiende, digitale leerervaringen die generaties studenten zullen inspireren."
      />

      <div className="content-container">
        <TextSection
          title="De Toekomst van Leren"
          content={
            <>
              <p>
                Traditioneel onderwijs worstelt met het boeien van jonge generaties die opgegroeid zijn met
                digitale technologie en gaming. Het is tijd voor een radicale hervorming: het omzetten van
                educatie in meeslepende, interactieve ervaringen die leren net zo aantrekkelijk maken als spelen.
              </p>
              <p>
                Door bestaande gaming platforms en games te gebruiken als educatieve tools, kunnen we leren
                transformeren van een plicht naar een passie. Gamification is niet de toekomst van onderwijs -
                het is het heden.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Gaming als Educatief Platform"
          content={
            <>
              <p>
                Minecraft wordt al gebruikt om architectuur en stedenbouw te onderwijzen. Kerbal Space Program
                leert natuurkunde en ruimtevaart. Civilization onderwijst geschiedenis en strategie. Deze games
                bewijzen dat leren en entertainment perfect kunnen samengaan.
              </p>
              <p>
                Nederland moet investeren in de ontwikkeling van educatieve content binnen populaire gaming platforms.
                Door samen te werken met game-ontwikkelaars kunnen we leerprogramma's creëren die kinderen niet
                alleen onderwijzen, maar ook inspireren.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Interactieve Leerervaringen"
          content={
            <>
              <p>
                Virtual reality en augmented reality bieden ongekende mogelijkheden voor immersief leren.
                Stel je voor: geschiedenis leren door virtueel door het Amsterdam van de Gouden Eeuw te wandelen,
                of biologie bestuderen door het menselijk lichaam in 3D te verkennen.
              </p>
              <p>
                Deze technologieën maken abstract leren concreet en toegankelijk. Studenten kunnen experimenteren
                zonder risico, exploreren zonder grenzen, en leren in hun eigen tempo op manieren die aansluiten
                bij hun individuele leerstijl.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Gepersonaliseerd Onderwijs"
          content={
            <>
              <p>
                Digitale platforms maken het mogelijk om onderwijs volledig te personaliseren. AI kan het leertempo,
                de moeilijkheidsgraad en de presentatie van materiaal aanpassen aan elke individuele student.
                Geen kind hoeft meer achter te blijven of zich te vervelen.
              </p>
              <p>
                Door data-analyse kunnen we precies zien waar studenten moeite mee hebben en interventies
                aanbieden op het juiste moment. Gaming mechanics zoals achievement systems en progressive
                difficulty houden studenten gemotiveerd en uitgedaagd.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Sociaal en Collaboratief Leren"
          content={
            <>
              <p>
                Online gaming heeft bewezen dat mensen wereldwijd kunnen samenwerken om complexe problemen op te lossen.
                Multiplayer educatieve games kunnen studenten leren om samen te werken, te communiceren en van
                elkaar te leren - vaardigheden die cruciaal zijn in de moderne wereld.
              </p>
              <p>
                Nederlandse studenten kunnen samenwerken met leeftijdsgenoten wereldwijd, culturele grenzen
                overstijgen en leren in een echt mondiale context. Dit bereidt hen voor op een toekomst waarin
                internationale samenwerking de norm is.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Nederlandse Gaming Industrie"
          content={
            <>
              <p>
                Deze educatieve transformatie creëert ook economische kansen. Nederland kan een wereldleider
                worden in educational gaming, waarmee we zowel exportinkomsten genereren als onze eigen
                studenten het beste onderwijs bieden.
              </p>
              <p>
                Door te investeren in de Nederlandse gaming industrie met focus op educatie, bouwen we aan
                een sector die duizenden banen creëert en Nederlandse innovatiekracht op het wereldtoneel toont.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Een Nieuwe Generatie"
          content={
            <>
              <p>
                Door digitalisatie en gamification van onderwijs bereiden we een generatie voor die niet alleen
                kennis heeft, maar ook de vaardigheden, creativiteit en passie om die kennis toe te passen.
              </p>
              <p>
                Laten we Nederland transformeren tot het meest innovatieve onderwijsland ter wereld - waar
                leren een avontuur is en elke student zijn volledige potentieel kan bereiken.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default DigitalisatieEducatie;

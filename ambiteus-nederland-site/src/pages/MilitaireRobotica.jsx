import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './MilitaireRobotica.css';

import heroImage from '../assets/images/DeRuyter.jpg';

function MilitaireRobotica() {
  return (
    <div className="militaire-robotica-page">
      <Hero
        image={heroImage}
        title="Militaire Robotica"
        subtitle="Ontwikkeling van geavanceerde robotica en autonome systemen - het versterken van Nederlandse defensie en technologische voorsprong."
      />

      <div className="content-container">
        <TextSection
          title="Technologische Voorsprong"
          content={
            <>
              <p>
                In een wereld waar technologie steeds belangrijker wordt voor nationale veiligheid,
                moet Nederland voorop lopen in de ontwikkeling van geavanceerde defensiesystemen.
                Militaire robotica en autonome systemen zijn de toekomst van moderne krijgsmacht.
              </p>
              <p>
                Nederland heeft een rijke traditie van innovatie op defensiegebied. Van de maritieme
                dominantie onder Michiel de Ruyter tot moderne radartechnologie - we kunnen opnieuw
                wereldleider worden in defensie-innovatie.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Autonome Systemen"
          content={
            <>
              <p>
                De ontwikkeling van autonome drone-systemen, onbemande vaartuigen en intelligente
                bewakingssystemen biedt Nederland niet alleen militaire voordelen, maar creëert ook
                een complete nieuwe industrie met duizenden hoogwaardige banen.
              </p>
              <p>
                Door te investeren in kunstmatige intelligentie, machine learning en robotica kunnen
                we systemen ontwikkelen die onze troepen beschermen en onze grenzen bewaken met
                ongekende effectiviteit.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Maritieme Robotica"
          content={
            <>
              <p>
                Als maritieme natie ligt onze kracht traditioneel op zee. Autonome onderzeeboten,
                onbemande oppervlaktevaartuigen en geavanceerde sonar-systemen kunnen de Nederlandse
                marine transformeren tot een hypermoderne zeemacht.
              </p>
              <p>
                Deze technologie is niet alleen bruikbaar voor defensie, maar ook voor kustwacht-operaties,
                reddingsmissies en het beschermen van kritieke infrastructuur zoals windparken en
                onderzeese kabels.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Cybersecurity en AI"
          content={
            <>
              <p>
                Moderne oorlogsvoering speelt zich steeds meer af in het digitale domein. Nederlandse
                expertise in cybersecurity, gecombineerd met geavanceerde AI-systemen, kan ons land
                beschermen tegen digitale dreigingen en tegelijkertijd een exportproduct worden.
              </p>
              <p>
                Door te investeren in defensieve en offensieve cybercapaciteiten bouwen we aan een
                veilig Nederland in een digitaal verbonden wereld.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Economische Kansen"
          content={
            <>
              <p>
                Een sterke defensie-industrie creëert niet alleen nationale veiligheid, maar ook
                economische welvaart. Nederlandse defensiebedrijven kunnen wereldwijd exporteren,
                werkgelegenheid creëren en technologische kennis ontwikkelen die ook in civiele
                sectoren kan worden toegepast.
              </p>
              <p>
                Van medische robotica tot logistieke automatisering - de kennis ontwikkeld voor
                defensie heeft ontelbare civiele toepassingen die de hele Nederlandse economie
                ten goede komen.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Een Veilige Toekomst"
          content={
            <>
              <p>
                Investeren in militaire robotica is investeren in de veiligheid van toekomstige generaties.
                Het is een statement dat Nederland zijn verantwoordelijkheid neemt in een veranderende wereld.
              </p>
              <p>
                Met Nederlandse innovatiekracht en ambitie kunnen we opnieuw laten zien dat klein land,
                grote impact kan hebben op wereldschaal.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default MilitaireRobotica;

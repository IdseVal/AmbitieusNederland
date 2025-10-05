import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import './CultureleInvloed.css';

import heroImage from '../assets/images/Nachtwacht.jpg';

function CultureleInvloed() {
  return (
    <div className="culturele-invloed-page">
      <Hero
        image={heroImage}
        title="Culturele Invloed"
        subtitle="Het versterken en uitdragen van Nederlandse cultuur, kunst en waarden - een missie om onze rijke erfenis te laten schitteren op het wereldtoneel."
      />

      <div className="content-container">
        <TextSection
          title="Nederlandse Cultuur Wereldwijd"
          content={
            <>
              <p>
                Van Rembrandt tot Vermeer, van de VOC tot moderne architectuur - Nederland heeft altijd een
                onevenredige culturele impact gehad op de wereld. Onze Gouden Eeuw straalt nog steeds door
                in musea wereldwijd.
              </p>
              <p>
                Het is tijd om deze traditie nieuw leven in te blazen. Om opnieuw te tonen dat Nederlandse
                cultuur, kunst en innovatie van wereldklasse zijn en blijven.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Kunst en Erfgoed"
          content={
            <>
              <p>
                Nederlandse meesters hebben de kunstwereld veranderd. Onze musea behoren tot de beste ter wereld.
                Maar culturele invloed gaat verder dan het conserveren van het verleden - het gaat om het creëren
                van de toekomst.
              </p>
              <p>
                Door te investeren in hedendaagse kunst, design en cultuur kunnen we een nieuwe generatie
                Nederlandse makers inspireren die de wereld opnieuw zullen verbazen.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Waarden en Normen"
          content={
            <>
              <p>
                Nederlandse waarden - tolerantie, innovatie, handelsgeest, directheid en pragmatisme -
                hebben de moderne wereld gevormd. Van het ontstaan van de moderne rechtsstaat tot
                internationale handel en diplomatie.
              </p>
              <p>
                Deze waarden zijn vandaag de dag relevanter dan ooit. Door ze uit te dragen en te
                praktiseren kunnen we bijdragen aan een betere, meer open wereld.
              </p>
            </>
          }
          align="center"
        />

        <TextSection
          title="Taal en Educatie"
          content={
            <>
              <p>
                Het Nederlands is een rijke taal met een glorieus literair erfgoed. Door onze taal en
                literatuur internationaal te promoten, kunnen we een brug slaan tussen culturen en
                nieuwe generaties kennis laten maken met Nederlandse denkers en schrijvers.
              </p>
              <p>
                Nederlandse universiteiten en kennisinstellingen behoren wereldwijd tot de beste.
                Door deze traditie van excellentie voort te zetten, blijven we bijdragen aan
                mondiale vooruitgang.
              </p>
            </>
          }
          align="left"
        />

        <TextSection
          title="Een Culturele Renaissance"
          content={
            <>
              <p>
                Net zoals de Gouden Eeuw Nederland op de kaart zette als culturele grootmacht,
                kunnen we opnieuw een periode van culturele bloei initiëren. Een tijd waarin
                Nederlandse kunst, muziek, literatuur en denken de wereld inspireren.
              </p>
              <p>
                Samen kunnen we bouwen aan een culturele renaissance die generaties zal inspireren.
              </p>
            </>
          }
          align="center"
        />
      </div>
    </div>
  );
}

export default CultureleInvloed;

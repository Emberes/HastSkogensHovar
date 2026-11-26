import React from "react";
import skyHooves from "../assets/two-horse-against-blue-sky.png"
import workingHooves from "../assets/working-with-horse.png"


export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
    <section className="home-header">
        <div className="home-header__text">

          <h1 className="home-header__title">Hästskogens hovar</h1>
          <p className="home-header__lead">
            Lugn och lyhörd hovvård där hästens välmående står i centrum.
            Jag arbetar i lugn takt, i dialog med både häst och ägare.
            <br></br>
            Hästens bästa i fokus, mitt huvudfokus är hovarna.
            Där målet är att alla mina kunders hästar ska ha funktionella hovar och en bra grund att stå på!
          </p>
        </div>
            <div className="home-header__image-wrapper">
          <img
            src={skyHooves}
            alt="Två hästar som står bredvid varandra mot en blå himmel"
            className="home-header__image"
          />
        </div>
    </section>

    <section className="home-intro">
        <div className="home-section">
        <div className="home-section__text">
          <article className="home-intro__card home-intro__card--combined">
            <h2>Trygg hovvård där din häst står</h2>
            <p>
              Jag kommer ut till ditt stall och anpassar verkning och skoning efter
              just din häst. Fokus ligger på balans, hållbarhet och att göra
              hovvården så stressfri som möjligt.
            </p>

            <h3>Lugn & tydlig</h3>
            <p>
              Jag tar tid på mig, förklarar gärna vad jag gör och lyssnar på både
              häst och ägare.
            </p>

            <h3>Hållbar hovvård</h3>
            <p>
              Fokus på hovens naturliga funktion och långsiktig hållbarhet, inte
              bara nästa skoning.
            </p>

            <h3>Samarbete</h3>
            <p>
              Vid behov samarbetar jag med veterinär eller andra behandlare för
              hästens bästa.
            </p>
          </article>
          </div>
        
          <div className="home-page__image-wrapper">
          <img
            src={workingHooves}
            alt="En hovslagare som ska arbeta med en hästs hovar"
            className="home-page__image"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

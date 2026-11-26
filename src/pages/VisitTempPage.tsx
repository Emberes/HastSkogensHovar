import React from "react";
import horseOnField from "../assets/horse-nelly-field.png";
import "../styles/visitpage.css";

export const VisitPage: React.FC = () => {
  return (
    <div className="visit-page__container">
    <section className="page page--visit">
        <h1>Inför Besöket</h1>
        <p>
        Här hittar du all information du behöver inför ditt besök hos Hästskogens Hovar.
        </p>
         <div className="visit-page__image-wrapper">
          <img
            src={horseOnField}
            alt="Ägare Nelly med sin häst på en äng med skog i bakgrunden"
            className="visit-page__image"
          />
        </div>

      <section className="visit-page__section">
      <h2>Så här går ett besök till</h2>
      <ul className="visit-page__steps">
        <li>
          <strong>Första mötet:</strong> Genomgång av hästens bakgrund, historik
          kring hovarna och eventuella problem.
        </li>
        <li>
          <strong>Bedömning:</strong> Tittar på hovarna i vila och i rörelse för
          att se balans, slitage och eventuella avvikelser.
        </li>
        <li>
          <strong>Behandling/skoning:</strong> Verkning eller skoning anpassad
          efter hästens behov, alltid med målet att stärka hovens naturliga
          funktion.
        </li>
        <li>
          <strong>Råd hem:</strong> Du får tips kring skötsel mellan besöken
          och rekommendationer för uppföljning.
        </li>
      </ul>
      </section>

      <section className="visit-page__section">
      <h2>Om samarbeten</h2>
      <p>
        Vid behov samarbetar vi gärna med veterinär, equiterapeut
        eller andra behandlare för att ge hästen bästa möjliga stöd.
      </p>
      </section>
    </section>
    </div>
  )}

  export default VisitPage;
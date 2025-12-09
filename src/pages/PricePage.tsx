import React, { useState } from "react";

export const PricePage: React.FC = () => {
const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
const [selectedService, setSelectedService] = useState<string | null>(null);

const openBookingPopup = (service?: string) => {setSelectedService(service ?? null);
  setIsBookingPopupOpen(true);
};
    const closeBookingPopup = () => setIsBookingPopupOpen(false);

const email = "info@skogenshovar.se";
const emailSubject = "Bokningsförfrågan – hovslagare";
const emailBody = `Hej!

Jag skulle vilja boka tid för ${selectedService ?? "hovslagning"}. 
{Skriv gärna med mer information om du vill här, så återkommer jag med förslag på tider.}
Namn:
Telefonnummer:
Var hästen står (adress/område):
Hur många hästar:
Önskade dagar/tider:

Vänliga hälsningar,
{Ditt för och efternamn}
`;

const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
  emailSubject
)}&body=${encodeURIComponent(emailBody)}`;


    return (
        <section className="page page--price">
            <h1>Praktisk information om priser och betalning</h1>
        <section className="price-information">
        <div className="price-information__wrapper">
        <div className="price-information__card">

        <h2>Betalning</h2>
        <p>
          Betalning sker via Swish eller faktura efter utfört arbete. Om inget annat är överrenskommet.
        </p>
          <h3>Betalningssätt</h3>
        <ul>
          <li>
            <strong>Swish:</strong> 070-111 111 111 (ange hästens namn som
            meddelande)
          </li>
          <li>
            <strong>Faktura:</strong> Kan ordnas efter överenskommelse.
          </li>
        </ul>
         </div>

    <div className="price-information__card price-information__card--booking">
        <h2>Boka tid</h2>
        <p>
          Det går snabbast att nå mig via <strong>sms</strong> eller{" "}
          <strong>mail</strong>. Skriv gärna med:
        </p>
        <ul>
          <li>Ditt namn</li>
          <li>Var hästen står (adress/område)</li>
          <li>Hur många hästar det gäller</li>
            </ul>

            <button
              type="button"
              className="booking-button"
              onClick={() => openBookingPopup("Boka tid")}
            >
              Boka tid nu
            </button>

                </div>
            </div>
    </section>

    {isBookingPopupOpen && (
        <div className="booking-popup-overlay" onClick={closeBookingPopup}>
            <div className="booking-popup" onClick={(e) => e.stopPropagation()}>
                 <h3>Välj hur du vill boka</h3>
            <p>Välj om du vill boka via sms eller mail:</p>
            <div className="booking-popup__buttons">
                <a  href="sms:+46701111111"
                className="booking-popup__button"
                onClick={closeBookingPopup}
              >
                Boka via SMS
                </a>

                <a href={mailtoHref}
                className="booking-popup__button booking-popup__button--secondary"
                onClick={closeBookingPopup}
              >
                Boka via mail
                </a>
            </div>
              <button
              type="button"
              className="booking-popup__close"
              onClick={closeBookingPopup}
            >
              Avbryt
            </button>
            </div>

        </div>

    )}

         <section className="price-section">
        <h1>Priser</h1>
        <p className="price-section__intro">
          Det här är ungefärliga priser. 
        </p>

        <div className="price-list">
          <article className="price-card">
            <h2 className="price-card__title">Verkning</h2>
    
            <p className="price-card__price">från 500 kr</p>
            <p className="price-card__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus ipsa exercitationem quia quasi voluptates impedit nam officiis accusantium cupiditate. Error velit corporis non corrupti veritatis omnis, culpa alias tenetur!</p>
                <button
                    type="button"
                        className="booking-button"
                            onClick={() => openBookingPopup("Verkning")}>
                            Boka den här tjänsten
                            </button>
          </article>

           <article className="price-card">
            <h2 className="price-card__title">Helskoning</h2>
            <p className="price-card__price">från 1 200 kr</p>
            <p className="price-card__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, fugiat? Tempore ex exercitationem ipsum vitae neque nihil esse provident, eius obcaecati ratione modi temporibus sapiente quod officia fugiat laboriosam? Ducimus!.
            </p>
            <button
                    type="button"
                        className="booking-button"
                            onClick={() => openBookingPopup("Helskoning")}>
                            Boka den här tjänsten
                            </button>
          </article>

           <article className="price-card">
            <h2 className="price-card__title">Halvskoning</h2>
            <p className="price-card__price">från 1500 kr</p>
            <p className="price-card__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus ipsa exercitationem quia quasi voluptates impedit nam officiis accusantium cupiditate. Error velit corporis non corrupti veritatis omnis, culpa alias tenetur!</p>
              <button
                    type="button"
                        className="booking-button"
                            onClick={() => openBookingPopup("Halvskoning")}>
                            Boka den här tjänsten
                            </button>
          </article>

            <article className="price-card">
            <h2 className="price-card__title">Konsultation</h2>
            <p className="price-card__price">från 200000 kr</p>
            <p className="price-card__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus ipsa exercitationem quia quasi voluptates impedit nam officiis accusantium cupiditate. Error velit corporis non corrupti veritatis omnis, culpa alias tenetur!</p>
              <button
                    type="button"
                        className="booking-button"
                            onClick={() => openBookingPopup("Konsultation")}>
                            Boka den här tjänsten
                            </button>
          </article>

          </div>
    </section>


    {/* <section className="price-information">
        <div className="price-information__wrapper">
        <div className="price-information__card">

        <h2>Betalning</h2>
        <p>
          Betalning sker via Swish eller faktura efter utfört arbete. Om inget annat är överrenskommet.
        </p>
          <h3>Betalningssätt</h3>
        <ul>
          <li>
            <strong>Swish:</strong> 070-111 111 111 (ange hästens namn som
            meddelande)
          </li>
          <li>
            <strong>Faktura:</strong> Kan ordnas efter överenskommelse.
          </li>
        </ul>
         </div>

    <div className="price-information__card price-information__card--booking">
        <h2>Boka tid</h2>
        <p>
          Det går snabbast att nå mig via <strong>sms</strong> eller{" "}
          <strong>mail</strong>. Skriv gärna med:
        </p>
        <ul>
          <li>Ditt namn</li>
          <li>Var hästen står (adress/område)</li>
          <li>Hur många hästar det gäller</li>
        </ul>
        </div>
        </div>
    </section> */}
    </section>
    
    )
}
export default PricePage;
import React, { useEffect, useRef, useState } from "react";

export const PricePage: React.FC = () => {
const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
const [selectedService, setSelectedService] = useState<string | null>(null);
const firstPopupButtonRef = useRef<HTMLAnchorElement>(null);

const openBookingPopup = (service?: string) => {setSelectedService(service ?? null);
  setIsBookingPopupOpen(true);
};
    const closeBookingPopup = () => setIsBookingPopupOpen(false);

// Move focus into the popup when it opens, and close it with Escape.
useEffect(() => {
  if (!isBookingPopupOpen) return;
  const previouslyFocused = document.activeElement as HTMLElement | null;
  firstPopupButtonRef.current?.focus();
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsBookingPopupOpen(false);
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    previouslyFocused?.focus();
  };
}, [isBookingPopupOpen]);

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
          Betalning sker via Swish eller faktura efter utfört arbete. Om inget annat är överenskommet.
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
              onClick={() => openBookingPopup()}
            >
              Boka tid nu
            </button>

                </div>
            </div>
    </section>

    {isBookingPopupOpen && (
        <div className="booking-popup-overlay" onClick={closeBookingPopup}>
            <div
              className="booking-popup"
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-popup-title"
              onClick={(e) => e.stopPropagation()}
            >
                 <h3 id="booking-popup-title">Välj hur du vill boka</h3>
            <p>Välj om du vill boka via sms eller mail:</p>
            <div className="booking-popup__buttons">
                <a  href="sms:+46701111111"
                ref={firstPopupButtonRef}
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
              Verkning av alla fyra hovarna för hästar som går barfota. Jag
              bedömer hovarna och hur hästen står och rör sig, och verkar sedan
              utifrån varje hovs naturliga form. Brukar behövas var 6:e till
              8:e vecka, beroende på hästen och årstiden.
            </p>
                <button
                    type="button"
                        className="booking-button"
                            aria-label="Boka verkning"
                            onClick={() => openBookingPopup("Verkning")}>
                            Boka
                            </button>
          </article>

           <article className="price-card">
            <h2 className="price-card__title">Helskoning</h2>
            <p className="price-card__price">från 1 200 kr</p>
            <p className="price-card__desc">
              Skoning på alla fyra hovarna. Hovarna verkas först, sedan anpassas
              och sätts skorna. Passar hästar som behöver extra skydd eller
              grepp, till exempel vid mycket arbete på hårt eller halt underlag.
              Material ingår.
            </p>
            <button
                    type="button"
                        className="booking-button"
                            aria-label="Boka helskoning"
                            onClick={() => openBookingPopup("Helskoning")}>
                            Boka
                            </button>
          </article>

           <article className="price-card">
            <h2 className="price-card__title">Halvskoning</h2>
            <p className="price-card__price">från 1500 kr</p>
            <p className="price-card__desc">
              Skor på framhovarna och verkning av bakhovarna. Framhovarna bär
              mest av hästens vikt, så för många hästar räcker det med skydd
              där. Material ingår.
            </p>
              <button
                    type="button"
                        className="booking-button"
                            aria-label="Boka halvskoning"
                            onClick={() => openBookingPopup("Halvskoning")}>
                            Boka
                            </button>
          </article>

            <article className="price-card">
            <h2 className="price-card__title">Konsultation</h2>
            <p className="price-card__price">från 200000 kr</p>
            <p className="price-card__desc">
              Genomgång av hästens hovar, rörelse och historik, till exempel vid
              hovproblem, inför en övergång till barfota eller när du vill ha en
              andra bedömning. Vi pratar även om foder, miljö och boots, och du
              får en plan för den fortsatta hovvården.
            </p>
              <button
                    type="button"
                        className="booking-button"
                            aria-label="Boka konsultation"
                            onClick={() => openBookingPopup("Konsultation")}>
                            Boka
                            </button>
          </article>

          </div>
    </section>
    </section>
    
    )
}
export default PricePage;
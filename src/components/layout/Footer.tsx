import React from "react";
import instagramIcon from "../../assets/instagram-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";

export const Footer: React.FC = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-inner">
        <div className="app__footer-contact">
          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a className="app__footer-contact-link" href="tel:0701111111"><span>070-11111111</span></a>
          </p>
          <p>
            E-post:{" "}
            <a className="app__footer-contact-link" href="mailto:info@skogenshovar.se">
             <span> info@skogenshovar.se</span>
            </a>
          </p>
        </div>

        <div className="app__footer-social">
          <h2>Sociala medier</h2>
          <a className="app__footer-social-link"
            href="https://www.instagram.com/hastskogenshovar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram ikon" aria-hidden="true" className="app__footer-social-icon"  />
            <span>@hastskogenshovar</span>
          </a>
          <a className="app__footer-social-link"
            href="https://www.facebook.com/hastskogenshovar"
            target="_blank"
            rel="noreferrer"
          >
             <img
              src={facebookIcon}
              alt="facebook ikon"
              aria-hidden="true"
              className="app__footer-social-icon"
            />
            <span>@hastskogenshovar</span>
          </a>
        </div>

        <div className="app__footer-business">
          <h2>Företagsuppgifter</h2>
          <p>Hästskogens Hovar är en del av P.A.K. Service</p>
          <p>Org. nr: 556429-9070</p>
          <p>Godkänd för F-skatt</p>
        </div>
      </div>

      <p className="app__footer-copy">
        © {new Date().getFullYear()} Hästskogens hovar
      </p>
      <p className="app__footer-copy">
        © {new Date().getFullYear()} Elin Suvinen</p>
    </footer>
  );
};

export default Footer;

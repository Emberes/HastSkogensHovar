import React from "react";
import ownerAndHorses from "../assets/nelly-two-horse-blue-sky.jpg";
import "../styles/aboutpage.css";


export const AboutPage: React.FC = () => {
  return (
    <section className="page page--about">
         <h1>Om mig! </h1>
          <h3>
        Hästskogens Hovar drivs av Nelly, som brinner för att hjälpa
        hästar att må bra från grunden. Genom sunda, välmående hovar.
      </h3>
        <div className="about-page__image-wrapper">
          <img
            src={ownerAndHorses}
            alt="Ägare Nelly med två hästar under en blå himmel"
            className="about-page__image"
          />
        </div>

    <div className="about-info__grid">
         <article className="about-intro__card">
      <h2>Mål & filosofi</h2>
      <p>
        Målet är att varje häst ska kunna röra sig naturligt, bekvämt och utan
        onödig smärta. Arbetet utgår alltid från hästens individuella behov,
        temperament och användningsområde.
      </p>

      <p>
        Jag jobbar lugnt, metodiskt och med stort fokus på att
        skapa en trygg upplevelse för både häst och ägare.
      </p>
      </article>

    <article className="about-intro__card">
        <h2>Utbildning & erfarenhet</h2>
        <p>
          Jag studerar till Hovformsspecialist på SANHCP, en yrkesutbildning som
          varvar teori och praktik. Utbildningen ser till hela hästen, inte bara
          hoven: anatomi, hovsjukdomar, foder, tänder och hälsa.
        </p>
        <p>
          Varje hov bedöms individuellt utifrån sin naturliga form. Under
          utbildningen gör jag minst 100 verkningar, följer och dokumenterar
          hästar över tid och har praktik med mentor. Utbildningen avslutas med
          teoretisk och praktisk examen.
        </p>
        <p>
          Grunden lades med en grundkurs i hovvård och erfarenheten från mina
          egna hästar.
        </p>
        <p>
          Läs mer om utbildningen på{" "}
          <a href="https://sanhcp.se/" target="_blank" rel="noreferrer">
            sanhcp.se
          </a>
          .
        </p>
    </article>

    <article className="about-intro__card about-intro__card--wide">
      <h2>Vem är Nelly?</h2>
      <p>
        Nelly var namnet (Hästskogens hovar), studerande till Hovformsspecialist hos @sanhcp.se! 
Hur kom JAG hit? Varför hamnade jag i hovträsket? 
Det hela började med att jag gick en grundkurs, för att kunna hålla efter mina egna hästars fötter mellan varven. 
Men med den kursen ökade mitt intresse för hovar, och vetskapen om att det finns så mycket mer som spelar in för att få bra hovar hos sin häst! 
Resan med mina egna hästar har lärt mig mycket, vi är inte helt i mål än men på väldigt god väg! Ivars understuckna trakter börjar bli trakter och Aramis tidigare belastningsfång och hovbenssänkning är snart sådana minnen man tittar tillbaka på och tänker 
”vi klarade det!” 
I och med det kände jag att utbildningen till  Hovformsspecialist var något för mig, samt arbetet med hästar och samarbetet med hästägare för målet att få fler hästar att må bra i kroppen!
      </p>
      </article>

      </div>

    </section>
  );
};

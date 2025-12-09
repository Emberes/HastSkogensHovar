# Häst Skogens Hovar 🌲🐴

**Status:** Detta projekt är under utveckling (work in progress).

> Strukturen, designen och innehållet kan komma att ändras.

Informativ, responsiv hemsida för hovslagaren **Häst Skogens Hovar**.  
Byggd med **React** och **TypeScript**, med fokus på lugn, tydlig och naturinspirerad design.

---

## 📌 Om projektet

Häst Skogens Hovar är en enkel men genomtänkt webbplats som presenterar:

- vem hovslagaren är
- vilka tjänster som erbjuds
- priser
- praktisk information **inför ett besök**

Sidan är tänkt att kännas trygg, personlig och lätt att läsa – även på mobil.

---

## ✨ Funktioner

- **Navigationsmeny (Navbar)**

  - Sticky (ligger kvar när man scrollar)
  - Anpassad för både desktop och mobil (hamburgermeny)
  - Länkar till alla huvudsidor på sidan

- **Startsida (`HomePage`)**

  - Introduktion till Skogens Hovar
  - Bilder från arbetet med hästarna
  - “Bubblor”/kort med texter om:
    - trygg hovvård
    - lugnt bemötande
    - hållbar hovvård och samarbete

- **Om mig (`AboutPage`)**

  - Bild på ägaren tillsammans med hästarna
  - Kort text om filosofin bakom verksamheten
  - Grid med kort om:
    - mål & filosofi
    - vem Nelly är
    - utbildning & erfarenhet

- **Priser (`PricePage`)**

  - Prislista i en tydlig grid-layout
  - Separat sektion om:
    - betalningssätt (Swish/faktura)
    - hur man enklast bokar tid
  - Knappar för bokning (ex. öppnar mail/sms-klient)

- **Inför besöket (`VisitPage`)**

  - Bild i “mobilformat” centrerad på sidan
  - Steg-för-steg-lista:
    - första mötet
    - bedömning
    - behandling/skoning
    - råd hem
  - Kort text om samarbete med veterinär och andra behandlare

- **Footer (`Footer`)**
  - Kontaktuppgifter (telefon och mail)
  - Länkar till sociala medier (Facebook & Instagram) med ikoner
  - Copyright-rad

---

## 🛠️ Tekniker

Projektet är byggt med:

- **React** (med funktionella komponenter)
- **TypeScript**
- **Vite** (utvecklingsserver & bundler)
- **React Router** för routing mellan sidor
- **Ren CSS** uppdelad per del:
  - separata CSS-filer för t.ex. `home`, `about`, `visit`, `navbar`, `footer`

---

## 🚀 Kom igång

### 1. Förutsättningar

Se till att du har:

- **Node.js**
- **npm** eller **yarn**

### 2. Klona repot

```bash
git clone https://github.com/<ditt-användarnamn>/HastSkogensHovar.git

```

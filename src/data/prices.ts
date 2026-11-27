export type Price = {
  id: string;
  title: string;
  price_text: string;
  description: string;
};

// Prices shown on /priser. Kept as data so they can later move to a database.
export const PRICES: Price[] = [
  {
    id: "verkning",
    title: "Verkning",
    price_text: "från 500 kr",
    description:
      "Verkning av alla fyra hovarna för hästar som går barfota. Jag bedömer hovarna och hur hästen står och rör sig, och verkar sedan utifrån varje hovs naturliga form. Brukar behövas var 6:e till 8:e vecka, beroende på hästen och årstiden.",
  },
  {
    id: "helskoning",
    title: "Helskoning",
    price_text: "från 1 200 kr",
    description:
      "Skoning på alla fyra hovarna. Hovarna verkas först, sedan anpassas och sätts skorna. Passar hästar som behöver extra skydd eller grepp, till exempel vid mycket arbete på hårt eller halt underlag. Material ingår.",
  },
  {
    id: "halvskoning",
    title: "Halvskoning",
    price_text: "från 1500 kr",
    description:
      "Skor på framhovarna och verkning av bakhovarna. Framhovarna bär mest av hästens vikt, så för många hästar räcker det med skydd där. Material ingår.",
  },
  {
    id: "konsultation",
    title: "Konsultation",
    price_text: "från 200000 kr",
    description:
      "Genomgång av hästens hovar, rörelse och historik, till exempel vid hovproblem, inför en övergång till barfota eller när du vill ha en andra bedömning. Vi pratar även om foder, miljö och boots, och du får en plan för den fortsatta hovvården.",
  },
];

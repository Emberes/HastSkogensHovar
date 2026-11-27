// Every route in the site. App.tsx must render a page for each path
// (TypeScript checks this), and /admin lists them.
export const ROUTES = [
  { path: "/", label: "Startsida", inMenu: true },
  { path: "/about", label: "Om mig", inMenu: true },
  { path: "/priser", label: "Priser", inMenu: true },
  { path: "/visit", label: "Inför besöket", inMenu: true },
  { path: "/login", label: "Logga in", inMenu: false },
  { path: "/admin", label: "Admin", inMenu: false },
] as const;

export type RoutePath = (typeof ROUTES)[number]["path"];

// src/App.tsx
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/layout/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PricePage } from "./pages/PricePage";
import { VisitPage } from "./pages/VisitTempPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminPage } from "./pages/AdminPage";
import { Footer } from "./components/layout/Footer";
import { ROUTES, type RoutePath } from "./routes";

// One page per path in ROUTES; TypeScript complains if one is missing.
const pages: Record<RoutePath, ReactNode> = {
  "/": <HomePage />,
  "/about": <AboutPage />,
  "/priser": <PricePage />,
  "/visit": <VisitPage />,
  "/login": <LoginPage />,
  "/admin": <AdminPage />,
};

function App() {
  return (
    <BrowserRouter>
    <div  className= "app">

      <Navbar />

    <main className="app__content">
      <Routes>
        {ROUTES.map((r) => (
          <Route key={r.path} path={r.path} element={pages[r.path]} />
        ))}
      </Routes>
      </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

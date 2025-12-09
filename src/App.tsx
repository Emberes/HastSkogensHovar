// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/layout/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PricePage } from "./pages/PricePage";
import { VisitPage } from "./pages/VisitTempPage";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <div  className= "app">
   
      <Navbar />

    <main className="app__content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/priser" element={<PricePage />} />
        <Route path="/visit" element={<VisitPage />} />
      </Routes>
      </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

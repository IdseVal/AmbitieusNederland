import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Visie from './pages/Visie';
import GroteWerken from './pages/GroteWerken';
import Doggerland from './pages/Doggerland';
import CultureleInvloed from './pages/CultureleInvloed';
import MilitaireRobotica from './pages/MilitaireRobotica';
import Soevereiniteit from './pages/Soevereiniteit';
import DigitalisatieEducatie from './pages/DigitalisatieEducatie';
import GezondeVoeding from './pages/GezondeVoeding';
import DigitaalRechtssysteem from './pages/DigitaalRechtssysteem';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visie" element={<Visie />} />
            <Route path="/grote-werken" element={<GroteWerken />} />
            <Route path="/grote-werken/doggerland" element={<Doggerland />} />
            <Route path="/grote-werken/culturele-invloed" element={<CultureleInvloed />} />
            <Route path="/grote-werken/militaire-robotica" element={<MilitaireRobotica />} />
            <Route path="/grote-werken/soevereiniteit" element={<Soevereiniteit />} />
            <Route path="/grote-werken/digitalisatie-educatie" element={<DigitalisatieEducatie />} />
            <Route path="/grote-werken/gezonde-voeding" element={<GezondeVoeding />} />
            <Route path="/grote-werken/digitaal-rechtssysteem" element={<DigitaalRechtssysteem />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

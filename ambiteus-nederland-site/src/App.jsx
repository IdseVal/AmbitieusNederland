import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Visie from './pages/Visie';
import GroteWerken from './pages/GroteWerken';
import ArticlePage from './pages/ArticlePage';
import MediaEducatie from './pages/MediaEducatie';
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
            <Route path="/grote-werken/:slug" element={<ArticlePage />} />
            <Route path="/media-educatie" element={<MediaEducatie />} />
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

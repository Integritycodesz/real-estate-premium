import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlashDealsBanner from './components/FlashDealsBanner';
import LeadPopup from './components/LeadPopup';
import SocialProofPopup from './components/SocialProofPopup';
import Footer from './components/Footer';
import PreFooterCTA from './components/PreFooterCTA';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import WhyInvest from './pages/WhyInvest';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import ScrollReveal from './components/ScrollReveal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Component to handle conditional global elements
const GlobalContent = () => {
  const location = useLocation();
  const isWhyInvestPage = location.pathname === '/why-invest';

  return (
    <>
      <LeadPopup />
      <SocialProofPopup />
      <CustomCursor />
      <ScrollReveal />
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/why-invest" element={<WhyInvest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Hide PreFooterCTA on Why Invest page as requested */}
      {!isWhyInvestPage && <PreFooterCTA />}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <GlobalContent />
      </div>
    </Router>
  );
}

export default App;

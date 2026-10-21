import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ZEDCertification from './pages/ZEDCertification';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SarpanchSamvad from './pages/SarpanchSamvad';
import Conclave2025 from './pages/Conclave2025';
import TReDSFinancing from './pages/TReDSFinancing';

// Scroll to top on route change
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
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/zed-certification" element={<ZEDCertification />} />
            <Route path="/sarpanch-samvad" element={<SarpanchSamvad />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/conclave-2025" element={<Conclave2025 />} />
            <Route path="/treds-msme-invoice-financing" element={<TReDSFinancing />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </Router>
  );
}

export default App;

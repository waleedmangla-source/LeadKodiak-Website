import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { PlansDiscountsPage } from './pages/PlansDiscountsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactUsPage } from './pages/ContactUsPage';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-cognac-500 selection:text-white">
      <ScrollToTop />
      {/* Header Navigation: Only Home, Services, Our Work, Plans & Discounts + Bear Logo */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/plans-discounts" element={<PlansDiscountsPage />} />

          {/* Footer-Only Accessible Routes */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactUsPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer Navigation: Contains About Us, FAQ, Contact Us, plus Platform links */}
      <Footer />
    </div>
  );
};

export default App;

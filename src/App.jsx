import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Insight } from './components/Insight';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="relative min-h-screen text-white font-display">
      <div className="absolute inset-0 transform rotate-180 -z-10">
        <div className="w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{ backgroundImage: "url('/assets/bg.svg')" }} />
      </div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <Benefits />
              <Services />
              <Pricing />
              <Insight />
              <Testimonial />
              <Footer />
            </>
          } />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Insight />} />
        </Routes>
      </Router>
    </div>
  );
};
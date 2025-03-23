import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBanner from './components/TechBanner';
import Projects from './components/Projects';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-y-auto">
        {/* Navbar */}
        <Navbar />
        
        <main className="overflow-visible min-h-[100vh]">
          {/* Hero Section */}
          <Hero />
          
          {/* Tech Banner */}
          <TechBanner />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Social Section */}
          <SocialSection />
          
          {/* Contact Section */}
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
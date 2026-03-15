import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIShowcase from './components/AIShowcase';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import TurboLaneEngine from './components/TurboLaneEngine';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <AIShowcase />
      <HowItWorks />
      <TurboLaneEngine />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
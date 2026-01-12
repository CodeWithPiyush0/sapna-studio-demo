import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppBtn from './components/WhatsAppBtn';
import About from './components/About';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
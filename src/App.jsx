import React, { useRef } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef(null);

  return (
    <div className="bg-white">
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Team />
        <Testimonials contactRef={contactRef} />
        <Portfolio />
        <ContactForm ref={contactRef} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
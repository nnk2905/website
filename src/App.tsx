import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vehicles from './components/Vehicles';
import WhyChooseUs from './components/WhyChooseUs';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Vehicles />
      <WhyChooseUs />
      <Steps />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
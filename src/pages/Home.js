import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Activities from '../components/Activities';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Activities />
      <Contact />
    </div>
  );
};

export default Home;
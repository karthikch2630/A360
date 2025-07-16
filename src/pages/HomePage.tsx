import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import News from '../components/News';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <News />
    </>
  );
};

export default HomePage;
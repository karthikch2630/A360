import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import News from '../components/Blogs';
import Blogs from '../components/Blogs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Blogs />
    </>
  );
};

export default HomePage;
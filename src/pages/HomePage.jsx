import React from 'react';
import Hero         from '../components/Hero';
import About        from '../components/About';
import Services     from '../components/Services';
import Projects     from '../components/Projects';
import Skills       from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact      from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About     showCta />
      <Services  showCta />
      <Projects  showCta />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

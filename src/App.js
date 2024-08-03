import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import WorkExperience from './components/Experience/Experience';
import Activities from './components/Activities/Activities';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <section id="hero">
          <Hero/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="workExperience">
          <WorkExperience/>
        </section>
        <section id="activities">
          <Activities/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contactMe">
          <ContactMe/>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;




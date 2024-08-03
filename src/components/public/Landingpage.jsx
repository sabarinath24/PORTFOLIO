import React from 'react';
import './Landingpage.css';
import Hero from '../hero/Hero';
import Skills from '../skills/Skills';
import WorkExperience from '../Experience/Experience';
import Activities from '../Activities/Activities';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

const LandingPage = () => {
    return (
        <div className='landing-page'>
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
    );
}

export default LandingPage;

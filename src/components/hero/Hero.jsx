// import React from 'react';
// import { useState, useEffect } from 'react';
// import './Hero.css';
// import profile from '../../assets/image/profile.jpg';
// import html from '../../assets/image/html_1051277.png';
// import css from '../../assets/image/css.png';
// import js from '../../assets/image/java-script_1199124.png';
// import react from '../../assets/image/react.png';
// import python from '../../assets/image/python_5968350.png';
// import sql from '../../assets/image/mysql_1199129.png';

// const Hero = () => {
//     const texts = [
//         "Hi! I'm Sabarinath, Web Developer",
//         "Hi! I'm Sabarinath, Python Developer",
//         "Hi! I'm Sabarinath, Frontend Developer"
//     ];
    
//     const [displayText, setDisplayText] = useState('');
//     const [textIndex, setTextIndex] = useState(0);
//     const [letterIndex, setLetterIndex] = useState(0);
//     const [typing, setTyping] = useState(true);

//     useEffect(() => {
//         if (typing) {
//             if (letterIndex < texts[textIndex].length) {
//                 const timeout = setTimeout(() => {
//                     setDisplayText(prev => prev + texts[textIndex][letterIndex]);
//                     setLetterIndex(prev => prev + 1);
//                 }, 100);
//                 return () => clearTimeout(timeout);
//             } else {
//                 setTyping(false);
//                 setTimeout(() => {
//                     setTyping(true);
//                     setTextIndex((prev) => (prev + 1) % texts.length);
//                     setDisplayText('');
//                     setLetterIndex(0);
//                 }, 1000); 
//             }
//         }
//     }, [typing, letterIndex, textIndex, texts]);

//     return (
//         <section className="hero-container">
//             <div className="hero-content">
//                 <p className='welcome'>WELCOME TO MY PORTFOLIO</p>
//                 <h2>Building Digital Experiences That Inspire..</h2>
//                 <p className='changing-text'>{displayText}</p>
//                 <a href="/Sabarinath.cv.pdf" download className="download-cv-btn">Download CV</a>
//             </div>



//             <div className="hero-img">
//                 <div>
//                     <div className="tech-icon"> 
//                         <img src={html} alt="" className='html' />
//                     </div>
//                     <img src={profile} alt="" className='profile'/>
//                 </div>
//                 <div>
//                     <div className="tech-icon">
//                         <img src={css} alt="" className='css' />
//                     </div>
//                     <div className="tech-icon">
//                         <img src={js} alt="" className='js'/>
//                     </div>
//                     <div className="tech-icon">
//                         <img src={react} alt="" className='react'/>
//                     </div>
//                     <div className="tech-icon">
//                         <img src={python} alt="" className='python' />
//                     </div>
//                     <div className="tech-icon">
//                         <img src={sql} alt="" className='sql'/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero;

import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';
import profile from '../../assets/image/profile.jpg';
import html from '../../assets/image/html_1051277.png';
import css from '../../assets/image/css.png';
import js from '../../assets/image/java-script_1199124.png';
import react from '../../assets/image/react.png';
import python from '../../assets/image/python_5968350.png';
import sql from '../../assets/image/mysql_1199129.png';

const Hero = () => {
    const texts = useMemo(() => [
        "Hi! I'm Sabarinath, Web Developer",
        "Hi! I'm Sabarinath, Python Developer",
        "Hi! I'm Sabarinath, Frontend Developer"
    ], []);

    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (typing) {
            if (letterIndex < texts[textIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + texts[textIndex][letterIndex]);
                    setLetterIndex(prev => prev + 1);
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setTyping(false);
                setTimeout(() => {
                    setTyping(true);
                    setTextIndex(prev => (prev + 1) % texts.length);
                    setDisplayText('');
                    setLetterIndex(0);
                }, 1000);
            }
        }
    }, [typing, letterIndex, textIndex, texts]);

    return (
        <section className="hero-container">
            <div className="hero-content">
                <p className='welcome'>WELCOME TO MY PORTFOLIO</p>
                <h2>Building Digital Experiences That Inspire..</h2>
                <p className='changing-text'>{displayText}</p>
                <a href="/Sabarinath.cv.pdf" download className="download-cv-btn">Download CV</a>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon"> 
                        <img src={html} alt="HTML" className='html' />
                    </div>
                    <img src={profile} alt="Profile" className='profile'/>
                </div>
                <div>
                    <div className="tech-icon">
                        <img src={css} alt="CSS" className='css' />
                    </div>
                    <div className="tech-icon">
                        <img src={js} alt="JavaScript" className='js'/>
                    </div>
                    <div className="tech-icon">
                        <img src={react} alt="React" className='react'/>
                    </div>
                    <div className="tech-icon">
                        <img src={python} alt="Python" className='python' />
                    </div>
                    <div className="tech-icon">
                        <img src={sql} alt="SQL" className='sql'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

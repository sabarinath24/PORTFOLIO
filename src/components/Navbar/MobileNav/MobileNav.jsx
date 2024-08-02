import React from 'react';
import { Link } from 'react-scroll';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'active' : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <p className='logo'><i>P</i>ortfolio</p>
                <ul>
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="workExperience"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Industrial Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="activities"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Activities
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <button className="contact-btn" onClick={() => {}}>
                        <Link
                            to="contactMe"
                            smooth={true}
                            duration={1000}
                            offset={-71}
                            className="menu-item"
                            onClick={toggleMenu}
                        >
                            Hire Me
                        </Link>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;

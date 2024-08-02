import React from 'react';
import { scroller } from 'react-scroll';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <p className='logo'><i>P</i>ortfolio</p>
                    <ul>
                        <li>
                            <a
                                className="menu-item"
                                onClick={() => scrollToSection('hero')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                onClick={() => scrollToSection('skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                onClick={() => scrollToSection('workExperience')}
                            >
                                Industrial Experience
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                onClick={() => scrollToSection('activities')}
                            >
                                Activities
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                onClick={() => scrollToSection('projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            <a
                                onClick={() => scrollToSection('contactMe')}
                            >
                                Hire Me
                            </a>
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        {openMenu ? (
                            <CloseIcon style={{ fontSize: '1.8rem' }} />
                        ) : (
                            <MenuIcon style={{ fontSize: '1.8rem' }} />
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

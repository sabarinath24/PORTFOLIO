// import React from 'react';
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import MobileNav from './MobileNav/MobileNav';

// const Navbar = () => {
//     const [openMenu, setOpenMenu] = React.useState(false);

//     const toggleMenu = () => {
//         setOpenMenu(!openMenu);
//     };

//     const scrollToSection = (sectionId) => {
//         const section = document.getElementById(sectionId);
//         window.scrollTo({
//             top: section.offsetTop - 60,
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <>
//             <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
//             <nav className="nav-wrapper">
//                 <div className="nav-content">
//                     <p className='logo'><i>P</i>ortfolio</p>
//                     <ul>
//                         <li>
//                             <a
//                                 className="menu-item"
//                                 onClick={() => scrollToSection('hero')}
//                             >
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 className="menu-item"
//                                 onClick={() => scrollToSection('skills')}
//                             >
//                                 Skills
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 className="menu-item"
//                                 onClick={() => scrollToSection('workExperience')}
//                             >
//                                 Industrial Experience
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 className="menu-item"
//                                 onClick={() => scrollToSection('activities')}
//                             >
//                                 Activities
//                             </a>
//                         </li>
//                         <li>
//                             <a
//                                 className="menu-item"
//                                 onClick={() => scrollToSection('projects')}
//                             >
//                                 Projects
//                             </a>
//                         </li>
//                         <button className="contact-btn" onClick={() => {}}>
//                             <a
//                                 onClick={() => scrollToSection('contactMe')}
//                             >
//                                 Hire Me
//                             </a>
//                         </button>
//                     </ul>
//                     <button className="menu-btn" onClick={toggleMenu}>
//                         {openMenu ? (
//                             <CloseIcon style={{ fontSize: '1.8rem' }} />
//                         ) : (
//                             <MenuIcon style={{ fontSize: '1.8rem' }} />
//                         )}
//                     </button>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 60, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
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
                                href="#hero"
                                onClick={(e) => scrollToSection(e, 'hero')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                href="#skills"
                                onClick={(e) => scrollToSection(e, 'skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                href="#workExperience"
                                onClick={(e) => scrollToSection(e, 'workExperience')}
                            >
                                Industrial Experience
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                href="#activities"
                                onClick={(e) => scrollToSection(e, 'activities')}
                            >
                                Activities
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu-item"
                                href="#projects"
                                onClick={(e) => scrollToSection(e, 'projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className="contact-btn"
                                href="#contactMe"
                                onClick={(e) => scrollToSection(e, 'contactMe')}
                            >
                                Hire Me
                            </a>
                        </li>
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

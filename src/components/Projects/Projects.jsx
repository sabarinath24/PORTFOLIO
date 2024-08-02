import React, {useRef} from 'react';
import './Projects.css';
import { Project } from '../../utils/data';
import Slider from 'react-slick';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Projectcard from './Projectcard/Projectcard';


const Projects = () => {
    const sliderRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
    ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section className='project-container'>
            <h5>Projects</h5>
            <div className="project-content">
            <div className="arrow-right" onClick={slideRight}>
                    <ChevronRightIcon />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <ChevronLeftIcon />
                </div>
                <Slider ref={sliderRef} {...settings}>
                {Project.map((item) => (
                <Projectcard
                key = {item.title}
                details = {item}
                />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default Projects;

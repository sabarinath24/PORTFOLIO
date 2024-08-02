import React, { useRef } from 'react';
import './Experience.css'
import { industrial_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './experienceCard/ExperienceCard';
import Slider from 'react-slick';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const WorkExperience = () => {
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
        <section className='experience-container'>
            <h5>Industrial Experiences</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <ChevronRightIcon />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <ChevronLeftIcon />
                </div>
                <Slider ref={sliderRef} {...settings}>
                {industrial_EXPERIENCE.map((item) => (
                <ExperienceCard
                key = {item.title}
                details = {item}
                />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience

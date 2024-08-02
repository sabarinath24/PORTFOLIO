import React from 'react';
import './Skillcard.css'

const SkillCard = ({ title, iconUrl, isActive, onClick, classname }) => {
    return (
        <div 
            className={`skills-card ${isActive ? "active" : ""}`}
            onClick={() => onClick()}
        >
            <div className="skill-icon">
                <img src={iconUrl} alt={title} className={classname}/>
            </div>
            <span>{title}</span>
        </div>
    );
};
export default SkillCard
import React from 'react'
import './Activitiescard.css'

const Activitiescard = ({ title, isActive, onClick, classname }) => {
    return (
        <div 
            className={`activitie-card ${isActive ? "active" : ""}`}
            onClick={() => onClick()}
        >
            <span>{title}</span>
        </div>
    );
};

export default Activitiescard;

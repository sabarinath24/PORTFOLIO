import React from 'react'
import './Activitiesinfocard.css'

const Activitiesinfocard = ({heading, skills}) => {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}` }>
                        <div className="skill-info">
                            <ul>
                                <li>{item.skill}</li>
                            </ul>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Activitiesinfocard;


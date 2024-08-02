import React from 'react';
import {useState} from 'react';
import './Activities.css';
import { Activitie } from '../../utils/data';
import Activitiescard from './Acitivitiescard/Activitiescard';
import Activitiesinfocard from './Activitiesinfocard/Activitiesinfocard';

const Activities = () => {
    const [selectedSkill, setSelectedSkill] = useState(Activitie[0]);

    const handleSelectSkill =(data) =>{
        setSelectedSkill(data);
    }
    return (
        <section className="skills-container">
            <h5>Additional Information</h5>
            <div className="skills-content">
                <div className="skills">
                    {Activitie.map((item) => (
                        <Activitiescard
                            key={item.title}
                            title = {item.title}
                            classname={`skill-icon ${item.classname}`}
                            isActive={selectedSkill.title === item.title}
                            onClick={()=>{
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>
                <div className="skills-info">
                    <Activitiesinfocard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    )
}

export default Activities;

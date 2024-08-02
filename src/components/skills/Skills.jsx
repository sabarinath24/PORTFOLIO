import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './skillcard/Skillcard';
import Skillinfocard from './skillinfocard/Skillinfocard';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill =(data) =>{
        setSelectedSkill(data);
    }
    return (
        <section className="skills-container">
            <h5>Technical Proficiency</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
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
                    <Skillinfocard 
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills

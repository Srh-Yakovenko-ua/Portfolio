import React from 'react';
import style from './skill.module.css';


type SkillType = { title: string, description: string };
const Skill: React.FC<SkillType> = (props) => {
    const {title, description} = props
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

export {Skill};
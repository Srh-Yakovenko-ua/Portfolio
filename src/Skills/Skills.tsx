import React from 'react';
import style from './skills.module.css'
import commonContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';

const Skills = () => {
    const descriptionHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta earum fugiat maxime quas tempore.';
    const descriptionCSS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta earum fugiat maxime quas tempore.';
    const descriptionJS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta earum fugiat maxime quas tempore.';
    return (
        <div className={style.skillsBlock}>
            <div className={`${commonContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={descriptionHTML}/>
                    <Skill title={'CSS'} description={descriptionCSS}/>
                    <Skill title={'JS'} description={descriptionJS}/>
                </div>
            </div>
        </div>
    );
};

export {Skills};
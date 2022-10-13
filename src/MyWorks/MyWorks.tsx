import React from 'react';
import style from './my-works.module.css'
import commonContainer from '../common/styles/Container.module.css'
import {Work} from './Work/Work';

const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${commonContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Project</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

export {MyWorks};
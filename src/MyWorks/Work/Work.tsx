import React from 'react';
import style from './work.module.css'

const Work = () => {
    return (
        <div className={style.work}>
            <div className={style.imageContainer}>
                <a href="">Смотреть</a>
            </div>
            <div className={style.descriptionBlock}>
                <span>Название проекта</span>
                <p>Краткое описание</p>
            </div>
        </div>
    );
};

export {Work};
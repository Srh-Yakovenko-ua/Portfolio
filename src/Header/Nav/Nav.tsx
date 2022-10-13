import React from 'react';
import style from './nav.module.css'


const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.lists}>
                <li className={style.list}><a href="#">Главная</a></li>
                <li className={style.list}><a href="#">Скиллы</a></li>
                <li className={style.list}><a href="#">Проекты</a></li>
                <li className={style.list}><a href="#">Контакты</a></li>
            </ul>


        </div>
    );
};

export {Nav};
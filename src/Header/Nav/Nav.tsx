import React from 'react';
import style from './nav.module.css'


const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.lists}>
                <li className={style.list}><a className={style.link} href="#">Главная</a></li>
                <li className={style.list}><a className={style.link} href="#">Скиллы</a></li>
                <li className={style.list}><a className={style.link} href="#">Проекты</a></li>
                <li className={style.list}><a className={style.link} href="#">Контакты</a></li>
            </ul>


        </div>
    );
};

export {Nav};
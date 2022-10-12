import React from 'react';
import style from './main.module.css'
import commonContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={commonContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Serhii Yakovenko</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export {Main};
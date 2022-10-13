import React from 'react';
import style from './footer.module.css'
import commonContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${commonContainer.container} ${style.contactsContainer}`}>
                <h2>Serhii Yakovenko</h2>
                <div className={style.socialBlock}>
                    <div className={style.socialLink}></div>
                    <div className={style.socialLink}></div>
                    <div className={style.socialLink}></div>
                    <div className={style.socialLink}></div>
                </div>
                <small className={style.protectionText}>Все права защищены</small>
            </div>
        </div>
    );
};

export {Footer};
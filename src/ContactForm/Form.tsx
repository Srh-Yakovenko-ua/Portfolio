import React from 'react';
import style from './form.module.css'
import commonContainer from '../common/styles/Container.module.css'

const Form = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${commonContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactsForm}>
                    <input className={style.input} />
                    <input className={style.input}/>
                    <textarea></textarea>
                </form>
                <button type={'submit'}  className={style.btn}>Отправить</button>
            </div>

        </div>
    );
};

export {Form};
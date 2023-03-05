import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './projects.module.css'
import cards from './../../assets/img/cards.png'
import todo from './../../assets/img/todoImg.png'
import country from './../../assets/img/country.jpg'

export const Projects = () => {
  return (
    <div className={`${main.container} ${style.projectsContainer}`}>
      <div className={style.title}>
        <h2>Projects</h2>
      </div>

      <div className={style.projectsWrapper}>
        <div className={`${style.projectsBlock} ${style.cards}`}>
          <h3 className={style.name}>Cards</h3>
          <div className={style.imageContainer}>
            <img src={cards} alt="cards" />
          </div>
          <div className={style.description}>
            <span>
              <span className={style.stackText}>Technology Stack: </span> React, Redux-Toolkit,
              react-redux, redux-thunk, react-router-dom, Formik, Typescript, Redux-persister,
              Material-UI
            </span>
          </div>
          <div className={style.btnBlock}>
            <a
              rel="noopener"
              type="button"
              href="https://igor-tech.github.io/friday-project-cards/"
              target="_blank"
              className={style.btn}
            >
              DEMO
            </a>
            <a
              rel="noopener"
              type="button"
              target="_blank"
              href="https://github.com/igor-tech/friday-project-cards"
              className={style.btn}
            >
              CODE
            </a>
          </div>
        </div>

        <div className={`${style.projectsBlock} ${style.todo}`}>
          <h3 className={style.name}>Todolist</h3>
          <div className={style.imageContainer}>
            <img src={todo} alt="todo" />
          </div>
          <div className={style.description}>
            <span>
              <span className={style.stackText}>Technology Stack: </span> React, Redux, React-redux,
              React-thunk, Typescript, Axios, React-router-dom, Formik, Material UI
            </span>
          </div>
          <div className={style.btnBlock}>
            <a rel="noopener" type="button" className={style.btn}>
              DEMO
            </a>
            <a
              rel="noopener"
              type="button"
              target="_blank"
              href="https://github.com/Srh-Yakovenko-ua/TODOLIST_TS"
              className={style.btn}
            >
              CODE
            </a>
          </div>
        </div>

        <div className={`${style.projectsBlock} ${style.country}`}>
          <h3 className={style.name}>Country Flags</h3>
          <div className={style.imageContainer}>
            <img src={country} alt="country" />
          </div>
          <div className={style.description}>
            <span>
              <span className={style.stackText}>Technology Stack: </span>React, Redux-toolkit,
              Javascript, Typescript, Axios, React-router-dom, Styled-components, React-select
            </span>
          </div>
          <div className={style.btnBlock}>
            <a
              rel="noopener"
              type="button"
              className={style.btn}
              target="_blank"
              href="https://srh-yakovenko-ua.github.io/react-country-flags/"
            >
              DEMO
            </a>
            <a
              rel="noopener"
              type="button"
              target="_blank"
              href={'https://github.com/Srh-Yakovenko-ua/react-country-flags'}
              className={style.btn}
            >
              CODE
            </a>
          </div>
        </div>
        {/*<div className={`${style.projectsBlock} ${style.social}`}></div>*/}
      </div>
    </div>
  )
}

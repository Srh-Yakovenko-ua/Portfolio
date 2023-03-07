import style from './projects.module.css'
import cards from '../../assets/img/cards.png'
import todo from '../../assets/img/todoImg.png'
import country from '../../assets/img/country.jpg'

export const projectsData = [
  {
    animateDuration: style.cards,
    name: 'Cards',
    img: cards,
    description: `React, Redux-Toolkit, React-redux, Redux-thunk,
     React-router-dom, Formik, Typescript, Redux-persister, Material-UI`,
    demo: 'https://igor-tech.github.io/friday-project-cards/',
    code: 'https://github.com/igor-tech/friday-project-cards',
  },
  {
    animateDuration: style.todo,
    name: 'TodoList',
    img: todo,
    description: `React, Redux, React-redux, React-thunk, Typescript,
       Axios, React-router-dom, Formik, Material UI`,
    demo: 'https://srh-yakovenko-ua.github.io/TODOLIST_TS/',
    code: 'https://github.com/Srh-Yakovenko-ua/TODOLIST_TS',
  },
  {
    animateDuration: style.country,
    name: 'Country Flags',
    img: country,
    description: `React, Redux-toolkit, Javascript, 
    Typescript, Axios, React-router-dom, Styled-components, React-select`,
    demo: 'https://srh-yakovenko-ua.github.io/react-country-flags/',
    code: 'https://github.com/Srh-Yakovenko-ua/react-country-flags',
  },
]

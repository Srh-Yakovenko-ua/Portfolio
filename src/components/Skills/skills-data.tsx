import { FaReact } from 'react-icons/fa'
import style from './skills.module.css'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNodedotjs,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { DiGit } from 'react-icons/di'
import React from 'react'

export const skillData = [
  {
    icon: <FaReact className={style.icon} />,
    name: 'React',
    classname: style.react,
  },
  {
    icon: <SiRedux className={style.icon} />,
    name: 'Redux',
    classname: style.redux,
  },
  {
    icon: <SiJavascript className={style.icon} />,
    name: 'JavaScript',
    classname: style.javascript,
  },
  {
    icon: <SiTypescript className={style.icon} />,
    name: 'Typescript',
    classname: style.typescript,
  },
  {
    icon: <AiOutlineCloudServer className={style.icon} />,
    name: (
      <>
        REST-API <br /> Axios
      </>
    ),
    classname: style.axios,
  },
  {
    icon: <SiJest className={style.icon} />,
    name: `Jest`,
    classname: style.jest,
  },
  {
    icon: <DiGit className={style.icon} />,
    name: 'GIT',
    classname: style.git,
  },
  {
    icon: <SiNodedotjs className={style.icon} />,
    name: 'Node JS',
    classname: style.node,
  },
  {
    icon: <SiHtml5 className={style.icon} />,
    name: 'HTML',
    classname: style.html,
  },
  {
    icon: <SiCss3 className={style.icon} />,
    name: 'CSS',
    classname: style.css,
  },
  {
    icon: <SiMui className={style.icon} />,
    name: 'Material-UI',
    classname: style.mui,
  },
  {
    icon: <SiStyledcomponents className={style.icon} />,
    name: (
      <>
        Styled
        <br />
        Component
      </>
    ),
    classname: style.styled,
  },
]

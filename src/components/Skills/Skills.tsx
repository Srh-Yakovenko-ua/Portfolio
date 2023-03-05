import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './skills.module.css'
import { FaReact } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMaterialui,
  SiNodedotjs,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { AiOutlineCloudServer } from 'react-icons/ai'

export const Skills = () => {
  return (
    <div className={`${main.container} ${style.skillsContainer}`}>
      <div className={style.title}>
        <h2>Skills</h2>
      </div>
      <div className={style.skillsWrapper}>
        <div className={`${style.skillsBlock} ${style.react}`}>
          <FaReact className={style.icon} />
          <span className={style.skillName}>React</span>
        </div>
        <div className={`${style.skillsBlock} ${style.redux}`}>
          <SiRedux className={style.icon} />
          <span className={style.skillName}>Redux</span>
        </div>
        <div className={`${style.skillsBlock} ${style.javascript}`}>
          <SiJavascript className={style.icon} />
          <span className={style.skillName}>Javascript</span>
        </div>
        <div className={`${style.skillsBlock} ${style.typescript}`}>
          <SiTypescript className={style.icon} />
          <span className={style.skillName}>Typescript</span>
        </div>
        <div className={`${style.skillsBlock} ${style.axios}`}>
          <AiOutlineCloudServer className={style.icon} />
          <span className={style.skillName}>
            REST-API <br /> Axios
          </span>
        </div>
        <div className={`${style.skillsBlock} ${style.jest}`}>
          <SiJest className={style.icon} />
          <span className={style.skillName}>Jest</span>
        </div>
        <div className={`${style.skillsBlock} ${style.git}`}>
          <DiGit className={style.icon} />
          <span className={style.skillName}>Git</span>
        </div>
        <div className={`${style.skillsBlock} ${style.node}`}>
          <SiNodedotjs className={style.icon} />
          <span className={style.skillName}>Node Js</span>
        </div>

        <div className={`${style.skillsBlock} ${style.html}`}>
          <SiHtml5 className={style.icon} />
          <span className={style.skillName}>HTML</span>
        </div>
        <div className={`${style.skillsBlock} ${style.css}`}>
          <SiCss3 className={style.icon} />
          <span className={style.skillName}>CSS</span>
        </div>
        <div className={`${style.skillsBlock} ${style.mui}`}>
          <SiMaterialui className={style.icon} />
          <span className={style.skillName}>Material UI</span>
        </div>

        <div className={`${style.skillsBlock} ${style.styled}`}>
          <SiStyledcomponents className={style.icon} />
          <span className={style.skillName}>
            Styled <br /> Components
          </span>
        </div>
      </div>
    </div>
  )
}

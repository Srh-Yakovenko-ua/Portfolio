import React from 'react'
import style from './project.module.css'

export const Project: React.FC<{
  animateDurationClass: React.ReactNode
  nameProject: string
  img: string
  code: string
  demo: string
  description: string
}> = ({ animateDurationClass, nameProject, img, code, demo, description }) => {
  return (
    <div className={`${style.projectsBlock} ${animateDurationClass} `}>
      <h3 className={style.name}>{nameProject}</h3>
      <div className={style.imageContainer}>
        <img src={img} alt={nameProject} />
      </div>
      <div className={style.description}>
        <span>
          <span className={style.stackText}>Technology Stack: </span> {description}
        </span>
      </div>
      <div className={style.btnBlock}>
        <a rel="noopener" type="button" href={demo} target="_blank" className={style.btn}>
          DEMO
        </a>
        <a rel="noopener" type="button" target="_blank" href={code} className={style.btn}>
          CODE
        </a>
      </div>
    </div>
  )
}

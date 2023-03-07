import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './projects.module.css'
import { MainTitle } from '../../common/components/MainTitle/MainTitle'
import { Project } from './Project/Project'
import { projectsData } from './projects-data'

export const Projects = () => {
  const projectsLayout = projectsData.map((project) => {
    return (
      <Project
        key={project.name}
        img={project.img}
        description={project.description}
        animateDurationClass={project.animateDuration}
        code={project.code}
        demo={project.demo}
        nameProject={project.name}
      />
    )
  })

  return (
    <div className={`${main.container} ${style.projectsContainer}`}>
      <MainTitle nameTitle="Projects" className={style.animateProjectTitle} />
      <div className={style.projectsWrapper}>{projectsLayout}</div>
    </div>
  )
}

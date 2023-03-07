import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './skills.module.css'
import { MainTitle } from '../../common/components/MainTitle/MainTitle'
import { Skill } from './Skill/Skill'
import { skillData } from './skills-data'

export const Skills = () => {
  const skillsLayout = skillData.map((el, i) => {
    return <Skill key={i} skillName={el.name} className={el.classname} icon={el.icon} />
  })

  return (
    <div className={`${main.container} ${style.skillsContainer}`}>
      <MainTitle nameTitle="Skills" className={style.animateSkillTitle} />
      <div className={style.skillsWrapper}>{skillsLayout}</div>
    </div>
  )
}

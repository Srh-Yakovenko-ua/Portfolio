import React from 'react'
import style from './skill.module.css'

export const Skill: React.FC<{
  className?: any
  skillName: React.ReactNode
  icon: React.ReactNode
}> = ({ className, icon, skillName }) => {
  return (
    <div className={`${style.skillsBlock} ${className}`}>
      {icon}
      <span className={style.skillName}>{skillName}</span>
    </div>
  )
}

import React from 'react'
import style from './main-title.module.css'

export const MainTitle: React.FC<{ nameTitle: string; className?: React.ReactNode }> = ({
  nameTitle,
  className,
}) => {
  return (
    <div className={`${style.title} ${className}`}>
      <h2>{nameTitle}</h2>
    </div>
  )
}

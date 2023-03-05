import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css'

const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? style.active : '')

export const NavBar: React.FC<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}> = ({ isOpen, setIsOpen }) => {
  const closeMenu = () => setIsOpen(false)

  const contentStyle = isOpen ? `${style.content} ${style.activeLink}` : style.content
  return (
    <ul className={contentStyle}>
      <li className={style.list} onClick={closeMenu}>
        <NavLink className={isActive} to={'/'}>
          Home
        </NavLink>
      </li>
      <li className={style.list} onClick={closeMenu}>
        <NavLink className={isActive} to={'/skills'}>
          Skills
        </NavLink>
      </li>
      <li className={style.list} onClick={closeMenu}>
        <NavLink className={isActive} to={'/projects'}>
          Projects
        </NavLink>
      </li>
      <li className={style.list} onClick={closeMenu}>
        <NavLink className={isActive} to={'/contact'}>
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

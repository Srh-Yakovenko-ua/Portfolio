import React, { useState } from 'react'
import style from './header.module.css'
import { NavBar } from './NavBar/NavBar'

import { AiOutlineMenu } from 'react-icons/ai'
import { TfiClose } from 'react-icons/tfi'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.mobileMenu} onClick={handleOpen}>
        {isOpen && <TfiClose className={style.menuIcon} />}
        {!isOpen && <AiOutlineMenu className={style.menuIcon} />}
      </div>

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

import React from 'react'
import { Box, Link, SpeedDial, SpeedDialAction } from '@mui/material'

import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { BsFillShareFill, BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import style from './speed-dial.module.css'
import { speedDial } from './speed-dial'

const actionsSocial = [
  {
    icon: <FaTelegramPlane className={style.telegram} />,
    name: 'Telegram',
    background: '#2AABEE',
    link: 'https://t.me/tellurian_ua',
  },
  {
    icon: <BsLinkedin className={style.linked} />,
    name: 'Linked In',
    background: '#0e76a8',
    link: 'https://www.linkedin.com/in/serhii-yakovenko/',
  },
  {
    icon: <SiCodewars className={style.codewars} />,
    name: 'Codewars',
    background: '#b1361e',
    link: 'https://www.codewars.com/users/Srh-Yakovenko-ua',
  },
  {
    icon: <FaGithub className={style.github} />,
    name: 'Github',
    background: '#141414',
    link: 'https://github.com/Srh-Yakovenko-ua',
  },
]

export const SpeedDialSocial = () => {
  const actionLayout = actionsSocial.map((action) => (
    <Link
      target="_blank"
      component={SpeedDialAction}
      href={action.link}
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      sx={{
        background: action.background,
      }}
    />
  ))

  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={speedDial}
        icon={<BsFillShareFill className={style.share} />}
      >
        {actionLayout}
      </SpeedDial>
    </Box>
  )
}

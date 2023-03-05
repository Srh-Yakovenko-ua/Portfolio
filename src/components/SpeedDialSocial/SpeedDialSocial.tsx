import React from 'react'
import { Box, Link, SpeedDial, SpeedDialAction, styled, Typography } from '@mui/material'

import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { BsFillShareFill, BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import { keyframes } from '@mui/system'
import style from './speed-dial.module.css'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
`

const actions = [
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
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 1,
          '& .MuiSpeedDial-actions': {
            gap: '12px',
          },
          '& .MuiSpeedDial-fab': {
            animation: `${pulse} 2s infinite`,
            background: '#EB274B',
            padding: '10px',
            '&:hover': {
              background: '#EB274B',
              padding: '10px',
            },
          },
        }}
        icon={<BsFillShareFill className={style.share} />}
      >
        {actions.map((action) => (
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
        ))}
      </SpeedDial>
    </Box>
  )
}

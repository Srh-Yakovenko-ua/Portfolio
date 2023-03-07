import React from 'react'
import { Header } from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { SpeedDialSocial } from './common/components/SpeedDialSocial/SpeedDialSocial'
import { Particle } from './common/components/Particle/Particle'

function App() {
  return (
    <>
      <Header />
      <Particle />
      <SpeedDialSocial />
      <Outlet />
    </>
  )
}

export default App

import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './home.module.css'
import ReactTypingEffect from 'react-typing-effect'

export const Home = () => {
  return (
    <div className={main.container}>
      <div className={style.about}>
        <span className={style.hi}>Hello, I am</span>
        <h2 className={style.name}>SERHII YAKOVENKO</h2>
        <ReactTypingEffect
          className={style.developer}
          text={'Front end Developer based in Kharkiv '}
        />
      </div>
    </div>
  )
}

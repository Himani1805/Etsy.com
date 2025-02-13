import React from 'react'
import style from './Header.module.css'
export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.inline}>
        <li><a href="" >Etsy</a></li>
        <li><a href="">Categories</a></li>

      </div>
          <div className={style.inline}>
        <input type="text" placeholder='Search for anything' />
      </div>
      <div className={style.inline}>
        <li><a href="">Sign in</a></li>
        <li><a href="">India</a></li>
        <li><a href="">Faviourtes</a></li>
        <li><a href="">Cart</a></li>
      </div>
    </div>
  )
}






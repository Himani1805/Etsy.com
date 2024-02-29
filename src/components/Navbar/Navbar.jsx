import React from 'react'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={style.nav}>
        <li>
            <a href="#">Shop Deals</a>
        </li>
        <li>
            <a href="#">Home Favourites</a>
        </li>
        <li>
            <a href="#">Fashion Finds</a>
        </li>
        <li>
            <a href="#">Gift Guides</a>
        </li>
        <li>
            <a href="#">Registry</a>
        </li>
    </div>
  )
}

import React from 'react'
import style from './Navbar.module.css'
export default function Navbar() {
    return (
        <div className={style.nav}>
            <a href="#">Shop Deals</a>
            <a href="#">Home Favourites</a>
            <a href="#">Fashion Finds</a>
            <a href="#">Gift Guides</a>
            <a href="#">Registry</a>
        </div>
    )
}

import React from 'react'
import { useState } from "react";
import style from './Footer.module.css'
import styles from "./Footer.module.css";

// import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className={style.footerWrapper} >
      <div className={style.subscribeBlock}>
        <p>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
        <input type="email" placeholder='Enter your email'/>
        <span>Subscribe</span>

      </div>
      <div className={style.etsySlogan} >
        {/* <TfiWorld /> */}
        <img src='public\Logo_Esty\world_hand_logo.svg' alt='world logo' width={36}/>
        <p className={styles.shortText}>Etsy is powered by 100% renewable electricity.</p>
        <span className={styles.fullText}>
          Etsy’s 100% renewable electricity commitment includes the electricity
          used by the data centres that host Etsy.com, the Sell on Etsy app, and
          the Etsy app, as well as the electricity that powers Etsy’s global
          offices and employees working remotely from home in the US.
        </span>
      </div>

      <div className={style.menuEtsyDiv}>
        <div className={style.logoMenuBox}>
          {/* <div className={style.empty}>

          </div> */}
          <div className={style.logoBlock}>
            <img src="public\Logo_Esty\etsy.svg" alt="" width={56} />
            <button className={style.downloadBtn}>Download the Etsy App</button>
          </div>
          <div class={style.footerMenu} className={style.displayInline}>
            <div>
              <h3>Shop</h3>
              <li><a href="">Gift cards</a></li>
              <li><a href="">Etsy Registry</a></li>
              <li><a href="">Sitemap</a></li>
              <li><a href="">Etsy Blog</a></li>
              <li><a href="">Etsy United Kingdom</a></li>
              <li><a href="">Etsy Germany</a></li>
              <li><a href="">Etsy Canada</a></li>

            </div>
            <div>
              <h3>Sell</h3>
              <li><a href="">Sell on Etsy</a></li>
              <li><a href="">Teams</a></li>
              <li><a href="">Fourms</a></li>
              <li><a href="">Affiliate & Creators</a></li>
            </div>
            <div>
              <h3>About</h3>
              <li><a href="">Etsy, Inc. </a></li>
              <li><a href="">Policies</a></li>
              <li><a href="">Investors</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Impact</a></li>
              <li><a href="">Legal imprint</a></li>

            </div>
            <div className={style.social_Logo}>
              <h3>Help</h3>
              <li><a href="">Help Centre</a></li>
              <li><a href="">Privacy settings</a></li>
              <img src="public\Logo_Esty\insta.svg" alt="" width={28} />
              <img src="public\Logo_Esty\facebook.svg" alt="" width={28} />
              <img src="public\Logo_Esty\pinterest.svg" alt="" width={28} />
              <img src="public\Logo_Esty\youtube.svg" alt="" width={28} />
            </div>
          </div>
        </div>
        <div className={style.etsyIndia}>
          <div>
            <button className={style.btnLang}>
              <img src="https://cdn-icons-png.flaticon.com/128/9906/9906480.png" alt="India Flag" className={styles.flagIcon}
              /> <pre> <b >  India   |   English (IN)   |   ₹(INR) </b> </pre>
            </button>

          </div>
          <div className={style.copyRight}>
            <span> © 2025 Etsy, Inc. </span>
            <a href="">Terms of Use</a>
            <a href="">Privacy</a>
            <a href="">Intrest-based ads</a>
            <a href="">Local Shops</a>
            <a href="">Regions</a>
          </div>
        </div>
      </div>
    </div>
  )
}

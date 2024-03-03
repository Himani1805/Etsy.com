import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <div > 
      <div className={style.subscribeBlock}>
        <p>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>

      </div>
      <div className={style.etsySlogan} >
       Etsy’s 100% renewable electricity commitment   includes the electricity used by the data centres that host Etsy.com, the Sell on Etsy app, and the Etsy app, as well as the electricity that powers Etsy’s global offices and employees working remotely from home in the US.
      </div>

      <div >
        <div className={style.logoMenuBox}>
          <div className={style.logoBlock}>
            <img src="https://etsy.app.link/d7nDUdp49V" alt="" />
            <button className={style.downloadBtn}>Download the Etsy App</button>
          </div>
          <div id={style.footerMenu} className={style.displayInline}>
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
            <div>
              <h3>Help</h3>
              <li><a href="">Help Centre</a></li>
              <li><a href="">Privacy settings</a></li>
              <img src="https://www.etsy.com/in-en/social-tracking?network=instagram" alt="" />
              <img src="https://www.etsy.com/in-en/social-tracking?network=facebook" alt="" />
              <img src="https://www.etsy.com/in-en/social-tracking?network=pinterest" alt="" />
              <img src="https://www.etsy.com/in-en/social-tracking?network=twitter" alt="" />
              <img src="https://www.etsy.com/in-en/social-tracking?network=youtube" alt="" />
            </div>
          </div>
        </div>
        <div className={style.etsyIndia}>
          <div>
            <button className={style.btnLang}> <img src=" https://cdn1.iconfinder.com/data/icons/asia-country-flags/" alt=""  /> <b>India | English (IN) | ₹(INR) </b>
            </button>

          </div>
          <div className= {style.copyRight}>
            <span> © 2024 Etsy, Inc. </span>
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

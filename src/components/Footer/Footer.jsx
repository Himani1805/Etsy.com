import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <div > 
      <div>
        <p>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
        <input type="" placeholder='Enter your email' />
        <input type="text" Subscribe/>

      </div>
      <div>
        <p> Etsy’s 100% renewable electricity commitment includes the electricity used by the data centres that host Etsy.com, the Sell on Etsy app, and the Etsy app, as well as the electricity that powers Etsy’s global offices and employees working remotely from home in the US. </p>

      </div>

      <div >
        <div>
          <img src="https://etsy.app.link/d7nDUdp49V" alt="" />
          <input type="text" placeholder='Download the Etsy App' />

        </div>
        <div className={style.displayInline}>
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


          </div>
        </div>
      </div>
    </div>
  )
}

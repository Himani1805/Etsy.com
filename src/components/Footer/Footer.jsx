import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <div className={style.footerWrapper}>
      {/* 1. Renewable Energy Bar */}
      <div className={style.etsySlogan}>
        <img src='/Logo_Esty/world_hand_logo.svg' alt='world logo' width={30} />
        <p className={style.shortText}>Etsy is powered by 100% renewable electricity.</p>
      </div>

      {/* 2. Main Dark Blue Menu Section */}
      <div className={style.menuEtsyDiv}>
        <div className={style.logoMenuBox}>
          {/* Logo Column */}
          <div className={style.logoBlock}>
            <div className={style.orangeLogoBox}>
              <img src="/Logo_Esty/etsy.svg" alt="Etsy Logo" width={50} />
            </div>
            <button className={style.downloadBtn}>Download the Etsy App</button>
          </div>

          {/* Links Columns */}
          <div className={style.footerMenuLinks}>
            <div>
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Gift cards</a></li>
                <li><a href="#">Etsy Registry</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Etsy blog</a></li>
                <li><a href="#">Etsy United Kingdom</a></li>
                <li><a href="#">Etsy Germany</a></li>
                <li><a href="#">Etsy Canada</a></li>
              </ul>
            </div>
            <div>
              <h3>Sell</h3>
              <ul>
                <li><a href="#">Sell on Etsy</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Forums</a></li>
                <li><a href="#">Affiliates &amp; Creators</a></li>
              </ul>
            </div>
            <div>
              <h3>About</h3>
              <ul>
                <li><a href="#">Etsy, Inc.</a></li>
                <li><a href="#">Policies</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Impact</a></li>
                <li><a href="#">Legal imprint</a></li>
              </ul>
            </div>
            <div className={style.helpSocialCol}>
              <h3>Help</h3>
              <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Privacy settings</a></li>
              </ul>
              <div className={style.socialIcons}>
                <img src="/Logo_Esty/insta.svg" alt="Instagram" width={24} />
                <img src="/Logo_Esty/facebook.svg" alt="Facebook" width={24} />
                <img src="/Logo_Esty/pinterest.svg" alt="Pinterest" width={24} />
                <img src="/Logo_Esty/youtube.svg" alt="YouTube" width={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className={style.etsyIndia}>
        <button className={style.btnLang}>
          <img src="https://cdn-icons-png.flaticon.com/128/9906/9906480.png" alt="India Flag" width={24} className={style.flagIcon} />
          <span>India &nbsp;|&nbsp; English (IN) &nbsp;|&nbsp; ₹ (INR)</span>
        </button>
        <div className={style.copyRight}>
          <span>© 2026 Etsy, Inc.</span>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Interest-based ads</a>
          <a href="#">Local Shops</a>
          <a href="#">Regions</a>
        </div>
      </div>
    </div>
  );
}
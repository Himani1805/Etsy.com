import React from 'react'
import style from './DashboardContent.module.css'
import DashboardEtsyIndia from './DashboardContentLink/DashboardEtsyIndia'
import AllCategoryBlock from './DashboardContentLink/AllCategoryBlock'
import PopularGift from './DashboardContentLink/PopularGift'
import FreshBlog from './DashboardContentLink/FreshBlog'
import ScrollCanvas from '../common/ScrollCanvas'
export default function DashboardContent() {
  return (
    <div className={style.dcContainer}>
      <div className={style.dcContainerFirst}>
        <div className={style.recentlyBlock}>
          <h2 className={style.sectionTitle}>Recently viewed &amp; more</h2>
          <ScrollCanvas>
            <div className={style.recentlyGrid}>
              <div className={style.featuredCard}>
                <img src="https://i.etsystatic.com/22616224/r/il/dce68c/4198160014/il_340x270.4198160014_9nra.jpg" alt="Featured" className={style.featuredImg} />
                <div className={style.featuredOverlay}>
                  <h3 className={style.featuredTitle}>Dainty Piercing Jewelry</h3>
                  <span className={style.viewAllText}>View all</span>
                </div>
              </div>
              
              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_340x270.4455425340_9sdf.jpg" alt="14K Solid Gold" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>14K Solid Gold Moissanite Feather...</p>
                  <p className={style.productPrice}>₹ 4,711 <span className={style.oldPrice}>₹ 7,853</span></p>
                </div>
              </div>

              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/47756093/r/il/9baa6a/5612798449/il_340x270.5612798449_ajl6.jpg" alt="Koi Fish" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>1 Pair 16G Gold Koi Fish Stud Earrl...</p>
                  <p className={style.productPrice}>₹ 2,107 <span className={style.oldPrice}>₹ 4,214</span></p>
                </div>
              </div>

              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/34040842/r/il/813dec/5617810051/il_340x270.5617810051_e201.jpg" alt="Diamond Star" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>14K Solid Gold Diamond Star Pierc...</p>
                  <p className={style.productPrice}>₹ 4,120 <span className={style.oldPrice}>₹ 6,338</span></p>
                </div>
              </div>

              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg" alt="Helix Earring" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>Tribal Helix Swirl Earring: Sterling ...</p>
                  <p className={style.productPrice}>₹ 5,015</p>
                </div>
              </div>

              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg" alt="Helix Earring" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>Tribal Helix Swirl Earring: Sterling ...</p>
                  <p className={style.productPrice}>₹ 5,015</p>
                </div>
              </div>

              <div className={style.productCard}>
                <img src="https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg" alt="Helix Earring" />
                <div className={style.productInfo}>
                  <p className={style.productTitle}>Tribal Helix Swirl Earring: Sterling ...</p>
                  <p className={style.productPrice}>₹ 5,015</p>
                </div>
              </div>
            </div>
          </ScrollCanvas>
        </div>
        {/* <div className={style.viewedBlock}>
      </div> */}
      </div>


      {/* Other Sections */}
      <div className={style.dcContainerSecond}>
        {/* Shop by Category  Start from here*/}
        <div className={style.allCategoriesBlock}>
          <AllCategoryBlock />
        </div>
        {/* Popular Gift */}
        <div className={style.popularGift}>
          <PopularGift />
        </div>
        {/* Discover India */}
        <div className={style.discoverIndia}>

        </div>
        {/* Fresh Blog */}
        <div className={style.freshBlog}>
          <FreshBlog />
        </div>
        {/* Etsy India */}
        <div className={style.etsyIndia}>
          <DashboardEtsyIndia />
        </div>
      </div>

    </div>
  )
}

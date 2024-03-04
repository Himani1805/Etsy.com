import React from 'react'
import style from './DashboardContent.module.css'
import DashboardEtsyIndia from './DashboardContentLink/DashboardEtsyIndia'
import AllCategoryBlock from './DashboardContentLink/AllCategoryBlock'
import PopularGift from './DashboardContentLink/PopularGift'
import FreshBlog from './DashboardContentLink/FreshBlog'
export default function DashboardContent() {
  return (
    <div className={style.dcContainer}>
      <div className={style.bgGreen}>
        <h2>Make it personal – shop custom gifts, decor, and on-sale finds now!
        </h2>
      </div>
      <div className={style.categoriesBlock}>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg" />
          <p> Personalised Gifts</p>
        </div>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg" />
          <p> Wall Art</p>
        </div>
        <div>
          <img className={style.img} src=" https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg" />
          <p> Bedding & Blankets</p>
        </div>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg" />
          <p> Jewellery</p>
        </div>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg" />
          <p> Tees & Jumper</p>
        </div>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg" />
          <p> On Sale</p>
        </div>


      </div>
      <div className={style.recentlyBlock}>
        <div>
          <h2> Recently viewed & more </h2>
        </div>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/813dec/5617810051/il_340x270.5617810051_e201.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/47756093/r/il/9baa6a/5612798449/il_340x270.5612798449_ajl6.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_340x270.4455425340_9sdf.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/21435611/r/il/93f7e2/5242634368/il_340x270.5242634368_tbrp.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/1e05d5/5570225496/il_340x270.5570225496_qsys.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/9cffef/5570199752/il_340x270.5570199752_qcwl.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/de9b04/5620663879/il_340x270.5620663879_stl1.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/8593cc/5617816571/il_340x270.5617816571_89u8.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/34040842/r/il/1df8ce/5618353483/il_340x270.5618353483_temq.jpg" alt="" />
        </div>

      </div>
      <div className={style.viewedBlock}>

      </div>

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
  )
}

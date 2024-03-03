import React from 'react'
import style from './DashboardContent.module.css'
import DashboardEtsyIndia from '../components/Dashboard/DashboardEtsyIndia'
export default function DashboardContent() {
  return (
    <div className={style.dcContainer}>
      <div className={style.bgGreen}>
      <h1>Make it personal – shop custom gifts, decor, and on-sale finds now!
      </h1>
      </div>
      <div className={style.categoriesBlock}>
        <div>
          <img className={style.img} src="https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg" />
          <p> Personalised Gifts</p>
        </div>
        <div>
          <img className={style.img}src="https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg"/>
          <p> Wall Art</p>
        </div>
        <div>
          <img className={style.img}src=" https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg" />
          <p> Bedding & Blankets</p>
        </div>
        <div>
          <img className={style.img}src="https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg" />
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
      <div className={ style.recentlyBlock}>
        <div>
          <h3> Recently viewed & more </h3>

        </div>
        <div>
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/813dec/5617810051/il_340x270.5617810051_e201.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/47756093/r/il/9baa6a/5612798449/il_340x270.5612798449_ajl6.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_340x270.4455425340_9sdf.jpg" alt="" />
          <img className={style.img} src="https://i.etsystatic.com/47832933/c/2727/2165/80/554/il/bc8f78/5782831776/il_340x270.5782831776_obxf.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/21435611/r/il/93f7e2/5242634368/il_340x270.5242634368_tbrp.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/1e05d5/5570225496/il_340x270.5570225496_qsys.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/9cffef/5570199752/il_340x270.5570199752_qcwl.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/de9b04/5620663879/il_340x270.5620663879_stl1.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/8593cc/5617816571/il_340x270.5617816571_89u8.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/34040842/r/il/1df8ce/5618353483/il_340x270.5618353483_temq.jpg" alt="" />
        </div>

      </div>
      <div className={ style.viewedBlock}>
        <div>
          <h3> Because you viewed </h3>
          <img src="https://i.etsystatic.com/34040842/r/il/813dec/5617810051/il_75x75.5617810051_e201.jpg" alt="" />
        </div>
        <div>
          <div>
            <img className={style.img}src="https://i.etsystatic.com/29798983/r/il/085280/4859720285/il_680x540.4859720285_slzl.jpg" alt="" />

          </div>
          <div>
            <img className={style.img}src="https://i.etsystatic.com/27234269/r/il/538d95/5352246154/il_340x270.5352246154_p3na.jpg" alt="" />
            <img className={style.img}src="https://i.etsystatic.com/47671050/r/il/a951e8/5480029187/il_340x270.5480029187_cbit.jpg" alt="" />
            <img className={style.img}src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_340x270.4455425340_9sdf.jpg" alt="" />
            <img className={style.img}src="https://i.etsystatic.com/21435611/r/il/93f7e2/5242634368/il_340x270.5242634368_tbrp.jpg" alt="" />
            <img className={style.img}src="https://i.etsystatic.com/26836482/c/2485/1975/276/53/il/c7f029/3829537501/il_340x270.3829537501_em1p.jpg" alt="" />
            <img className={style.img}src="https://i.etsystatic.com/47671050/c/2252/1788/77/647/il/a5fea5/5506446980/il_340x270.5506446980_da1q.jpg" alt="" />

          </div>

        </div>

      </div>
      <div className={ style.allCategoriesBlock}>
        <div>
          <h1>Shop by Category</h1>
        </div>
        <div>
          <div>
          <img className={style.img}src="https://i.etsystatic.com/7770785/r/il/c2ca12/4170703056/il_680x540.4170703056_6bd5.jpg" alt="" />
          <h3>Jewellery</h3>

          </div>
          <div>
          <img className={style.img}src="https://i.etsystatic.com/14304132/c/645/512/77/358/il/f819eb/3087535516/il_680x540.3087535516_9vr4.jpg" alt="" />
          <h3>Home & Living</h3>
          </div>
          <div>
          <img className={style.img}src="https://i.etsystatic.com/24971419/r/il/1902d6/2507719880/il_680x540.2507719880_5x9l.jpg" alt="" />
          <h3>Art & Collectibles</h3>

          </div>

          <img className={style.img}src="https://i.etsystatic.com/14367613/r/il/31778d/4901714835/il_680x540.4901714835_87vm.jpg" alt="" />
          <h3>Accessories</h3>
          <img className={style.img}src="https://i.etsystatic.com/8154976/c/1996/1586/0/477/il/b528a4/5578130110/il_680x540.5578130110_esfy.jpg" alt="" />
          <h3>Clothing</h3>
          <img className={style.img}src="https://i.etsystatic.com/27025196/c/2025/1611/0/0/il/d7ed4a/4993068433/il_680x540.4993068433_99hf.jpg" alt="" />
          <h3>Baby</h3>
          <img className={style.img}src="https://i.etsystatic.com/14409281/c/1588/1262/0/800/il/82cc22/3652976053/il_680x540.3652976053_tvid.jpg" alt="" />
          <h3>Weddings</h3>
          <img className={style.img}src="https://i.etsystatic.com/8622539/r/il/4acc14/2889603059/il_680x540.2889603059_drrd.jpg" alt="" />
          <h3>Craft Supplies & Tools </h3>
          <img className={style.img}src="https://i.etsystatic.com/26182332/r/il/15ac96/3528769661/il_680x540.3528769661_fi5m.jpg" alt="" />
          <h3>Electronics & Accessories</h3>
          <img className={style.img}src="https://i.etsystatic.com/7558906/c/1500/1192/0/858/il/33bab7/4069070654/il_680x540.4069070654_qn0l.jpg" alt="" />
          <h3>Bags & Purses</h3>
          <img className={style.img}src="https://i.etsystatic.com/15246890/r/il/9ff9cc/5775499946/il_680x540.5775499946_is52.jpg" alt="" />
          <h3>Bath & Beauty</h3>
          <img className={style.img}src="https://i.etsystatic.com/37231598/r/il/3559d6/4811063784/il_680x540.4811063784_h329.jpg" alt="" />
          <h3>Books, Films & Music</h3>
          <img className={style.img}src="https://i.etsystatic.com/10610960/c/2000/1589/0/863/il/b921ba/4250484923/il_680x540.4250484923_3f0r.jpg" alt="" />
          <h3>Pets & Supplies</h3>
          <img className={style.img}src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_680x540.4455425340_9sdf.jpg" alt="" />
          <h3>Toys & Games</h3>
          <img className={style.img}src="https://i.etsystatic.com/28443357/c/2144/1704/0/952/il/e12a4b/5795682593/il_680x540.5795682593_miki.jpg" alt="" />
          <h3>Shoes</h3>
          <img className={style.img}src="https://i.etsystatic.com/37231598/r/il/27c1c1/4519144240/il_680x540.4519144240_oc1g.jpg" alt="" />
          <h3>Paper & Party Supplies</h3>
          <img className={style.img} src="https://i.etsystatic.com/8595828/c/2608/2073/89/289/il/9b5143/2264200464/il_680x540.2264200464_4cva.jpg" alt="" />
          <h3>Gifts</h3>
        </div>

      </div>
      <div className={ style.popularGift}>
        <div>
          <h1>Shop our popular gift categories</h1>
        </div>
        <div>
          <img className={style.img}src="https://i.etsystatic.com/5122975/r/il/761bc7/1717689165/il_340x270.1717689165_bpsl.jpg" alt=" " />
          <h3>Annivarsary Gifts</h3>
          <img className={style.img}src="https://i.etsystatic.com/18922075/r/il/a2f6fd/3007384323/il_340x270.3007384323_11i0.jpg" alt="" />
          <h3>Gifts for him</h3>
          <img className={style.img}src="https://i.etsystatic.com/20922675/r/il/4af949/5429391062/il_340x270.5429391062_73r2.jpg" alt="" />
          <h3>Gifts for her</h3>
          <img className={style.img}src="https://i.etsystatic.com/28532188/r/il/8ee76f/3761891932/il_340x270.3761891932_feh5.jpg" alt="" />
          <h3>Personalised gift ideas</h3>
          <img className={style.img} src="https://i.etsystatic.com/6841042/r/il/7fb2c1/3884869020/il_340x270.3884869020_b90j.jpg" alt="" />
          <h3>Wedding gifts</h3>

        </div>

      </div>
      <div className={style.discoverIndia}>
        <div>
          <h1>Discover shops in India</h1>
          <button>Shop from local makers</button>
        </div>
        <div>
          <img className={style.img}src="https://i.etsystatic.com/31592924/r/il/cf4fd2/4409466765/il_570xN.4409466765_d7iu.jpg" alt="" />
          <img src="https://i.etsystatic.com/isla/84e378/51252553/isla_75x75.51252553_9rh29xln.jpg?version=0" alt="" />
          <h3>JasCreationsandCo</h3>
          <img className={style.img}src="https://i.etsystatic.com/39411096/r/il/79ee63/5038959003/il_570xN.5038959003_186v.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/isla/dc6d7d/59529690/isla_75x75.59529690_9pk9e0ay.jpg?version=0" alt="" />
          <h3>ThreadsofindiaArt</h3>
          <img className={style.img}src="https://i.etsystatic.com/31736977/r/il/63fee8/3350077703/il_570xN.3350077703_km0n.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/isla/e6c420/52976859/isla_75x75.52976859_3rcgcgao.jpg?version=0" alt="" />
          <h3>TheBuddhaStudio</h3>
          <img className={style.img}src="https://i.etsystatic.com/17321595/r/il/75bdc3/4769667837/il_570xN.4769667837_ia7r.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/isla/f6085f/68906882/isla_75x75.68906882_gpd0p58x.jpg?version=0" alt="" />
          <h3>BatinHandicrafts</h3>
          <img className={style.img}src="https://i.etsystatic.com/18954143/r/il/c1bccf/2243342703/il_570xN.2243342703_nln7.jpg" alt="" />
          <img src="https://i.etsystatic.com/isla/5177cf/43996537/isla_75x75.43996537_kee80ujd.jpg?version=0" alt="" />
          <h3>NinoshkaIndia</h3>
          <img className={style.img}src="https://i.etsystatic.com/29508955/r/il/731acf/3678894850/il_570xN.3678894850_s8ht.jpg" alt="" />
          <img className={style.img}src="https://i.etsystatic.com/isla/c806bc/66661726/isla_75x75.66661726_ku88a0wc.jpg?version=0" alt="" />
          <h3>ShivaniPatelArt</h3>
        </div>
      </div>
      <div className={style.freshBlog}>
        <div>
          <h1>Fresh from the blog </h1>
          <div>
            <img className={style.img}src="https://i.etsystatic.com/inv/73f1ea/5310016542/inv_620x495.5310016542_ukkxc6qi.jpg?version=0" alt="" />
            <p>Shopping Guides</p>
            <h2>9 Comfy Throws for Cosy Autumn Vibes</h2>
            <p>
              Embrace the snuggling season with stylish throws that will warm your hearts.
            </p>
          </div>
          <div>
            <img className={style.img}src="https://i.etsystatic.com/inv/1b86b2/5514321927/inv_425x340.5514321927_50cniifw.jpg?version=0" alt="" />
            <p>Shopping Guides</p>
            <h2>14 Beautiful Bags That Express Your Unique Style</h2>
            <p>
              Amp up your fashion game with bags that perfectly match your aesthetic.
            </p>
          </div>
          <div>
            <img className={style.img}src="https://i.etsystatic.com/inv/0c0724/5507381345/inv_425x340.5507381345_8imomvyj.jpg?version=0" alt="" />
            <p>Gift Ideas</p>
            <h2>The Best Gift Ideas for Kids of All Ages</h2>
            <p>
              Shop the sweetest surprises for all little ones in your family–these gifts for kids will definitely earn you some brownie points.
            </p>
          </div>
        </div>

      </div>
      <div className={style.etsyIndia}>
      <DashboardEtsyIndia />
      </div>

    </div>
  )
}

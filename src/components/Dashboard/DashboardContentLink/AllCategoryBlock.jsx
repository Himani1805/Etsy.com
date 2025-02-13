import React from 'react'
import style from './AllCategoryBlock.module.css'
export default function AllCategoryBlock() {
    return (
        <div id={style.shopByCategory}>
            {/* <div>
                
            </div> */}
            <h1>Shop by Category</h1>
            <div className={style.categoryBlock}>                
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/7770785/r/il/c2ca12/4170703056/il_680x540.4170703056_6bd5.jpg" alt="" />
                    <h3>Jewellery</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/14304132/c/645/512/77/358/il/f819eb/3087535516/il_680x540.3087535516_9vr4.jpg" alt="" />
                    <h3>Home & Living</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/24971419/r/il/1902d6/2507719880/il_680x540.2507719880_5x9l.jpg" alt="" />
                    <h3>Art & Collectibles</h3>

                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/14367613/r/il/31778d/4901714835/il_680x540.4901714835_87vm.jpg" alt="" />
                    <h3>Accessories</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/8154976/c/1996/1586/0/477/il/b528a4/5578130110/il_680x540.5578130110_esfy.jpg" alt="" />
                    <h3>Clothing</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/27025196/c/2025/1611/0/0/il/d7ed4a/4993068433/il_680x540.4993068433_99hf.jpg" alt="" />
                    <h3>Baby</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/14409281/c/1588/1262/0/800/il/82cc22/3652976053/il_680x540.3652976053_tvid.jpg" alt="" />
                    <h3>Weddings</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/8622539/r/il/4acc14/2889603059/il_680x540.2889603059_drrd.jpg" alt="" />
                    <h3>Craft Supplies & Tools </h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/26182332/r/il/15ac96/3528769661/il_680x540.3528769661_fi5m.jpg" alt="" />
                    <h3>Electronics & Accessories</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/7558906/c/1500/1192/0/858/il/33bab7/4069070654/il_680x540.4069070654_qn0l.jpg" alt="" />
                    <h3>Bags & Purses</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/15246890/r/il/9ff9cc/5775499946/il_680x540.5775499946_is52.jpg" alt="" />
                    <h3>Bath & Beauty</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/37231598/r/il/3559d6/4811063784/il_680x540.4811063784_h329.jpg" alt="" />
                    <h3>Books, Films & Music</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/10610960/c/2000/1589/0/863/il/b921ba/4250484923/il_680x540.4250484923_3f0r.jpg" alt="" />
                    <h3>Pets & Supplies</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/22616224/r/il/b6322e/4455425340/il_680x540.4455425340_9sdf.jpg" alt="" />
                    <h3>Toys & Games</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/28443357/c/2144/1704/0/952/il/e12a4b/5795682593/il_680x540.5795682593_miki.jpg" alt="" />
                    <h3>Shoes</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/37231598/r/il/27c1c1/4519144240/il_680x540.4519144240_oc1g.jpg" alt="" />
                    <h3>Paper & Party Supplies</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/8595828/c/2608/2073/89/289/il/9b5143/2264200464/il_680x540.2264200464_4cva.jpg" alt="" />
                    <h3>Gifts</h3>
                </div>
            </div>

        </div>
    )
}

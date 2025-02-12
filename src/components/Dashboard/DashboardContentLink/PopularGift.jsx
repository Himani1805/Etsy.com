import React from 'react'
import style from './PopularGift.module.css'

export default function PopularGift() {
    return (
        <div className={style.popularGiftBlock}>
            <div>
                <h1>Shop our popular gift categories</h1>
            </div>
            <div className={style.giftLink}>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/5122975/r/il/761bc7/1717689165/il_340x270.1717689165_bpsl.jpg" alt=" " />
                    <h3>Annivarsary Gifts</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/18922075/r/il/a2f6fd/3007384323/il_340x270.3007384323_11i0.jpg" alt="" />
                    <h3>Gifts for him</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/20922675/r/il/4af949/5429391062/il_340x270.5429391062_73r2.jpg" alt="" />
                    <h3>Gifts for her</h3>
                </div>
                <div>
                    <img className={style.img} src="https://i.etsystatic.com/28532188/r/il/8ee76f/3761891932/il_340x270.3761891932_feh5.jpg" alt="" />
                    <h3>Personalised gift ideas</h3>
                </div>
                {/* <div>
                    <img className={style.img} src="https://i.etsystatic.com/6841042/r/il/7fb2c1/3884869020/il_340x270.3884869020_b90j.jpg" alt="" />
                    <h3>Wedding gifts</h3>
                </div> */}
            </div>
        </div>
    )
}

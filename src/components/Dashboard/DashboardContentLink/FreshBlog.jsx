import React from 'react'
import style from './FreshBlog.module.css'
export default function FreshBlog() {
    return (
        <div className={style.freshBlogBlock}>
            <div className={style.freshBlog}>
                <h1>Fresh from the blog </h1>
            </div>
            <div className={style.blogCard}>
                <div className={style.blogItem}>
                    <div className={style.fresh_Img}>
                        <img src="https://i.etsystatic.com/inv/73f1ea/5310016542/inv_620x495.5310016542_ukkxc6qi.jpg?version=0" alt="" />
                    </div>
                    <div className={style.fresh_Guide}>
                        <p>Shopping Guides</p>
                        <h2>9 Comfy Throws for Cosy Autumn Vibes</h2>
                        <p>
                            Embrace the snuggling season with stylish throws that will warm your hearts.
                        </p>
                    </div>
                </div>
                <div className={style.blogItem}>
                    <div className={style.fresh_Img}>
                        <img  src="https://i.etsystatic.com/inv/1b86b2/5514321927/inv_425x340.5514321927_50cniifw.jpg?version=0" alt="" />    
                        </div>
                        <div className={style.fresh_Guide}>
                        <p>Shopping Guides</p>
                        <h2>14 Beautiful Bags That Express Your Unique Style</h2>
                        <p>
                            Amp up your fashion game with bags that perfectly match your aesthetic.
                        </p>
                    </div>
                </div>
                <div className={style.blogItem}>
                    <div className={style.fresh_Img}>
                        <img src="https://i.etsystatic.com/inv/0c0724/5507381345/inv_425x340.5507381345_8imomvyj.jpg?version=0" alt="" />
                    </div>
                    <div className={style.fresh_Guide}>
                        <p>Gift Ideas</p>
                        <h2>The Best Gift Ideas for Kids of All Ages</h2>
                        <p>
                            Shop the sweetest surprises for all little ones in your family–these gifts for kids will definitely earn you some brownie points.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

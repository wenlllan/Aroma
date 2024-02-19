import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
//import { useRef } from 'react';

const SelectSapmleThird = ({ theme }) => {
    return (
        <div>
            <div>
                <section className={`selectThird theme-${theme}`}>
                    <div className="selectThird-prod-title">
                        <h4>以下為您的專屬香味——</h4>
                        <h3>恬靜風情的夏日晴空</h3>
                        <p>Summer Serenity</p>
                    </div>
                    <div className="select-contain">
                        <div className="select-contain-jpg">
                            <figure className="selectThird-prod-img"><img src="./images/prod-summer.png" alt="恬靜風情的夏日晴空" /></figure>
                        </div>
                        <div className="contain-article">
                            <div className="contain-star">
                                <figure><img src="./images/select-sample-third-star-summer.svg" alt="" /></figure>
                            </div>
                            <div className="contain-top">
                                <h3>專屬幸運色:</h3>
                                <p>琥珀黃色 Amber
                                    橘黃色是一種充滿活力和創意的色彩，代表著熱情和勇氣。
                                    對於喜歡清新調的你而言，橘黃色的幸運色將帶來活力與創意的靈感。</p>
                            </div>
                            <div className="contain-bottom">
                                <h3>專屬香調:</h3>
                                <p>清新果香
                                    愛好清新果香的你，平時要注意情緒的變化，以免陷入情緒低谷。
                                    在面對挑戰時，請嘗試回想當初為何想要追求某事，而非沉溺於「應該做什麼」的想法。</p>
                            </div>
                        </div>
                    </div>
                    <div className="selectThird-btn">
                        <Link to="/selectfinal">
                            <p>索取試用</p>
                        </Link>
                    </div>
                    <div className="sample-div">
                        <div className="sample-text">試用小樣</div>
                        <figure className="sample-pic"><img src="./images/perfumeSamle-summer.jpg" alt="小樣-恬靜風情的夏日晴空" /></figure>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default SelectSapmleThird;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const SelectSapmleThird = ({ theme }) => {
    return (
        <div>
            <div>
                <section className={`selectThird theme-${theme}`}>
                    <div className="selectThird-prod-title">
                        <h4>以下為您的專屬香味——</h4>
                        <h3>尋香奇遊的夢幻花境</h3>
                        <p>Dreamscape Bloom</p>
                    </div>
                    <div className="select-contain">
                        <div className="select-contain-jpg">
                            <figure className="selectThird-prod-img"><img src="./images/prod-dream.png" alt="恬靜風情的夏日晴空" /></figure>
                        </div>
                        <div className="contain-article">
                            <div className="contain-star">
                                <figure><img src="./images/select-sample-third-star-dream.svg" alt="" /></figure>
                            </div>
                            <div className="contain-top">
                                <h3>專屬幸運色:</h3>
                                <p>霧玫瑰色 Mistyrose
                                    粉紅色象徵著愛與溫暖，是一種極具積極氛圍的色彩。
                                    對於喜歡花香調的你而言，粉紅色的幸運色代表著愉悅與溫暖。</p>
                            </div>
                            <div className="contain-bottom">
                                <h3>專屬香調:</h3>
                                <p>花香調
                                    選擇花香調的你，顯示你對環境的敏感度極高。在不同的場景中，你的心境也隨之變化。
                                    當生活中的壓力逼近時，或許改變一下環境能夠帶來心情的轉變，享受生活中的美好與溫暖。</p>
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
                        <figure className="sample-pic"><img src="./images/perfumeSamle-dream.jpg" alt="小樣-尋香奇遊的夢幻花境" /></figure>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default SelectSapmleThird;
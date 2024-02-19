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
                        <h3>靈魂深處的幽林冒險</h3>
                        <p>Soulwood Quest</p>
                    </div>
                    <div className="select-contain">
                        <div className="select-contain-jpg">
                            <figure className="selectThird-prod-img"><img src="./images/prod-soulwood.png" alt="恬靜風情的夏日晴空" /></figure>
                        </div>
                        <div className="contain-article">
                            <div className="contain-star">
                                <figure><img src="./images/select-sample-third-star-soul.svg" alt="" /></figure>
                            </div>
                            <div className="contain-top">
                                <h3>專屬幸運色:</h3>
                                <p>薄荷奶油色 Mintcream
                                湖水綠色是一種令人感到平靜和清新的色彩，代表著大自然的和諧與平衡。
                                對於喜歡木質調的你而言，湖水綠色的幸運色將帶來平靜與清新的感覺。。</p>
                            </div>
                            <div className="contain-bottom">
                                <h3>專屬香調:</h3>
                                <p>木質香調
                                對於喜歡木質香調的你，最好的壓力釋放方式就是購物！
                                不需過度奢侈，但適時地給自己一些小獎勵，能夠治癒你的心靈，同時激發生活的動力。</p>
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
                        <figure className="sample-pic"><img src="./images/perfumeSamle-soul.jpg" alt="小樣-靈魂深處的幽林冒險" /></figure>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default SelectSapmleThird;
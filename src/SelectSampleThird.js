import React from "react"
import { Link, useNavigate } from "react-router-dom"
//import { useRef } from 'react';

const SelectSapmleThird = () => {
    return (
        <div>
            <body>
                <section id="selectThird">
                    <div className="selectThird-prod-title">
                        <h3>尋香奇遊的</h3>
                        <h1>夢幻花境</h1>
                        <p>Dreamscape Bloom</p>
                    </div>
                    <figure className="selectThird-prod-img"><img src="./images/prod-dream.png" alt="尋香奇遊的夢幻花境" /></figure>
                    <div className="selectThird-btn">
                        <Link to="/shopping">
                            <p>索取試用</p>
                        </Link>
                    </div>
                    <div className="sample-div">
                        <div className="sample-text">試用小樣</div>
                        <figure className="sample-pic"><img src="./images/perfumeSamle-dream.jpg" alt="小樣-尋香奇遊的夢幻花境" /></figure>
                    </div>
                </section>
            </body>
        </div>
    )
}
export default SelectSapmleThird;
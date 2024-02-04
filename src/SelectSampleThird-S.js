import React from "react"
import { Link, useNavigate } from "react-router-dom"
//import { useRef } from 'react';

const SelectSapmleThird = () => {
    return (
        <div>
            <div className="scrollBox">
                <section id="selectThird">
                    <div class="selectThird-prod-title">
                        <h3>尋香奇遊的</h3>
                        <h1>夢幻花境</h1>
                        <p>Dreamscape Bloom</p>
                    </div>
                    <figure class="selectThird-prod-img"><img src="./images/prod-summer.png" alt="恬靜風情的夏日晴空" /></figure>
                    <div class="selectThird-btn">
                        <Link to="/shopping">
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
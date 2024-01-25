import React from "react"
import { Link, useNavigate } from "react-router-dom"
//import { useRef } from 'react';

const SelectSapmleThird = () => {
    // const navigate = useNavigate();
    // const item =["盛裝約會","低調精緻","休閒放鬆"];

    // function handleClick(e){
    //     //navigate('/proddream');
    // };

    return (
        <div>
            <div className="scrollBox">
                <section id="selectThird">
                    <div class="selectThird-prod-title">
                        <h3>尋香奇遊的</h3>
                        <h1>夢幻花境</h1>
                        <p>Dreamscape Bloom</p>
                    </div>
                    <figure class="selectThird-prod-img"><img src="./images/prod-dream.png" alt="尋香奇遊的夢幻花境" /></figure>
                    <div class="selectThird-btn">
                        <Link to="/shopping">
                            <p>索取試用</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default SelectSapmleThird;
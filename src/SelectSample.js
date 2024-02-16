import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie";
//import { useRef } from 'react';

const SelectSample = () => {
    const navigate = useNavigate();
    const item = ["盛裝約會", "低調精緻", "休閒放鬆"];
    const listItems = item.map((choose) => {
        //console.log(number);
        return (<li className="que-btn" onClick={handleClick} value={choose}>{choose}</li>)
    }
    );

    function handleClick(e) {
        console.log(e.target.getAttribute('value'));
        localStorage.setItem("Q1", e.target.getAttribute('value'));
        // window.localStorage.setItem("Q1", JSON.stringify(e.target.getAttribute('value')));
        // Cookies.set("q1",JSON.stringify(e.target.getAttribute('value')));
        navigate('/selectsamplesec');
        // console.log(Cookies.get("q1"));
    };

    return (
        <body>
            <section id="select-bg">
                <div className="select-div">
                    <div className="select-frame">
                        <div className="select-frame-top">
                            <figure className="select-stars"><img src="./images/select-star.svg" alt="" /></figure>
                            <figure className="select-num1"><img src="./images/select-num1.svg" alt="" /></figure>
                            <div className="que">
                                <p>您想要在什麼時刻使用香水？</p>
                            </div>
                            <ul className="que-btn-div">
                                {listItems}
                            </ul>
                        </div>
                        <div className="Q-page">
                            <Link to="#">&lt;</Link><p>1 / 2</p><Link to="/selectsamplesec">&gt;</Link>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}
export default SelectSample;
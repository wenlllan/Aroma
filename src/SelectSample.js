import React from "react";
import { Link } from "react-router-dom"

const SelectSapmle = () => {
    return (
        <div>
            <body classNameName="scrollBox">
                <section id="select-bg">
                    <div className="select-div">
                        <div className="select-frame">
                            <figure className="select-stars"><img src="./images/select-star.svg" alt="" /></figure>
                            <figure className="select-num1"><img src="./images/select-num1.svg" alt="" /></figure>
                            <div className="que">
                                <p>您想要在什麼時刻使用香水？</p>
                            </div>
                            <div className="que-btn-div">
                                <button className="que-btn">盛裝約會</button>
                                <button className="que-btn">低調精緻</button>
                                <button className="que-btn">休閒放鬆</button>
                            </div>
                            <div className="Q-page">
                                <Link to="#">&lt;</Link><p>1 / 2</p><Link to="./select-sampleSec.html">&gt;</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>

    )
}
export default SelectSapmle;
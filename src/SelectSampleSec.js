import React from "react";
import { Link } from "react-router-dom"

const SelectSapmleSec = () => {
    return (
        <div>
            <body className="scrollBox">
                <section id="select-bg">
                    <div className="select-div">
                        <div className="select-frame sec">
                            <div>
                                <div className="select-q">
                                    <figure className="select-stars sec2"><img src="./images/select-star.svg" alt="" /></figure>
                                    <div className="que-btn-div sec-q">
                                        <button className="que-btn sec-b">清新</button>
                                        <button className="que-btn sec-b">溫暖</button>
                                        <button className="que-btn sec-b">單純</button>
                                        <button className="que-btn sec-b">溫柔</button>
                                        <button className="que-btn sec-b">夢幻</button>
                                        <button className="que-btn sec-b">浪漫</button>
                                        <button className="que-btn sec-b">知性</button>
                                        <button className="que-btn sec-b">神秘</button>
                                        <button className="que-btn sec-b">冒險</button>
                                    </div>
                                </div>
                                <figure className="select-num1"><img src="./images/select-num2.svg" alt="" /></figure>
                                <div className="que q-sec">
                                    <p>您喜歡哪種風格呢？</p>
                                </div>
                            </div>
                            <div className="Q-page">
                                <Link to="/selectsample">&lt;</Link><p>2 / 2</p><Link to="#">&gt;</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>

    )
}
export default SelectSapmleSec;
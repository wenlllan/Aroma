import React from "react"
import { Link,useNavigate } from "react-router-dom"
import { useRef } from 'react';

const SelectSapmle = () => {

    const item =["盛裝約會","低調精緻","休閒放鬆"];
    const listItems = item.map((number) =>
      <li>{number}</li>
    );
    const navigate = useNavigate();
    function handleClick(){
        //localStorage.setItem("Q1",chooseRef.current.children[0].text);
        navigate('/selectsamplesec');
    };

    return (
        <div>
            <div className="scrollBox">
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
                                {/* <li className="que-btn" onClick={handleClick}>盛裝約會</li>
                                <li className="que-btn" onClick={handleClick}>低調精緻</li>
                                <li className="que-btn" onClick={handleClick}>休閒放鬆</li> */}
                                {listItems}
                            </ul>
                            </div>
                            <div className="Q-page">
                                <Link to="#">&lt;</Link><p>1 / 2</p><Link to="/selectsamplesec">&gt;</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}
export default SelectSapmle;
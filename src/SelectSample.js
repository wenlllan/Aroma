import React from "react"
import { Link } from "react-router-dom"
import { useRef } from 'react';

const SelectSapmle = () => {

    const chooseRef = useRef(null);
    //const navigate = useNavigate();
    // localStorage.setItem("Q1",chooseRef.current.value);

    function handleClick() {
        chooseRef.current = chooseRef.current + 1; 
        console.log(chooseRef.current.children.nextSibling);
        // localStorage.setItem("Q1",chooseRef.current.value);
        // alert('You clicked ' + chooseRef.current + ' times!');
      }


    // const handleSubmit = (e)=>{
    //       console.log(chooseRef.current.value);
      
          
    //       if (chooseRe){

    //       } else {
    //         localStorage.setItem("",sthRef.current.value);
    //         navigate("/shopping3rd");
    //       }}



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
                            <div className="que-btn-div">
                                <button className="que-btn" onClick={handleClick} ref={chooseRef}><Link to="/selectsamplesec" >盛裝約會</Link></button>
                                <button className="que-btn">低調精緻</button>
                                <button className="que-btn">休閒放鬆</button>
                            </div>
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
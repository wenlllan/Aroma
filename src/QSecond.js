import React from "react";
import { Link, useNavigate } from "react-router-dom"

const SelectSapmleSec = () => {

    const navigate = useNavigate();
    const item = ["清新", "溫暖", "溫柔", "夢幻", "浪漫", "知性", "神秘", "冒險", "單純"];
    const listItems = item.map((number) => {
        //console.log(number);
        return (<li className="que-btn sec-b" onClick={handleClick} value={number}>{number}</li>)
    }
    );

    function handleClick(e) {
        //console.log(e.target.getAttribute('value'));
        localStorage.setItem("Q2", e.target.getAttribute('value'));

        console.log("Q1:", localStorage.getItem("Q1"));
        console.log("Q2:", localStorage.getItem("Q2"));

        let Q1 = localStorage.getItem("Q1");
        let Q2 = localStorage.getItem("Q2");

        const final = (Q1)
        switch (final) {
            case '盛裝約會':
                console.log('盛裝約會');
                const finalResault1 = (Q2);
                switch (finalResault1) {
                    case '溫柔':
                    case '夢幻':
                    case '浪漫':
                        console.log('Dreamscape Bloom');
                        navigate('/selectsamplethird');
                        break;
                    case '清新':
                    case '單純':
                    case '溫暖':
                        console.log('Summer Serenity');
                        navigate('/selectsamplethird-s');
                        break;
                    case '知性':
                    case '神秘':
                    case '冒險':
                                console.log('Soulwood Quest');
                                navigate('/selectsamplethird-soul');
                                break;
                    default:
                        console.log(`Sorry, we are out of ${finalResault1}.`);
                }
                break;
            case '低調精緻':
                console.log('低調精緻');
                const finalResault2 = (Q2);
                switch (finalResault2) {
                    case '溫柔':
                    case '夢幻':
                    case '浪漫':
                        console.log('Dreamscape Bloom');
                        navigate('/selectsamplethird');
                        break;
                    case '清新':
                    case '單純':
                    case '溫暖':
                        console.log('Summer Serenity');
                        navigate('/selectsamplethird-s');
                        break;
                    case '知性':
                    case '神秘':
                    case '冒險':
                                console.log('Soulwood Quest');
                                navigate('/selectsamplethird-soul');
                                break;
                    default:
                        console.log(`Sorry, we are out of ${finalResault2}.`);
                }
                break;
            case '休閒放鬆':
                console.log('休閒放鬆');
                const finalResault3 = (Q2);
                switch (finalResault3) {
                    case '溫柔':
                    case '夢幻':
                    case '浪漫':
                        console.log('Dreamscape Bloom');
                        navigate('/selectsamplethird');
                        break;
                    case '清新':
                    case '單純':
                    case '溫暖':
                        console.log('Summer Serenity');
                        navigate('/selectsamplethird-s');
                        break;
                    case '知性':
                    case '神秘':
                    case '冒險':
                                console.log('Soulwood Quest');
                                navigate('/selectsamplethird-soul');
                                break;
                    default:
                        console.log(`Sorry, we are out of ${finalResault3}.`);
                }
                break;
            default:
                console.log(`Sorry, we are out of ${final}.`);
        }

        //navigate('/selectsampleThird');

    };



    return (
        <body>
            <section id="select-bg" className="sec-bg">
                <div className="select-div">
                    <div className="select-frame sec">
                        <div>
                            <div className="select-q">
                                <figure className="select-stars sec2"><img src="./images/select-star.svg" alt="" /></figure>
                                <ul className="que-btn-div sec-q">
                                    {/* <li className="que-btn sec-b">清新</li>
                                        <li className="que-btn sec-b">溫暖</li>
                                        <li className="que-btn sec-b">單純</li>
                                        <li className="que-btn sec-b">溫柔</li>
                                        <li className="que-btn sec-b">夢幻</li>
                                        <li className="que-btn sec-b">浪漫</li>
                                        <li className="que-btn sec-b">知性</li>
                                        <li className="que-btn sec-b">神秘</li>
                                        <li className="que-btn sec-b">冒險</li> */}
                                    {listItems}
                                </ul>
                            </div>
                            <figure className="select-num1 num2"><img src="./images/select-num2.svg" alt="" /></figure>
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
    )
}
export default SelectSapmleSec;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
const ProdSoul = ({theme,shopItems, setShopItems, setShopCount,shopCount}) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSendingTop, setIsSendingTop] = useState(false);

    const productD1 = {
        id: '3-1',//_id
        src:"./images/prod30ml-soulwood.png",
        title:"靈魂深處的幽林冒險",
        price:1880,
        ml:30,
        count: 0,
        currentPrice:0,
    }
    const productD2 = {
        id: '3-2',//_id
        src:"./images/prod-soulwood.png",
        title:"靈魂深處的幽林冒險",
        price:2880,
        ml:50,
        count: 0,
        currentPrice:0,
    }

    const addToCartTop = () => {
        setIsSendingTop(true);
        setTimeout(() => {
            setIsSendingTop(false);
            setCartTotal(cartTotal + 1);
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false);
            }, 500);
        }, 1000);
    };

    const addToCart = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setCartTotal(cartTotal + 1);
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false);
            }, 500);
        }, 1000);
    };

    const handleAdd = (obj)=>{
        //localStorage: JSON.stringify()=>轉文字  /  JSON.parse()=>解析localStorage內容
        let orderList = localStorage.getItem("cart");
        if (orderList){
            let currentCart = JSON.parse(orderList)
            console.log(currentCart)
            let plus = currentCart.findIndex((i)=>{
                return i.id == obj.id;
            })
            if(plus != -1) {
                currentCart[plus].count++;
                currentCart[plus].currentPrice = currentCart[plus].count * currentCart[plus].price;
                localStorage.setItem("cart",JSON.stringify(currentCart));
            } else {
                obj.count+=1;
                obj.currentPrice = obj.price * obj.count
                currentCart.push(obj);
                localStorage.setItem("cart",JSON.stringify(currentCart));
            }
             
        } else {
            let arr = [];
            obj.count+=1;
            obj.currentPrice = obj.price * obj.count
            arr.push(obj);
            console.log(arr);
            localStorage.setItem("cart", JSON.stringify(arr) )
        }
        setShopCount((prev)=>{
            return prev + 1;
        })
        // setState() // setState((prevState)=>{ return prevState .....})

        // 回呼函式callback function，"prev"
        //setState(2)
        //setState(3)
    }

    useEffect(()=>{
        setShopItems(()=>{
          return JSON.parse(localStorage.getItem("cart"))
        })
      },[shopCount])

    //changPic
    const [mainImageSrc, setMainImageSrc] = useState('./images/prod-soulwood.png');
    const [isFading, setIsFading] = useState(false);

    const changePic = (picNo) => {
        setIsFading(true);

        setTimeout(() => {
            if (picNo === 1) {
                setMainImageSrc('./images/prod-soulwood.png');
            } else if (picNo === 2) {
                setMainImageSrc('./images/prod30ml-soulwood.png');
            }
            setIsFading(false);
        }, 500);
    };

    return (
        <body>
            <section className={`main-prod-dream theme-${theme}`}>
                <div className="gradient-bg-div">
                    <div className="gradient-bg">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>
                        <div className="gradients-container">
                            <div className="g1 g1-green"></div>
                            <div className="g2 g2-green"></div>
                            <div className="g3 g3-green"></div>
                            <div className="g4 g4-green"></div>
                            <div className="g5 g5-green"></div>
                            <div className="interactive interactive-green"></div>
                        </div>
                    </div>
                </div>
                <Link to="/shopping"><div className={`shopping-cart theme-${theme}`}>
                    <div id="cart" className={isShaking ? ' cart' : ' cart shake'} data-totalitems={cartTotal}></div>
                    <div className="shopping-cart-div">
                        <figure><img src="./icon/icon-shopping-cart.svg" alt="" /></figure>
                    </div>
                </div></Link>
                <figure className="left-deco"><img src="./images/soul-flower.svg" alt="" /></figure>
                <div className="prod-div">
                    <figure id="photo" className={`fade-image main-prod-img ${isFading ? 'fade-out' : ''}`}><img src={mainImageSrc} alt="恬靜風情的夏日晴空" /></figure>
                    <div className="prod-info-div">
                        <div className="prod-info-title">
                            <h3>靈魂深處的</h3>
                            <h1>幽林冒險</h1>
                            <p>Soulwood Quest</p>
                            <small>木質調Woody | 前調琥珀、中調香草、後調檀木</small>
                        </div>
                        <div className="prod-info-contain">
                            <div className="prod-info-contain-item">
                                <div className="ml" onMouseOver={() => changePic(2)}>30ml</div>
                                <div className="price">NT$1,880</div>
                                <button className={isSendingTop ? 'add' : 'add sendtocart-t'} onClick={(e) => { handleAdd(productD1); addToCartTop(); }}>加入購物車<span className="cart-item-t"></span></button>
                            </div>
                            <div className="prod-info-contain-item">
                                <div className="ml" onMouseOver={() => changePic(1)}>50ml</div>
                                <div className="price">NT$2,880</div>
                                <button id="addtocart" className={isSending ? 'add' : 'add sendtocart'} onClick={(e)=>{handleAdd(productD2); addToCart();}}>加入購物車<span className="cart-item"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prod-contain">
                    <h4>追風探秘，冒險啟航<br />
                    赴一場林間的神秘溫馨之旅──</h4>
                    <p>穿梭林間的冷冽清風，追尋那一縷琥珀般的溫馨，感受著神秘的魅力。
                        </p>
                </div>
                <div className={`marquee-container theme-${theme}`}>
                    <div className={`marquee-content theme-${theme}`}>
                        Chasing the Wind, Unveiling Mysteries - Embark on a Warm and Mysterious Journey Through the Woods 
                        Chasing the Wind, Unveiling Mysteries - Embark on a Warm and Mysterious Journey Through the Woods
                    </div>
                </div>
                <section className="prod-info-contain-m">
                    <div className="select-prod-m">
                        <div className="ml">50ml</div>
                        <div className="price">NT$2,880</div>
                        <div id="shopping-cart">
                            <button id="decrease">－</button>
                            <input type="text" id="quantity" value="1" />
                            <button id="increase">＋</button>
                        </div>
                    </div>
                    <button className={`add-m theme-${theme}`}>加入購物車</button>
                </section>
            </section>
            <section className="dream-img">
                <figure className="circle"><img src="./images/prod-circle-soul.svg" alt="" /></figure>
                <figure className="arrow-down"><img src="./images/prod-arrow-down.svg" alt="" /></figure>
                <figure className="small-dream"><img src="./images/prod-soulwood.png" alt="" /></figure>
                <figure className="small-dream-bg"><img src="./images/main_bg2.jpg" alt="" /></figure>
            </section>
            <section className={`prod-story-container theme-${theme}`}>
                <div className="prod-story-title">
                    <div className="story-title-CN">
                        <p>香氛的靈感</p>
                        <h2>香水故事</h2>
                    </div>
                    <p className={`prod-story-title-ENG theme-${theme}`}>the story about the perfume</p>
                </div>
                <div className="story-contain">
                    <div className="prod-story">
                        <div>
                            <h4>穿越森林的冷冽清風</h4>
                            <p>當黎明的微光穿透森林，你開始了一段探索未知的旅程，沿著一條幽深的小徑深入叢林之中。寒冷的清風輕撫過臉龐，帶來一陣陣涼爽的觸感，激發起你心中對冒險的渴望，渴求在這片神秘森林中探尋未知。</p>
                        </div>
                        <div>
                            <div className="img-border">
                                <figure><img src="./images/prod-story-soul1.png" alt="" /></figure>
                            </div>
                        </div>

                    </div>
                    <div className="prod-story">
                        <div></div>
                        <div className="prod-story-right">
                            <h4>尋找琥珀般的溫暖</h4>
                            <p>在這片靜謐的森林中，你被一縷溫暖的琥珀色光芒吸引。它來自於叢林深處，樹木散發的木香與芳草的清新相互交織。追隨這股暖意，帶著勇氣和好奇心，走向更深的森林，尋找著更多的秘密。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div>
                            <h4>檀木與香草的神秘交織</h4>
                            <p>隨著探索的深入，你來到了一片神秘莊嚴的樹林，樹木高聳，如同天然的宮殿。空氣中彌漫著檀木和香草的混合香氣，為這片森林增添了一份神秘氛圍。靜靜地站立，閉上眼睛，讓自己沉浸在這個奇妙的時刻，感覺與大自然合而為一。</p>
                        </div>
                        <div>
                            <figure className="right-photo3"><img src="./images/prod-story-soul2.svg" alt="" /></figure>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-4">

                            <figure className="left-photo4-2">
                                <img src="./images/prod-story-soul3.png" alt="" />
                            </figure>
                            <figure className="left-photo4">
                                <img src="./images/prod-story-3-frame.svg" alt="" />
                            </figure>
                        </div>
                        <div className="prod-story-right">
                            <h4>冒險靈魂的香氛</h4>
                            <p>噴上這瓶香水，你化身為勇敢的探險家，柔軟皮膚上綻放出如森林中秘密花朵般的香氣。這款香水融合了蓮花的清新與茉莉的優雅，賦予你自信與魅力，指引著未知的探險之旅。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-left">
                            <h4>一段屬於你的冒險之旅</h4>
                            <p>這不僅是一瓶香水，更是你開啟冒險旅程的序幕。每次噴上這款香水，都宣告著一段新的探險的開始，一個充滿未知與挑戰的旅途。讓香草、檀木、琥珀的香氣伴隨你，成為你冒險故事的旋律，編織一段屬於你的傳奇。
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="prod-story-last">
                勇敢地去探索，去發現，這個世界滿是驚喜和可能。<br/>
                這款香水，將成為你探索未知的伙伴，一個帶領你走向未知境界的新開始。
                    <figure><img src="./images/prod-story-last-circle-green.svg" alt="" /></figure>
                </div>

            </section>
            <section className={`prod-notes theme-${theme}`}>
                <div className="prod-notes-title">

                    <figure className="note-time"><img src="./images/prod-note-time-green.svg" alt="" /></figure>
                    <h2>香調輪廓</h2>

                </div>
                <div className="prod-note-contain">
                    <div className="top">
                        <h2>香調</h2>
                        <h3>木質調Woody</h3>
                        <figure className="top-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                    </div>
                    <div className="bottom">
                        <div>
                            <h2>前調</h2>
                            <h3>琥珀</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>中調</h2>
                            <h3>香草</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>後調</h2>
                            <h3>檀木</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-material theme-${theme}`}>
                <div className={`prod-material-contain theme-${theme}`}>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>琥珀</h4>
                            <p>Amber</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>琥珀散發著深邃、溫暖、甜美的香氣，有時帶有木質、香辛料和淡淡的花香。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>琥珀被視為一種神秘、豐富和具有治癒力的材料，其古老的起源和深沉的香氣使其在香水世界中倍受喜愛。</p>
                        </div>
                    </div>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>香草</h4>
                            <p>Vanilla</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>香草散發著甜美、溫暖、馥郁的香氣，具有濃郁的奶油和焦糖風味。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>香草被認為具有溫馨、親近和安撫的效果，其溫暖的香氣使人聯想到舒適和幸福。</p>
                        </div>
                    </div>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>鼠尾草</h4>
                            <p>Sage</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>鼠尾草散發出草本、清新的香氣，帶有迷迭香獨特的濃烈草本香調，，清新而活潑。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>鼠尾草在象徵上與清新、純淨、健康相聯繫。其草本香氣被認為有助於提升精神，帶來正面的能量。</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-photo theme-${theme}`}>
                <div className="prod-photo-all">
                    <figure className="p1"><img src="./images/prod-photo-soul1.png" alt="" /></figure>
                    <figure className="p2"><img src="./images/prod-photo-soul2.png" alt="" /></figure>
                    <div className="prod-photo-small">
                        <figure><img src="./images/prod-photo-soul3.png" alt="" /></figure>
                        <figure><img src="./images/prod-photo-soul4.png" alt="" /></figure>
                    </div>
                </div>
                <p>warm, natural and comfortable</p>
            </section>
            <section className={`prod-function theme-${theme}`}>
                <div className="prod-function-title">
                    <div className="prod-function-title-CN">
                        <p>香氛的藝術</p>
                        <h2>使用方式</h2>
                    </div>
                    <div className="prod-function-title-ENG">
                        Instructions
                    </div>
                </div>
                <div className="prod-function-p">
                    香水能夠強烈地展現您的獨特風格並創造難忘的印象。不論您偏好鮮明濃郁還是
                    細膩柔和的香調，選擇合適的香水不僅能增添您的魅力，還能提升自信感。
                </div>
                <div className="prod-function-div">
                    <div className="prod-function-info">
                        <div className="prod-function-img">
                            <figure><img src="./images/prod-women1.svg" alt="" /></figure>
                        </div>
                        <div className="prod-function-content">
                            <h3>手腕</h3>
                            <p>將香水噴灑在手腕的內側，這是一個脈搏點，體溫可以幫助釋放香氣。盡量避免摩擦雙手腕破壞香氣分子。</p>
                        </div>
                    </div>
                </div>
                <div className="prod-function-div">
                    <div className="prod-function-info reverse">
                        <div className="prod-function-img">
                            <figure><img src="./images/prod-women2.svg" alt="" /></figure>
                        </div>
                        <div className="prod-function-content">
                            <h3>頸部</h3>
                            <p>頸部是一個理想的脈搏點，將香水輕噴在頸部，特別是在耳垂下方的位置，可以讓香氣隨著體溫緩慢釋放，並隨著你的移動散發出來。</p>
                        </div>
                    </div>
                </div>
                <div className="prod-function-div">
                    <div className="prod-function-info">
                        <div className="prod-function-img">
                            <figure><img src="./images/prod-women3.svg" alt="" /></figure>
                        </div>
                        <div className="prod-function-content">
                            <h3>耳後</h3>
                            <p>耳後的皮膚較薄，血管較接近表面，也是體溫較高的區域。在這裡噴灑香水可以創造出一種微妙且持久的香氣。</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-find theme-${theme}`}>
                <div className="find-CN">
                    <p>找到屬於你的故事</p>
                    <p className="find-ENG">Perfume sample</p>
                </div>
                <div className="prod-find-btn">
                    <Link to="/selectsample">
                        <p>索取試用</p>
                    </Link>
                </div>
            </section>
        </body>
    )

}
export default ProdSoul;
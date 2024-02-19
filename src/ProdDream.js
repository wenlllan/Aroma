import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
const ProdDream = ({ theme, shopItems, setShopItems, setShopCount, shopCount }) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSendingTop, setIsSendingTop] = useState(false);

    const productD1 = {
        id: '1-1',//_id
        src: "./images/prod30ml-dream.png",
        title: "尋香奇遊的夢幻花境",
        price: 1880,
        ml: 30,
        count: 0,
        currentPrice: 0,
    }
    const productD2 = {
        id: '1-2',//_id
        src: "./images/prod-dream.png",
        title: "尋香奇遊的夢幻花境",
        price: 2880,
        ml: 50,
        count: 0,
        currentPrice: 0,
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

    const handleAdd = (obj) => {
        //localStorage: JSON.stringify()=>轉文字  /  JSON.parse()=>解析localStorage內容
        let orderList = localStorage.getItem("cart");
        if (orderList) {
            let currentCart = JSON.parse(orderList)
            console.log(currentCart)
            let plus = currentCart.findIndex((i) => {
                return i.id == obj.id;
            })
            if (plus != -1) {
                currentCart[plus].count++;
                currentCart[plus].currentPrice = currentCart[plus].count * currentCart[plus].price;
                localStorage.setItem("cart", JSON.stringify(currentCart));
            } else {
                obj.count += 1;
                obj.currentPrice = obj.price * obj.count
                currentCart.push(obj);
                localStorage.setItem("cart", JSON.stringify(currentCart));
            }

        } else {
            let arr = [];
            obj.count += 1;
            obj.currentPrice = obj.price * obj.count
            arr.push(obj);
            console.log(arr);
            localStorage.setItem("cart", JSON.stringify(arr))
        }
        setShopCount((prev) => {
            return prev + 1;
        })
        // setState() // setState((prevState)=>{ return prevState .....})

        // 回呼函式callback function，"prev"
        //setState(2)
        //setState(3)
    }

    useEffect(() => {
        setShopItems(() => {
            return JSON.parse(localStorage.getItem("cart"))
        })
    }, [shopCount])

    //changPic
    const [mainImageSrc, setMainImageSrc] = useState('./images/prod-dream.png');
    const [isFading, setIsFading] = useState(false);

    const changePic = (picNo) => {
        setIsFading(true);

        setTimeout(() => {
            if (picNo === 1) {
                setMainImageSrc('./images/prod-dream.png');
            } else if (picNo === 2) {
                setMainImageSrc('./images/prod30ml-dream.png');
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
                            <div className="g1 g1-pink"></div>
                            <div className="g2 g2-pink"></div>
                            <div className="g3 g3-pink"></div>
                            <div className="g4 g4-pink"></div>
                            <div className="g5 g5-pink"></div>
                            <div className="interactive interactive-pink"></div>
                        </div>
                    </div>
                </div>
                <Link to="/shopping"><div className={`shopping-cart theme-${theme}`}>
                    {/* <span className="cart-item"></span> */}
                    <div id="cart" className={isShaking ? ' cart pink-theme' : ' cart shake pink-theme'} data-totalitems={cartTotal}></div>
                    <div className="shopping-cart-div">
                        <figure><img src="./icon/icon-shopping-cart.svg" alt="" /></figure>
                    </div>
                </div></Link>
                <figure className="left-deco"><img src="./images/dream-flower.svg" alt="" /></figure>
                <div className="prod-div">
                    <figure id="photo" className={`fade-image main-prod-img ${isFading ? 'fade-out' : ''}`}><img src={mainImageSrc} alt="尋香奇遊的夢幻花境" /></figure>
                    <div className="prod-info-div">
                        <div className="prod-info-title">
                            <h3>尋香奇遊的</h3>
                            <h1>夢幻花境</h1>
                            <p>Dreamscape Bloom</p>
                            <small>花香調Floral | 前調雛菊、中調玫瑰、後調廣藿香</small>
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
                                <button id="addtocart" className={isSending ? 'add' : 'add sendtocart'} onClick={(e) => { handleAdd(productD2); addToCart(); }}>加入購物車<span className="cart-item"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prod-contain">
                    <h4>徜徉於花香與夢境的神奇領域，<br />
                        尋覓屬於我獨特芳香。</h4>
                    <p>香氛如詩般編織著回憶的線索，<br />
                        一瓶香水，一場夢幻之旅。</p>
                </div>
                <div className="marquee-container color-lightpink">
                    <div className="marquee-content">
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
                    <button className="add-m" onClick={(e) => { handleAdd(productD1); addToCart(); }}>加入購物車</button>
                </section>
            </section>
            <section className="dream-img">
                <figure className="circle"><img src="./images/prod-circle-dream.svg" alt="" /></figure>
                <figure className="arrow-down"><img src="./images/prod-arrow-down.svg" alt="" /></figure>
                <figure className="small-dream"><img src="./images/prod-dream.png" alt="" /></figure>
                <figure className="small-dream-bg"><img src="./images/main_bg1.jpg" alt="" /></figure>
            </section>
            <section className={`prod-story-container theme-${theme}`}>
                <div className="prod-story-title">
                    <div className="story-title-CN">
                        <p>香氛的靈感</p>
                        <h2>香水故事</h2>
                    </div>
                    <p className="prod-story-title-ENG">the story about the perfume</p>
                </div>
                <div className="story-contain">
                    <div className="prod-story">
                        <div>
                            <h4>在春日晨光的溫柔中</h4>
                            <p>當初春的晨光柔和地灑落，你開啟了一段春天的浪漫之旅。春日清晨，伴隨著雛菊的清新氣息，輕撫過你的面龐，喚醒心中對春天美好的期待，引領你走進這片充滿生機與浪漫的花園。</p>
                        </div>
                        <div>
                            <div className="img-border">
                                <figure><img src="./images/prod-story-1.jpg" alt="" /></figure>
                            </div>
                        </div>

                    </div>
                    <div className="prod-story">
                        <div></div>
                        <div className="prod-story-right">
                            <h4>在玫瑰的魅力中尋幽</h4>
                            <p>這片花園裡，玫瑰以其醉人的香氣和繽紛的色彩在春光中綻放。你隨著這股芬芳，漫步於花叢之間，沉浸在春天的魅力和悠閒中。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div>
                            <h4>廣藿香與綠葉的和諧共鳴</h4>
                            <p>在這片春日花園中，你發現了廣藿香的深沉香氣與新鮮綠葉的清新相結合。空氣中充滿了廣藿香的神秘與綠葉的活力，創造出一種平衡而愉悅的氛圍。你在這片角落中靜靜地享受著春日的悠閒時光。</p>
                        </div>
                        <div>
                            <figure className="right-photo3"><img src="./images/prod-story-2.jpg" alt="" /></figure>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-4">

                            <figure className="left-photo4-2">
                                <img src="./images/prod-story-3.jpg" alt="" />
                            </figure>
                            <figure className="left-photo4">
                                <img src="./images/prod-story-3-frame.svg" alt="" />
                            </figure>
                        </div>
                        <div className="prod-story-right">
                            <h4>春天浪漫之旅的香氛</h4>
                            <p>這款香水融合了雛菊的清新、玫瑰的浪漫與廣藿香的深邃，完美地捕捉了春天浪漫之旅的精髓。它將春日花園的美好瞬間固定在每一滴香水中。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-left">
                            <h4>你的春天野餐旅程</h4>
                            <p>讓這款香水成為你春日野餐旅程的理想伴侶。每次噴灑，都仿佛重現春日野餐的每一個愉悅瞬間，帶你進入一個充滿生機與浪漫的夢幻世界。這款香水不只是一種香氛，它象徵著你在春日旅程中所體驗的每一刻美好回憶。
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="prod-story-last">
                    沉浸在春日的浪漫中，去感受、去體驗這個世界所賦予的美好和可能性。<br />
                    這款香水將成為你在春日浪漫之旅中的完美伴侶，引領你踏上一段充滿愉悅和探索的新旅程。
                    <figure><img src="./images/prod-story-last-circle-pink.svg" alt="" /></figure>
                </div>

            </section>
            <section className={`prod-notes theme-${theme}`}>
                <div className="prod-notes-title">

                    <figure className="note-time"><img src="./images/prod-note-time-pink.svg" alt="" /></figure>
                    <h2>香調輪廓</h2>

                </div>
                <div className="prod-note-contain">
                    <div className="top">
                        <h2>香調</h2>
                        <h3>花香調Floral</h3>
                        <figure className="top-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                    </div>
                    <div className="bottom">
                        <div>
                            <h2>前調</h2>
                            <h3>雛菊</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>中調</h2>
                            <h3>玫瑰</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>後調</h2>
                            <h3>廣藿香</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-material theme-${theme}`}>
                <div className="prod-material-contain">
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>雛菊</h4>
                            <p>Daisy</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>雛菊散發出清新芬芳，如同微風拂過的溫柔香氛。它帶來淡雅、清新的感覺，讓人聯想到春日的芬芳和自然的清新。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>雛菊象徵著純潔、忠誠與希望。其細小的花朵代表著純潔無瑕的美，而它們的堅韌生存也暗示著對抗逆境的勇氣。</p>
                        </div>
                    </div>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>玫瑰</h4>
                            <p>Rose</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>玫瑰花散發出獨特的、甜美而芳香的香氣，具有深厚的花香和微妙的香辛料調。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>玫瑰象徵著愛、浪漫和美麗。在文學、藝術和文化中，玫瑰經常被視為愛情的象徵，並與女性之美相聯繫。</p>
                        </div>
                    </div>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>廣藿香</h4>
                            <p>Patchouli</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>廣藿香散發出濃郁、深沉、帶有木質和土壤氣息的香氣。其香調屬於地中海調，具有一種迷人的、持久的香味。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>廣藿香香氣被認為有助於提升心靈平靜，被廣泛用於冥想和舒緩壓力的環境中。</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-photo theme-${theme}`}>
                <div className="prod-photo-all">
                    <figure className="p1"><img src="./images/prod-photo-dream1.png" alt="" /></figure>
                    <figure className="p2"><img src="./images/prod-photo-dream2.png" alt="" /></figure>
                    <div className="prod-photo-small">
                        <figure><img src="./images/prod-photo-dream3.png" alt="" /></figure>
                        <figure><img src="./images/prod-photo-dream4.png" alt="" /></figure>
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
export default ProdDream;
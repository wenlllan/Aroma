import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
const ProdSummer = ({theme,shopItems, setShopItems, setShopCount,shopCount}) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSendingTop, setIsSendingTop] = useState(false);

    const productD1 = {
        id: '2-1',//_id
        src:"./images/prod30ml-summer.png",
        title:"恬靜風情的夏日晴空",
        price:1880,
        ml:30,
        count: 0,
        currentPrice:0,
    }
    const productD2 = {
        id: '2-2',//_id
        src:"./images/prod-summer.png",
        title:"恬靜風情的夏日晴空",
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
    const [mainImageSrc, setMainImageSrc] = useState('./images/prod-summer.png');
    const [isFading, setIsFading] = useState(false);

    const changePic = (picNo) => {
        setIsFading(true);

        setTimeout(() => {
            if (picNo === 1) {
                setMainImageSrc('./images/prod-summer.png');
            } else if (picNo === 2) {
                setMainImageSrc('./images/prod30ml-summer.png');
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
                            <div className="g1 g1-yellow"></div>
                            <div className="g2 g2-yellow"></div>
                            <div className="g3 g3-yellow"></div>
                            <div className="g4 g4-yellow"></div>
                            <div className="g5 g5-yellow"></div>
                            <div className="interactive interactive-yellow"></div>
                        </div>
                    </div>
                </div>
                <Link to="/shopping"><div className={`shopping-cart theme-${theme}`}>
                    <div id="cart" className={isShaking ? ' cart' : ' cart shake'} data-totalitems={cartTotal}></div>
                    <div className="shopping-cart-div">
                        <figure><img src="./icon/icon-shopping-cart.svg" alt="" /></figure>
                    </div>
                </div></Link>
                <figure className="left-deco"><img src="./images/summer-flower.svg" alt="" /></figure>
                <div className="prod-div">
                    <figure id="photo" className={`fade-image main-prod-img ${isFading ? 'fade-out' : ''}`}><img src={mainImageSrc} alt="恬靜風情的夏日晴空" /></figure>
                    <div className="prod-info-div">
                        <div className="prod-info-title">
                            <h3>恬靜風情的</h3>
                            <h1>夏日晴空</h1>
                            <p>Summer Serenity</p>
                            <small>清新調Fresh | 前調白檸檬、中調鬱金香、後調鼠尾草</small>
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
                    <h4>夏日午後的微旅，沐浴陽光與輕風的溫柔，<br />
                        一抹清新在陽光下輕盈綻放。</h4>
                    <p>彷彿溫暖擁抱，讓你於每個盛夏時刻悅然心懷。
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
                <figure className="circle"><img src="./images/prod-circle-summer.svg" alt="" /></figure>
                <figure className="arrow-down"><img src="./images/prod-arrow-down.svg" alt="" /></figure>
                <figure className="small-dream"><img src="./images/prod-summer.png" alt="" /></figure>
                <figure className="small-dream-bg"><img src="./images/main_bg3.jpg" alt="" /></figure>
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
                            <h4>在夏日的清晨輕風中</h4>
                            <p>隨著晨曦的溫暖光芒輕拂過花園，你開啟了一天的美好。夏日的早晨，帶著白檸檬的清新氣息，輕輕撫過你的臉頰，喚醒內心對大自然之美的向往，引領你走入這片充滿生機的夏日花園。</p>
                        </div>
                        <div>
                            <div className="img-border">
                                <figure><img src="./images/prod-story-summer1.jpg" alt="" /></figure>
                            </div>
                        </div>

                    </div>
                    <div className="prod-story">
                        <div></div>
                        <div className="prod-story-right">
                            <h4>在鬱金香的繽紛中徜徉</h4>
                            <p>這座花園裡，繽紛的鬱金香在陽光下綻放，它們的豐富色彩和香氣引領你穿梭於花叢之間。你跟隨著這股花香，沉浸在色彩斑斕的世界中，感受夏日的活力和喜悅。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div>
                            <h4>鼠尾草與綠葉的清新融合</h4>
                            <p>在這片花園中，你發現了一片覆蓋著鼠尾草和新鮮綠葉的角落。這裡的空氣中充滿了清新與生機，鼠尾草的淡雅香氣與綠葉的清新完美融合，創造出一種平靜而恬淡的氛圍。你在這個角落靜靜地享受著這個夏日早晨，與自然和諧共處。</p>
                        </div>
                        <div>
                            <figure className="right-photo3"><img src="./images/prod-story-summer2.svg" alt="" /></figure>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-4">

                            <figure className="left-photo4-2">
                                <img src="./images/prod-story-summer3.jpg" alt="" />
                            </figure>
                            <figure className="left-photo4">
                                <img src="./images/prod-story-3-frame.svg" alt="" />
                            </figure>
                        </div>
                        <div className="prod-story-right">
                            <h4>夏日花園的香氛</h4>
                            <p>這款香水融合了白檸檬的活力、鬱金香的華麗與鼠尾草的自然氣息，成為一款完美的夏日香氛。它將夏日花園的精髓捕捉於每一滴香水之中。</p>
                        </div>
                    </div>
                    <div className="prod-story">
                        <div className="prod-story-left">
                            <h4>你的夏日花園時光</h4>
                            <p>讓這款香水成為你在夏日花園中的完美伴侶。每次噴灑，都仿佛重現花園裡的每一個美好瞬間，將你帶入一個充滿色彩和生命力的夢幻世界。這款香水不僅是一種香氛，它是你在夏日花園中度過的每一刻美好記憶的象徵。
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="prod-story-last">
                勇敢地去享受，去感受，這個世界充滿了夏日的美好與驚喜。<br/>
                這款香水將成為你沉浸在自然美景中的伴侶，引領你進入一個充滿生機與活力的全新世界。
                    <figure><img src="./images/prod-story-last-circle-yellow.svg" alt="" /></figure>
                </div>

            </section>
            <section className={`prod-notes theme-${theme}`}>
                <div className="prod-notes-title">

                    <figure className="note-time"><img src="./images/prod-note-time-yellow.svg" alt="" /></figure>
                    <h2>香調輪廓</h2>

                </div>
                <div className="prod-note-contain">
                    <div className="top">
                        <h2>香調</h2>
                        <h3>清新調Fresh</h3>
                        <figure className="top-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                    </div>
                    <div className="bottom">
                        <div>
                            <h2>前調</h2>
                            <h3>白檸檬</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>中調</h2>
                            <h3>鬱金香</h3>
                        </div>
                        <figure className="bottom-line"><img src="./images/prod-note-line-v.svg" alt="" /></figure>
                        <div>
                            <h2>後調</h2>
                            <h3>鼠尾草</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`prod-material theme-${theme}`}>
                <div className={`prod-material-contain theme-${theme}`}>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>白檸檬</h4>
                            <p>lemon</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>白檸檬散發著清新、明亮、柑橘的香氣。白檸檬具有激動人心的酸爽，帶來活力四射的感覺。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>白檸檬通常與清新、活力、喜悅相聯繫。其明亮的香氣被視為提升情緒的元素，為人帶來快樂的感受。</p>
                        </div>
                    </div>
                    <div className="material-info-div">
                        <div className="material-name">
                            <h4>鬱金香</h4>
                            <p>Tulip</p>
                        </div>
                        <div className="material-info">
                            <p><span>香氣特性｜</span>鬱金香散發著清淡、溫暖、馥郁的香氣，具有濃郁的奶油和焦糖風味。</p>
                        </div>
                        <div className="material-info">
                            <p><span>象徵意義｜</span>鬱金香象徵著高貴與優雅，展現著永恆的美與熱情。鬱金香散發著深沉的情感，代表著愛情、熱情和優雅的魅力。</p>
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
                    <figure className="p1"><img src="./images/prod-photo-summer1.jpg" alt="" /></figure>
                    <figure className="p2"><img src="./images/prod-photo-summer2.svg" alt="" /></figure>
                    <div className="prod-photo-small">
                        <figure><img src="./images/prod-photo-summer3.svg" alt="" /></figure>
                        <figure><img src="./images/prod-photo-summer4.png" alt="" /></figure>
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
export default ProdSummer;
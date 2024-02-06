import React from "react";
import { Link } from "react-router-dom"

const Shoppingfirst = () => {
  // const sthRef = useRef(null);//null / undefined / 0 / -0 / "" / [] / {} => false
  // const [error, setError] = useState(null);
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const scrollIt = ()=>{};
  //   window.addEventListener("scroll", scrollIt);

  //   return ()=>{
  //     window.removeEventListener("scroll", scrollIt);
  //   }
  // },[]);
  // const handleSubmit = (e)=>{
  //   console.log(sthRef.current.value);

  //   // localStorage.setItem("phone",sthRef.current.value);
  //   if (!sthRef.current.value){
  //     // console.log("請填完整")
  //     setError("請填完整");
  //     console.log(error);
  //   } else {
  //     localStorage.setItem("",sthRef.current.value);
  //     navigate("/shopping3rd");
  //   }}

  return (
    
      <body>
        <main>
          <section id="shopping2nd">
            <div className="big-box">
              <div className="top-steps">
                <div className="steps">
                  <h3 id="s1">1</h3>
                  <p>購物車</p>
                </div>
                <div className="steps">
                  <h3 id="s2">2</h3>
                  <p>選擇配送與付款資訊</p>
                </div>
                <div className="steps">
                  <h3 id="s3">3</h3>
                  <p>完成訂單</p>
                </div>
              </div>
              <div className="list-box">
                <h3 className="title">購物訂單</h3>
                <div className="list">
                  <p className="products">商品</p>
                  <p className="price">價格</p>
                  <p className="qty">數量</p>
                  <p className="total">商品金額</p>
                </div>

                <article className="list-item">
                  <div className="list-item-product">
                    <figure className="product">
                      <img src="./images/prod-soulwood.png" alt="" />
                    </figure>
                  </div>
                  <div className="item">
                    <p>靈魂深處的幽林冒險</p>
                    <p>$2,880</p>
                    <div id="shopping-cart">
                      <button id="decrease">-</button>
                      <input type="text" id="quantity" value="1" />
                      <button id="increase">+</button>
                    </div>
                    <p>$2,880</p>
                    <p>
                      <Link to=""><img src="./images/garbage.svg" alt="垃圾桶" /></Link>
                    </p>
                  </div>
                </article>
                <div className="total">
                  <div className="t1">

                    <h4>商品金額：</h4>
                    <h4>$2,880</h4>

                  </div>
                </div>
              </div>
              <form action="" name="contact" id="contact_form" method="post">
                <div className="list-boxes">
                  <h3 className="title">選擇配送方式</h3>
                  <div className="form">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="shipping-tw"
                        checked
                      />
                      <label className="form-check-label" for="shipping-tw">
                        台灣-宅配（台灣本島）
                      </label>
                    </div>
                  </div>
                </div>
                <div className="list-boxes">
                  <h3 className="title">訂購人資料</h3>
                  <div className="form-sign">
                    <div className="sign">
                      <label for="username">姓名：</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        title="請輸入姓名"
                        placeholder="請輸入姓名"
                        autoComplete="on"
                        // ref={sthRef}
                        required
                      />
                    </div>
                    <div className="sign">
                      <label for="tel">電話：</label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        title="請輸入連絡電話"
                        placeholder="請輸入號碼"
                        autoComplete="on"
                        required
                      // ref={sthRef}
                      />
                    </div>
                  </div>
                  <div className="notice-box">
                    <p>
                      此表單僅供示意，無蒐集資料之功能，不會將資料提供給第三人、或移作其他目的使用。
                    </p>
                  </div>
                </div>
                <div className="list-boxes">
                  <h3 className="title">付款方式</h3>
                  <div className="form">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paying"
                        id="paying-card"
                      />
                      <label className="form-check-label" for="paying-card">
                        信用卡一次付清
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paying"
                        id="paying-later"
                        checked
                      />
                      <label className="form-check-label" for="paying-later">
                        貨到付款
                      </label>
                    </div>
                  </div>
                </div>
                <div className="list-boxes">
                  <h3 className="title">發票資訊</h3>
                  <div className="form">
                    <label for="regularSelect"></label>
                    <select id="regularSelect" name="regularSelect">
                      <option value="1">二聯式電子發票(存入會員帳號)</option>
                      <option value="2">其他</option>
                    </select>
                  </div>
                </div>
                <div className="next-box">
                  <div className="btn">
                    <Link to="/shopping"><button type="button">返回前頁</button></Link>
                  </div>

                  <div className="btn">
                    <input type="submit" id="submit" value="確認結帳" />
                    <Link to="/shopping3rd"><button type="button">下一步</button></Link>
                    {/* 結帳 */}
                  </div>

                  {/* {error && <div>{error}</div> } */}
                </div>
              </form>
            </div>
          </section>
        </main>
      </body>


  )
}

export default Shoppingfirst;
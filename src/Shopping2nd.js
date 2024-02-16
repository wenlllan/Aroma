import React, { useEffect, useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shopping2nd = ({ shopItems, setShopItems, setShopCount, shopCount }) => {
  // 購物車渲染
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    setShopItems(() => {
      return JSON.parse(localStorage.getItem("cart"));
    });
    console.log(shopCount);
    console.log(shopItems);
    // console.log(shopItems.price);
  }, [shopCount]);

  useEffect(()=>{
    let total=0;
    if(shopItems){
      shopItems.map((i)=>{
        total += i.currentPrice
      })
    }
    setTotalPrice(total)
  },[shopItems])


  //必填資料
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userName.trim() === "") {
      setMsg1(" *必須填寫「姓名」");
    } else {
      setMsg1("");
    }
    if (userTel.trim() === "") {
      setMsg2(" *必須填寫「電話」");
    } else {
      setMsg2("");
    }
    if (userName.trim() !== "" && userTel.trim() !== "") {
      navigate("/shopping3rd");
    }
  }
  // 表單驗證
  //   function handleClick(e) {
  //     console.log(username);

  //     // navigate('/shopping3rd');
  // };
  // const handleChangeName=(e)=> {
  //   setUsername(e.target.value)
  // }

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
                <p className="ml">容量</p>
                <p className="price">價格</p>
                <p className="qty">數量</p>
                <p className="total">商品金額</p>
              </div>
              <div className="list-item">
                  {shopItems &&
                    shopItems.map((item) => {
                      return (
                        <>
                        <div className="list-item-div" >
                          <div className="list-item-product">
                            <figure className="product">
                              <img src={item.src} />
                            </figure>
                          </div>
                          <div className="item">
                            <p className="products">{item.title}</p>
                            <p className="ml">{item.ml}ml</p>
                            <p className="price">${item.price}</p>
                            <div id="shopping-cart"  className="qty">
                              <button id="decrease">-</button>
                              {/* <input type="text" id="quantity" value='${item.count}' /> */}
                              <div id="quantity">{item.count}</div>
                              <button id="increase">+</button>
                            </div>
                            <p  className="total">${item.currentPrice}</p>
                            <figure className="garbage-can">
                              <img src="./images/garbage.svg" alt="垃圾桶" />
                            </figure>
                          </div>
                          </div>
                        </>
                      );
                    })}
                  {/* <div className="list-item-product">
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
                  <figure className="garbage-can">
                    <img src="./images/garbage.svg" alt="垃圾桶" />
                  </figure>
                </div> */}
                </div>
              {/* <article className="list-item">
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
                    <Link to="">
                      <img src="./images/garbage.svg" alt="垃圾桶" />
                    </Link>
                  </p>
                </div>
              </article> */}
              <div className="total">
                <div className="t1">
                  <h4>商品金額：</h4>
                  <h4>${totalPrice}</h4>
                </div>
              </div>
            </div>
            <form
              action=""
              name="contact"
              id="contact_form"
              method="post"
              onSubmit={handleSubmit}
            >
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
                    <label for="name">姓名：</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      title="請輸入姓名"
                      placeholder="請輸入姓名"
                      autoComplete="on"
                      // required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <span style={{ color: "#ff9b99" }}>{msg1}</span>
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
                      // required
                      value={userTel}
                      onChange={(e) => setUserTel(e.target.value)}
                    />
                    <span style={{ color: "#ff9b99" }}>{msg2}</span>
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
                  <Link to="/shopping">
                    <button type="button">返回前頁</button>
                  </Link>
                </div>

                <div className="btn">
                  <input type="submit" id="submit" value="確認結帳" />
                  <figure className="right-arrow">
                    {/* <img src="./icon/right-arrows.svg" alt="" /> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" style="fill:#f97c4b" data-name="Right"/></svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 841.9 595.3"
                    >
                      <path
                        class="st0"
                        d="M593.8,316.1c-2.9,0-4.8,0-6.6,0c-127.2,0-254.5,0-381.7,0c-10,0-16.9-4.2-19.8-12.1
	c-4.3-11.7,3.9-24.2,16.4-24.9c1.7-0.1,3.4,0,5.1,0c126.8,0,253.6,0,380.3,0c1.8,0,3.6,0,6.4,0c-2-2.1-3.3-3.5-4.7-4.9
	c-19.8-19.8-39.7-39.5-59.5-59.3c-5.3-5.3-7-11.6-5-18.6c2-6.9,6.8-11.3,13.8-12.8c6.9-1.5,12.7,0.8,17.6,5.7
	c18,17.9,36,35.8,54,53.7c13.6,13.6,27.3,27.1,40.9,40.7c8.5,8.5,8.6,19.3,0.1,27.8c-31.7,31.6-63.4,63.2-95.2,94.7
	c-7.2,7.2-17.2,7.9-24.7,2.2c-7.3-5.6-9.5-15.7-5-23.6c1.3-2.2,3.1-4.2,4.9-6c19.6-19.6,39.2-39.1,58.9-58.6
	C591.1,319.1,592,318,593.8,316.1z"
                      />
                    </svg>
                    {/* svg路徑 */}
                    
                  </figure>

                  {/* <button type="button">
                    下一步
                    <figure className="right-arrow">
                      <img src="./icon/right-arrows.svg" alt="" />
                    </figure>
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Shopping2nd;

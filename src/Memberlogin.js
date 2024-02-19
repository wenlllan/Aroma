import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const Memberlogin = ({ shopItems, setShopItems, setShopCount, shopCount }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setShopItems(() => {
      return JSON.parse(localStorage.getItem("cart"));
    });
    console.log(shopCount);
    console.log(shopItems);
    // console.log(shopItems.price);
  }, [shopCount]);

  useEffect(() => {
    let total = 0;
    if (shopItems) {
      shopItems.map((i) => {
        total += i.currentPrice;
      });
    }
    setTotalPrice(total);
  }, [shopItems]);

  return (
    <body>
      <main>
        <section id="memberlogin">
        <h3 className="title">會員專區</h3>
        <div  className="all-box">
        <div className="left-box">
                <Link to>會員專區</Link>
                <Link to>訂單查詢</Link>
                <Link to>我的收藏</Link>
                <Link to>購物說明</Link>
              </div>
        <div className="big-box">
              <div className="list-box">
                <h4 className="title">歷史訂單</h4>
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
                          <div className="list-item-div">
                            <div className="list-item-product">
                              <figure className="product">
                                <img src={item.src} />
                              </figure>
                            </div>
                            <div className="item">
                              <p className="products">{item.title}</p>
                              <p className="ml">{item.ml}ml</p>
                              <p className="price">${item.price}</p>
                              <div id="shopping-cart" className="qty">
                                {/* <button id="decrease">-</button> */}
                                {/* <input type="text" id="quantity" value='${item.count}' /> */}
                                <div id="quantity">{item.count}</div>
                                {/* <button id="increase">+</button> */}
                              </div>
                              <p className="total">${item.currentPrice}</p>
                              <figure
                                className="garbage-can"
                                style={{ width: `3vw` }}
                              >
                                {/* <img src="./images/garbage.svg" style={{ display: `none` }} /> */}
                              </figure>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="total">
                
                  <div className="t1">
                    <h4>運費：$60</h4>
                    <h4>商品金額：${totalPrice+60}</h4>
                  </div>
                  <div className="next1"></div>
                </div>
              </div>
            </div>
        </div>
            
          </section>
      </main>
    </body>
  );
};

export default Memberlogin;

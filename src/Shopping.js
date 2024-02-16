import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";

const Shopping = ({ shopItems, setShopItems, setShopCount, shopCount }) => {
 
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
  //  //即時取得localStorage購物車內容
  //  loadShoppingCart() {
  //   let totalPrice = JSON.parse(localStorage.getItem("orderTotal"));
  //   let totalOrder = JSON.parse(localStorage.getItem("orderList"));
  //   if (totalPrice) {
  //     const shoppingCart = { price: totalPrice, order: totalOrder };
  //     return shoppingCart;
  //   } else {
  //     return null;
  //   }
  // }

  // 清除localStorage購物車內容
  // removeShoppingCartItem(_id) {
  //   let totalOrder = JSON.parse(localStorage.getItem("orderList"));
  //   let totalPrice = JSON.parse(localStorage.getItem("orderTotal"));
  //   //totalOrder => array
  //   if (totalOrder) {
  //     const indexToRemove = totalOrder.findIndex((item) => {
  //       return item._id === _id;
  //     });
  //     if (indexToRemove >= 0) {
  //       totalPrice -= totalOrder[indexToRemove].price;
  //       if (totalPrice == 0) {
  //         totalOrder.splice(indexToRemove, 1);
  //         localStorage.removeItem("orderTotal");
  //         localStorage.removeItem("orderList");
  //       } else {
  //         console.log(totalPrice);
  //         totalOrder.splice(indexToRemove, 1); // 移除索引位置的元素，只移除一個
  //         localStorage.setItem("orderTotal", JSON.stringify(totalPrice));
  //         localStorage.setItem("orderList", JSON.stringify(totalOrder));
  //       }
  //     }
  //   }
  // }

  return (
    <div>
      <body>
        <main>
          <section id="shopping2nd">
            <div className="big-box">
              <div className="top-steps">
                <div className="steps1">
                  <h3 id="s1">1</h3>
                  <p>購物車</p>
                </div>
                <div className="steps1">
                  <h3 id="s2">2</h3>
                  <p>選擇配送與付款資訊</p>
                </div>
                <div className="steps1">
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
                <div className="total">
                  <div className="t1">
                    <h4>商品金額：</h4>
                    <h4>${totalPrice}</h4>
                  </div>
                  <div className="next1">
                    <Link to="/shopping2nd">
                      <input type="submit" id="submit" value="下一步" />
                      <figure className="right-arrow">
                        <img src="./icon/right-arrows.svg" alt="" />
                      </figure>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
};
export default Shopping;

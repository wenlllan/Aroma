import React from "react";
import { Link } from "react-router-dom";

const Shopping3rd = () => {
  return (
    <div>
      <body className="scrollBox">
        <main>
          <div className="modal"></div>
          <section id="shopping3rd">
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
                  <figure>
                    <img id="product" src="./images/product1.png" alt="" />
                  </figure>
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
                </article>
                <div className="total">
                  <div className="t1">
                    <ul>
                      <h4>商品金額：</h4>
                      <h4>$2,880</h4>
                    </ul>
                    <ul>
                      <h3>運費：</h3>
                      <h3>$60</h3>
                    </ul>
                    <ul>
                      <h3>總金額：</h3>
                      <h3>$2,940</h3>
                    </ul>
                  </div>
                </div>
                <div className="next">
                  <div className="btn">
                    <Link to="/shopping2nd">
                      <button type="button">返回前頁</button>
                    </Link>
                    <button className="showDialogBtn">確認結帳</button>
                    <div>
                      <div className="dialog">
                        <div className="content">
                          <div>訂單已完成</div>
                        </div>
                        <div className="buttons">
                          <div className="okBtn">
                            <img
                              src="./icon/icon _check small_.svg"
                              alt="check"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
export default Shopping3rd;

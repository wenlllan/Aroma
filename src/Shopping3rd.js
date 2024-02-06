import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

const Shopping3rd = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const showDialog = () => {
      setModalVisible(true);
    };
    const hideDialog = () => {
      setModalVisible(false);
    };
  
    const handleOkButtonClick = () => {
      // 隱藏dialog和modal的邏輯
      hideDialog();
    };
    
    useEffect(() => {
      // 在modalVisible改變時執行的效果
      if (modalVisible) {
        console.log("Modal is visible");
      } else {
        console.log("Modal is hidden");
      }
    }, [modalVisible]);
    
  return (
      <body>
        <main>
          {/* <div className="modal"></div> */}
          {modalVisible && (
            <div className="modal">
              <div className="dialog">
                <div className="content">
                  <div>訂單已完成</div>
                </div>
                <div className="okBtn" onClick={handleOkButtonClick}>
                  <img
                              src="./icon/icon _check small_.svg"
                              alt="check"
                            />
                </div>
              </div>
            </div>
          )};
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
                    <figure className="garbage-can">
                    <Link to=""><img src="./images/garbage.svg" alt="垃圾桶" /></Link>
                  </figure>
                  </div>
                </article>
                <div className="total">
                  <div className="t1">
                    <ul>
                      <h4>商品金額：</h4>
                      <h4>$2,880</h4>
                    </ul>
                    <ul>
                      <h4>運費：</h4>
                      <h4>$60</h4>
                    </ul>
                    <ul>
                      <h4>總金額：</h4>
                      <h4>$2,940</h4>
                    </ul>
                  </div>
                </div>
                <div className="next">
                  <div className="btn">
                    <Link to="/shopping2nd">
                      <button type="button">返回前頁</button>
                    </Link>
                    <button className="showDialogBtn" onClick={showDialog}>
                      確認結帳
                    </button>
                    {/* modal */}
                    <div>
                      {/* <button className="showDialogBtn" onClick={showDialog}>
                            Show Dialog
                        </button> */}
                    </div>
                    {/* modal */}

                    <div>
                      {/* <div className="dialog">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
  );
};
export default Shopping3rd;

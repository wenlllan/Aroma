import React from "react";
import { Link } from "react-router-dom";

const Shops = () => {
  return (
    <body>
      <main>
        <section id="shops">
          <h3 className="title">尋找專門店</h3>
          <div>
            <form action="" name="search_form" id="search_form" method="post">
              <input
                type="search"
                className="underLineStyle"
                name="search_form"
                id="search_form"
                placeholder="輸入地點："
              />
              <button className="submit" name="search_form" id="search_form">
                查詢
              </button>
            </form>
          </div>
          <hr />
          <div className="list-box">
            <article className="list-item">
              <figure>
                <img src="./images/shop1.png" alt="" />
              </figure>
              <div className="sites">
                <h3 className="shop-name">Elegance Square旗艦店</h3>
                <div className="info">
                  <div className="left">
                    <div>
                      <p>
                        <img src="./images/icon-place.svg" alt="site" />
                      </p>
                      <p>松仁路888號1樓</p>
                    </div>
                    <div>
                      <div className="nono"></div>
                      <p>110,台北市,台灣</p>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p>
                        <img src="./images/icon-tel.svg" alt="site" />
                      </p>
                      <p>+886 02 8788 8888</p>
                    </div>
                    <div>
                      <p>
                        <img src="./images/icon-time.svg" alt="site" />
                      </p>
                      <p>週一-週日 11:00-21:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="list-item">
              <figure>
                <img src="./images/shop2.png" alt="" />
              </figure>
              <div className="sites">
                <h3 className="shop-name">Luxe Arcade旗艦店</h3>
                <div className="info">
                  <div className="left">
                    <div>
                      <p>
                        <img src="./images/icon-place.svg" alt="site" />
                      </p>
                      <p>松仁路888號1樓</p>
                    </div>
                    <div>
                      <div className="nono"></div>
                      <p>110,台北市,台灣</p>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p>
                        <img src="./images/icon-tel.svg" alt="site" />
                      </p>
                      <p>+886 02 8788 8888</p>
                    </div>
                    <div>
                      <p>
                        <img src="./images/icon-time.svg" alt="site" />
                      </p>
                      <p>週一-週日 11:00-21:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="list-item">
              <figure>
                <img src="./images/shop3.png" alt="" />
              </figure>
              <div className="sites">
                <h3 className="shop-name">Stellar Plaza旗艦店</h3>
                <div className="info">
                  <div className="left">
                    <div>
                      <p>
                        <img src="./images/icon-place.svg" alt="site" />
                      </p>
                      <p>松仁路888號1樓</p>
                    </div>
                    <div>
                      <div className="nono"></div>
                      <p>110,台北市,台灣</p>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <p>
                        <img src="./images/icon-tel.svg" alt="site" />
                      </p>
                      <p>+886 02 8788 8888</p>
                    </div>
                    <div>
                      <p>
                        <img src="./images/icon-time.svg" alt="site" />
                      </p>
                      <p>週一-週日 11:00-21:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="shops-img">
            <img src="./images/bg-shop.png" alt="shop" />
          </div>
        </section>
      </main>
    </body>
  );
};
export default Shops;

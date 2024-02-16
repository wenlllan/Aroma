import React from "react";
import { Link } from "react-router-dom";

const NewsArticle = () => {
  return (
    <body>
      <main>
        <section id="news_article">
          <h3 className="title">最新消息</h3>
          <div className="list-box">
            <article className="list-item">
              <figure>
                <img src="./images/product.png" alt="" />
              </figure>
              <div className="paragraph">
                <div className="p1">
                  <h3>芳香時光：Aroma品牌周年慶祝活動</h3>
                  <h3 className="date">2023.12.07</h3>
                </div>

                <div className="p2">
                  <p>
                    親愛的香水愛好者們，
                    我們迫不及待要與您分享一個特別的時刻！品牌周年慶祝活動即將展開，為了慶祝這個重要的里程碑，我們將為您呈獻一場無與倫比的芳香饗宴。
                    在這段慶祝活動期間，我們將提供一系列優惠給予我們珍貴的顧客：<br/><br/>
                    <strong>1. 特別優惠折扣：</strong><br/>
                    購買指定款式的香水將享有折扣優惠，讓您可以在這個特別的時刻以更優惠的價格擁有您喜愛的香氛。<br/><br/>
                    <strong>2. 限量周年紀念禮盒：</strong><br/>
                    我們特別設計了周年紀念禮盒，內含獨家香水款式與精美禮品，為您帶來驚喜與愉悅。<br/><br/>
                    <strong>3. 慶祝獨家活動：</strong><br/>
                    我們將舉辦特別的慶祝活動，包括品味試香會和專屬品牌介紹，讓您更深入了解香水背後的故事和特色。
                    此外，我們更期待讓您親身感受我們香水的魅力。在活動現場，我們將設置專業的試香區，讓您可以盡情嘗試各種款式的香水。<br/><br/>
                    我們深信，唯有親身體驗，才能找到最適合您的獨特香調。
                    為了讓您能在活動結束後也能感受到我們的用心，我們準備了送出精美樣品的驚喜！您可以帶著這些小小的香水樣品，繼續享受香氛的魅力，彷彿活動永遠都在延續。
                    讓我們一同共度這個特別的時刻，細味香水背後的故事，與我們一同創造更多美好的回憶。
                    謝謝您一直以來的支持，期待在活動現場與您相見！
                  </p>
                </div>
              </div>
            </article>
            <Link to="/news" className="back">回上一頁</Link>
            {/* <div className="pagenumber">
              <Link to="#">&lt;</Link>
              <Link to="#">1</Link>
              <Link to="#">2</Link>
              <Link to="#">3</Link>
              <Link to="#">&gt;</Link>
            </div> */}
          </div>
        </section>
      </main>
    </body>
  );
};
export default NewsArticle;

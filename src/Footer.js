import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-box">
          <ul>
            <li>
            <Link to="/" className="item-logo">
              <img src="./icon/logo-grey.svg" alt="LOGO" />
            </Link>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li>
              <h3>聯絡我們</h3>
            </li>
            <li>
                
              <p>110 台北市花香二路28號1樓</p>
            </li>
            <li>
              <p>+886 02 8788 8888</p>
            </li>
            <li>
              <p>週一-週日 11:00-21:30</p>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li>
              <h3>客服專區</h3>
            </li>
            <li>
              <Link to="#">有什麼想詢問的嗎？</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <li>
              <h3>追蹤我們</h3>
            </li>
            <div className="item">
              <Link to="#">
                <img src="./icon/icon_instagram.svg" alt="instagram" />
              </Link>
              <Link to="#">
                <img src="./icon/icon_facebook.svg" alt="facebook" />
              </Link>
              <Link to="#">
                <img src="./icon/icon_youtube.svg" alt="youtube" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

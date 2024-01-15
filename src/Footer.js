import React from "react";
import {Link} from "react-router-dom"
const Footer = ()=>{
    return (
            <footer>
                <div>
                    <div className="footer-box">
                        <ul>
                            <li><h3>客服中心</h3></li>
                            <li><Link to="#">常見問題</Link></li>
                            <li><Link to="#">運送服務</Link></li>
                            <li><Link to="#">退換貨服務</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <ul>
                            <li><h3>分店查詢</h3></li>
                            <li><Link to="#">搜尋櫃點</Link></li>
                            <li><Link to="#">線上服務</Link></li>
                            <li><Link to="#">聯絡方式</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <ul>
                            <li><h3>關於我們</h3></li>
                            <li><Link to="#">關於Aroma</Link></li>
                            <li><Link to="#">加入我們</Link></li>
                            <li><Link to="#">隱私權政策</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <ul>
                            <li><h3>了解更多</h3></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">LINE</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

    )
}

export default Footer;
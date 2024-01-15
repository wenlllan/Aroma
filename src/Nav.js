import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
//import logo from "./images/logo.svg";
const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const shouldShowNav = window.innerWidth > 576;
            setIsMobile(!shouldShowNav);
            setNavVisible(shouldShowNav);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    const navStyle = {
        left: navVisible || !isMobile ? '0' : '-70%',
        transition: 'left 0.3s ease-in-out',
    };


    return (
        <header>
            <div className="hamburger-menu" onClick={toggleNav}>
                {/* 漢堡菜單圖標放這裡 */}
                    <img src="./images/A.png" alt="Menu" />
                </div>
            <nav style={navStyle}>
                {/* 導航內容放這裡 */}
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="#" className="list-item">選擇香氣</Link>
                        <ul className="hide-prod">
                            <li><Link to="/prod" className="dream">夢幻花境</Link></li>
                            <li><Link to="/prod" className="summer">夏日晴空</Link></li>
                            <li><Link to="/prod" className="forest">幽林冒險</Link></li>
                        </ul>
                    </li>
                    <li className="nav-list-item"><Link to="/share" className="list-item">網紅推薦</Link></li>
                    <li className="nav-list-item"><Link to="/" className="list-item"><img src="./images/logo.svg"
                        alt="LOGO" /></Link></li>
                    <li className="nav-list-item"><Link to="/shops" className="list-item">櫃點資訊</Link></li>
                    <li className="nav-list-item"><Link to="/news" className="list-item">最新消息</Link></li>
                </ul>
                <div className="nav-list-item-icons">
                    <ul>
                        <li><Link to="/shopping"><img src="./images/icon-shoppingBag.svg" alt="" /></Link></li>
                        <li><Link to="/member"><img src="./images/icon-member.svg" alt="" /></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );


}
export default Nav;
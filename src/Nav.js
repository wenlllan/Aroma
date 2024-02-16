import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
const Nav = ({shopItems, setShopItems}) => {
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

    //hide-prod
    const [isActive, setIsActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const hideProdRef = useRef(null);
    const celebrityRecommendationRef = useRef(null);

    const toggleDropdown = (event) => {
        event.preventDefault();
        if (windowWidth <= 576) {
            setIsActive((prevIsActive) => !prevIsActive);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    useEffect(() => {
        if (windowWidth > 576 && isActive) {
            setIsActive(false);
        }

        if (celebrityRecommendationRef.current) {
            if (isActive && windowWidth <= 576) {
                celebrityRecommendationRef.current.style.marginTop = `${hideProdRef.current.scrollHeight}px`;
            } else {
                celebrityRecommendationRef.current.style.marginTop = '0';
            }
        }
    }, [isActive, windowWidth]);



    return (
        <header>
            <div className="hamburger-menu">
                {/* 漢堡菜單圖標放這裡 */}
                <div className="menu back menu--4" >
                    <label>
                        <input type="checkbox" onClick={toggleNav} />
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="30" />
                            <path className="line--1" d="M0 55l14-10c4.7-3.3 9-5 13-5h72" />
                            <path className="line--2" d="M0 50h99" />
                            <path className="line--3" d="M0 45l14 10c4.7 3.3 9 5 13 5h72" />
                        </svg>
                    </label>
                </div>
                <figure><Link to="/"><img src="./images/A.png" alt="logo" /></Link></figure>
            </div>
            <nav style={navStyle}>
                {/* 導航內容放這裡 */}
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="#" className="list-item" onClick={toggleDropdown}>選擇香氣</Link>
                        <ul className={`hide-prod ${isActive ? 'active' : ''}`} ref={hideProdRef}>
                            <li><Link to="/prod" className="dream">夢幻花境</Link></li>
                            <li><Link to="/prod-summer" className="summer">夏日晴空</Link></li>
                            <li><Link to="/prod-soul" className="forest">幽林冒險</Link></li>
                        </ul>
                    </li>
                    <li className="nav-list-item" ref={celebrityRecommendationRef}><Link to="/share" className="list-item">網紅推薦</Link></li>
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
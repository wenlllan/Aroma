import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const sliderRef = useRef(null);
    const itemsRef = useRef([]);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const dotsRef = useRef([]);
  
    const [lengthItems, setLengthItems] = useState(0);
    const [active, setActive] = useState(0);
    const [refreshInterval, setRefreshInterval] = useState(null);
  
    useEffect(() => {
      // Initialize references and state
      setLengthItems(itemsRef.current.length - 1);
  
      // Set up click handlers
      nextRef.current.addEventListener('click', nextClickHandler);
      prevRef.current.addEventListener('click', prevClickHandler);
  
      // Set up initial interval
      const interval = setInterval(nextClickHandler, 5000);
      setRefreshInterval(interval);
  
      // Clean-up on unmount
      return () => {
        clearInterval(interval);
        nextRef.current.removeEventListener('click', nextClickHandler);
        prevRef.current.removeEventListener('click', prevClickHandler);
      };
    }, []);
  
    const nextClickHandler = () => {
      setActive((prevActive) => (prevActive + 1 <= lengthItems ? prevActive + 1 : 0));
      reloadSlider();
    };
  
    const prevClickHandler = () => {
      setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : lengthItems));
      reloadSlider();
    };
  
    const dotClickHandler = (key) => {
      setActive(key);
      reloadSlider();
    };
  
    const reloadSlider = () => {
      const slider = sliderRef.current;
      const items = itemsRef.current;
      const dots = dotsRef.current;
  
    //   slider.style.left = -items[active].offsetLeft + 'px';
  
      items.forEach((item, index) => {
        if (index === active) {
          item.style.opacity = 1;
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = 0;
          item.style.transform = 'scale(1.5)';
        }
  
        item.style.transition = 'opacity 3s, transform 3s';
        item.style.position = 'absolute';
      });
  
      const nextActive = active + 1 <= lengthItems ? active + 1 : 0;
      items[nextActive].style.opacity = 0;
  
      setTimeout(() => {
        slider.style.left = -items[active].offsetLeft + 'px';
        items[active].style.opacity = 0;
        items[nextActive].style.opacity = 1;
        items[nextActive].style.transform = 'scale(1)';
      }, 5000);
  
      const lastActiveDot = dots.find((dot) => dot.classList.contains('active'));
      lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      setRefreshInterval(setInterval(nextClickHandler, 5000));
    };
  return (
    <div>
      <body className="scrollBox">
        {/* 導入slider */}
        <div className="slider">
          <div className="list" ref={sliderRef}>
            {itemsRef.current.map((item, index) => (
              <div className="item" key={index}>
                <img src={`../images/main_bg${index + 1}.jpg`} alt="" />
              </div>
            ))}
          </div>
          <div className="buttons">
            <button id="prev" ref={prevRef}>
              {"<"}
            </button>
            <button id="next" ref={nextRef}>
              {">"}
            </button>
          </div>
          <ul className="dots" ref={dotsRef}>
          {Array.from(dotsRef.current).map((dot, key) => (
              <li
                key={key}
                className={key === active ? "active" : ""}
                onClick={() => dotClickHandler(key)}
              ></li>
            ))}
          </ul>
        </div>

        {/* 導入section main */}
        <section className="main">
          <div className="main-center-div">
            <div className="main-center-div-logo">
              <img src="./images/logo.svg" alt="" />
            </div>
            <h2>
              尋找清新與自然的氣息，
              <br />
              Aroma 。
            </h2>
            <p>
              無論你是在城市的繁華中，還是自然的懷抱裡，
              <br />
              Aroma都帶給你春天的氛圍，讓你感受到清新和自在。
            </p>
          </div>
          <div className="main-prod">
            <div className="index-main-prod-dream">
              <img src="./images/prod-dream.png" alt="" />
            </div>
          </div>
        </section>
        <section className="all-prod-list">
          <h2>商品列表</h2>
          <div className="prod-list">
            <div className="prod-list-items">
              <Link to="/prod">
                <div>
                  <img src="./images/prod-soulwood.png" alt="" />
                </div>
                <h3 className="sq-title">靈魂深處的幽林冒險</h3>
                <h4>Soulwood Quest</h4>
              </Link>
            </div>
            <div className="prod-list-items">
              <Link to="/prod">
                <div>
                  <img src="./images/prod-dream.png" alt="" />
                </div>
                <h3 className="d-title">尋香奇遊的夢幻花境</h3>
                <h4>Dreamscape Bloom</h4>
              </Link>
            </div>
            <div className="prod-list-items">
              <Link to="/prod">
                <div>
                  <img src="./images/prod-summer.png" alt="" />
                </div>
                <h3 className="sum-title">恬靜風情的夏日晴空</h3>
                <h4>Summer Serenity</h4>
              </Link>
            </div>
          </div>
        </section>
        <section id="select-sample">
          <div class="select-sample-cn">
            <span>選擇屬於你的故事</span>&#12288;<span>或者</span>&#12288;
            <span>還沒決定踏上哪一段旅程嗎？</span>
          </div>
          <div class="select-sample-eng">
            <p>Find your story or start a new journey</p>
          </div>
          <div id="select-sample-btn">
            <Link to="/register">索取試用</Link>
            <Link to="/selectsample">尋找香氣</Link>
          </div>
        </section>
        <section className="brand-info">
          <div className="brand-info-video">
            <img src="./video/florist_background_HD_BG_yellow.gif" alt="" />
          </div>
          <div className="brand-info-img1">
            <img src="./images/brand-info-img1.jpg" alt="" />
          </div>
          <div className="brand-info-story">
            <h2>品牌故事</h2>
            <p>
              Aroma源自對自然香氛的追求，它不僅是一瓶香水，更是一段扣人心弦的旅程。
              <br />
              當清晨的第一縷陽光穿透樹葉，落在綻放的花朵上，Aroma誕生了。
            </p>
          </div>
          <div className="brand-info-concept">
            <h2>創辦理念</h2>
            <p>
              Aroma以最純淨的天然素材打造，精挑細選的花草精華和春天的氣息融入每滴香水之中。我們不僅注重味道，更專注於瓶子裡的故事。
              <br />
              每一滴都是春天的氛圍，擁抱著陽光和溫暖。在Aroma的香氛中，你會找到質感的輕柔觸感，如同柔和的微風在花瓣間輕撫。
            </p>
          </div>
          <div className="brand-info-img2">
            <img src="./images/brand-info-concept-.jpg" alt="" />
          </div>
          <div className="brand-info-img3">
            <img src="./images/brand-info-show.jpg" alt="" />
          </div>
        </section>
      </body>
    </div>
  );
};
export default Homepage;

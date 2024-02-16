// import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react';

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import img1 from "./images/main_bg1.jpg";

const Test = () => {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // const [delayedCursorPos, setDelayedCursorPos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const newPos = { x: e.clientX, y: e.clientY };
  //     setCursorPos(newPos);
  //     setTimeout(() => setDelayedCursorPos(newPos), 120);
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  
  return (
    <body>
        {/* <div className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}/> */}
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={{ forceToAxis: true }}
        // keyboard={true}
        speed={4000}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        // className="mySwiper"
        // ref={bannerSectionRef}
        effect={"fade"}
        fadeEffect={{
          crossFade: true, // enables slides to cross fade
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Autoplay,
          EffectFade,
        ]}
        style={{ height: "100dvh" }}
      >
        
        <SwiperSlide className="swiper-slide">
        {/* <div className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}/> */}
          <div
            className="img"
            style={{
              backgroundImage: `url(../images/main_bg1.jpg)`,
            }}
          ></div>
          <div className="main">
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
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        {/* <div className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}/> */}
          <div
            className="img"
            style={{
              backgroundImage: `url(../images/main_bg2.jpg)`,
            }}
          ></div>
          <div className="main">
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
                <img src="./images/prod-soulwood.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        {/* <div className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}/> */}
          <div
            className="img"
            style={{
              backgroundImage: `url(../images/main_bg3.jpg)`,
            }}
          ></div>
          <div className="main">
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
                <img src="./images/prod-summer.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <section className="all-prod-list">
        <h2>商品列表</h2>
        <div className="prod-list">
          <div className="prod-list-items">
            <Link to="/prod-soul">
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
        <div className="select-sample-cn">
          <span>選擇屬於你的故事</span>&#12288;<span>或者</span>&#12288;
          <span>還沒決定踏上哪一段旅程嗎？</span>
        </div>
        <div className="select-sample-eng">
          <p>Find your story or start a new journey</p>
        </div>
        <div id="select-sample-btn">
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
  );
};

export default Test;

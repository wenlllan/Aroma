import React,{useState,useEffect} from "react";
import "../src/css/style.css";
import Layout from "./Layout"
import Homepage from "./Homepage";
import ProdDream from "./ProdDream";
import ProdSummer from "./ProdSummer";
import ProdSoul from "./ProdSoul";
import Member from "./Member";
import Register from "./Register";
import SelectSample from "./SelectSample";
import News from "./News";
import Share from "./Share";
import Shopping from "./Shopping";
import Shopping2nd from "./Shopping2nd";
import Shopping3rd from "./Shopping3rd";
import NewsArticle from "./NewsArticle";
import Shops from "./Shops";
import QSecond from "./QSecond";
import HomepageSw from "./HomepageSw";
import SelectSampleThird from "./SelectSampleThird";
import SelectSampleThirdS from "./SelectSampleThird-S";
import BgGradient from "./BgGradient";

// import { Helmet } from 'react-helmet';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [shopItems, setShopItems] = useState(null);
  const [shopCount, setShopCount] = useState(null)
  
  // useEffect(()=>{
  //   setShopItems(()=>{
  //     return JSON.parse(localStorage.getItem("cart"))
  //   })
  // },[shopCount])

  return (
    <div className="App">
      {/* <Helmet>
        <link rel="preload" href="../src/css/style.css" as="font/script/style" />
      </Helmet> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout shopItems={shopItems} setShopItems={setShopItems} />}>
            <Route index element={<HomepageSw />}></Route>
            <Route path="prod" element={<ProdDream theme="pink" shopCount={shopCount} setShopCount={setShopCount} shopItems={shopItems} setShopItems={setShopItems} />}></Route>
            <Route path="prod-summer" element={<ProdSummer theme="yellow" shopItems={shopItems} setShopItems={setShopItems} />}></Route>
            <Route path="prod-soul" element={<ProdSoul theme="green" shopItems={shopItems} setShopItems={setShopItems} />}></Route>
            <Route path="member" element={<Member />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="selectsample" element={<SelectSample />}></Route>
            <Route path="selectsamplesec" element={<QSecond />}></Route>
            <Route path="selectsamplethird" element={<SelectSampleThird />}></Route>
            <Route path="selectsamplethird-s" element={<SelectSampleThirdS />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="share" element={<Share />}></Route>
            <Route path="shopping" element={<Shopping shopCount={shopCount} setShopCount={setShopCount} shopItems={shopItems} setShopItems={setShopItems}/>}></Route>
            <Route path="shopping2nd" element={<Shopping2nd />}></Route>
            <Route path="shopping3rd" element={<Shopping3rd />}></Route>
            <Route path="newsArticle" element={<NewsArticle />}></Route>
            <Route path="shops" element={<Shops />}></Route>
            {/* <Route path="homepageSw" element={<HomepageSw />}></Route> */}
          </Route>

          {/* <Route path="/homepagesw" element={<HomepageSw />}></Route> */}

          {/* <Route path="/test" element={<Test2 />}></Route> */}
          <Route path="/test" element={<BgGradient />}></Route>

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

import "../src/css/style.css";
// import Nav from './Nav';
// import Footer from './Footer';
import Layout from "./Layout"
import Homepage from "./Homepage";
import ProdDream from "./ProdDream";
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
import SelectSampleSec from "./SelectSampleSec";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="prod" element={<ProdDream />}></Route>
            <Route path="member" element={<Member />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="selectsample" element={<SelectSample />}></Route>
            <Route path="selectsamplesec" element={<SelectSampleSec />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="share" element={<Share />}></Route>
            <Route path="shopping" element={<Shopping />}></Route>
            <Route path="shopping2nd" element={<Shopping2nd />}></Route>
            <Route path="shopping3rd" element={<Shopping3rd />}></Route>
            <Route path="newsArticle" element={<NewsArticle />}></Route>
            <Route path="shops" element={<Shops />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

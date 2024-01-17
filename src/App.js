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
            <Route path="news" element={<News />}></Route>
            <Route path="share" element={<Share />}></Route>
            <Route path="shopping" element={<Shopping />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

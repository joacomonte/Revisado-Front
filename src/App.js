
import './App.css';

import  { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js"
import Shop from "./pages/Shop.js"
import SingleProduct from "./pages/SingleProductPage.js"


function App() {
  return (
    <div className="allPages">
        <div className='pageContainer'>
          <div className='pageContent'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:productId" element={<SingleProduct/>} />
      </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

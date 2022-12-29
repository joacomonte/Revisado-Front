
import './App.css';

import  { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js"
import Shop from "./pages/Shop.js"
import SingleProduct from "./pages/SingleProductPage.js"
import NewProduct from "./pages/NewProduct"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <div className="allPages">
        <div className='pageContainer'>
          <div className='pageContent'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/shop/new-product" element={<NewProduct/>} />
            <Route path="/shop/:productId" element={<SingleProduct/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

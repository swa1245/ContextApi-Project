import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-amber-50">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {

  return (
    <div className="bg-amber-50">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
      </div>
    </div>
  );
};

export default App;

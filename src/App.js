import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

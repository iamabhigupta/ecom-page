import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductImage from "./components/ProductImage";
import Details from "./components/Details";
import ProductContent from "./components/ProductContent";
import FirstOrder from "./components/FirstOrder";
import Commitment from "./components/Commitment";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductImage />
      <Details />
      <ProductContent />
      <FirstOrder />
      <Commitment />
    </div>
  );
};

export default App;

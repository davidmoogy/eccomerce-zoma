import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Category/>

      <div className="products-container">
          <Products/>
      </div>

       
    </div>
  );
}

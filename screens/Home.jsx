import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";
import { useState } from "react";

export default function Home() {
  
  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <div className="main">
      
      <Category Setselectedcategory={setSelectedCategory}/>

      <div className="products-container">
          <Products selectedCategory={selectedCategory}/>
          
      </div>

       
    </div>
  );
}

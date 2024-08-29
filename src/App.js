import React from "react";
import ProductCard from "./ProductCard";
import productImage1 from "./assets/user1.jpg";
import productImage2 from "./assets/user2.jpg";

function App() {
  return (
    <div>
      <ProductCard
        imageSrc={productImage1}
        productName="Ropa chica 1"
        productPrice="29.00"
      />
      <ProductCard
        imageSrc={productImage2}
        productName="Ropa chica 2"
        productPrice="49.99"
      />
    </div>
  );
}
export default App;

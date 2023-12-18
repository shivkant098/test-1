// ProductDetailPage.js
import React from "react";
import ProductDetails from "./ProductDetails";
import data from "../db/data"; // Import your product data

const ProductDetailPage = () => {
  return (
    <div>
      <h1>Product Details Page</h1>
      <ProductDetails products={data} />
    </div>
  );
};

export default ProductDetailPage;

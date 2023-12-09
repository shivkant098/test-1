// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { title } = useParams();
  const product = products.find((p) => p.title === title);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      {/* Add other details you want to display */}
    </div>
  );
};

export default ProductDetails;

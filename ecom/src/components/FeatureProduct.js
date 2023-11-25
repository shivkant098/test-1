import { useProductContext } from "../context/productcontext";

// import React from 'react'
const FeatureProduct = () => {
    const {isLoading,featureProducts}=useProductContext();
console.log('file-featureProducts',featureProducts);
// https://www.youtube.com/watch?v=aCgk0M7aSQY&list=PLwGdqUZWnOp0f3nfgWGbk3_fe8hoMIYpA&index=17n   4:24
  return (
    <div>feature</div>
  )
}

export default FeatureProduct;
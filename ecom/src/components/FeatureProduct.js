import { useProductContext } from "../context/productcontext";
import Product from "./Product";
import "./product.css";

// import React from 'react'
const FeatureProduct = () => {
    const {isLoading,featureProducts}=useProductContext();
  
  if(isLoading){
    return <div>....Loading</div>;
  }
  return (
<>
<div className="section">
  <div className="conatiner">
    <div className="intro-data">Check Now !</div>
    <div className='common-heading'>Our Features Products</div>

<div className="gird gird-three-column">
  {
    featureProducts.map((curElem)=>{
      return <Product  key={curElem.id}{...curElem}/>;
    })
  }
</div>

  </div>

</div>
</>
    )
}

export default FeatureProduct;
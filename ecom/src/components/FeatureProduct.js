import React from 'react';
import './product.css';
import { useProductContext } from '../context/productcontext';
import Product from './Product';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>....Loading</div>;
  }

  return (
    <>
      <div className="section">
        <div className="container">
          <center>
          <div className="intro-data ">Check Now !</div>
          <div className='common-heading'>Our Features Products</div>
</center>
          <div className="card-container">
            {featureProducts.map((curElem) => (
              <Product key={curElem.id} {...curElem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;

// import React from 'react';

const ProductReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return {
          ...state,
          isLoading: true,
        }; 
      case 'set_api_data':
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === true;
        });
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: featureData,
        };
      case 'api_error':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export default ProductReducer;
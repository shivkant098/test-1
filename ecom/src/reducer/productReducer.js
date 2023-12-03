// import React from 'react';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'set_single_loading':
      return {
        ...state,
        isSingleLoading: true,
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
    case 'set_single_product':
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case 'single_error':
      return {
        ...state,
        isLoading: false,
        isError: true,
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

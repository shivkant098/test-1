import React from 'react'
import { useProductContext } from '../context/productcontext';
// import { AppContext } from '../context/productcontext';

const Grocery = () => {
    const {name}=useProductContext();

  return (
    <div>
      
      {name}
      
      
      </div>
  )
}

export default Grocery;
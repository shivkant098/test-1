// import { useState } from "react";
// import Navigation from "./Shop/Navigation/Nav";
// import Card from "./Shop/Card";
// import Recommended from "./Shop/Recommended/Recommended";
// import Products from "./Shop/Products/Products";
// import Sidebar from "./Shop/Sidebar";

// const Everything = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = Products.filter(
//     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(products, selected, query) {
//     let filteredProducts = products;

//     if (query) {
//       filteredProducts = filteredItems;
//     }

//     if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }

//     return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
//       <Card
//         key={title} // Use a unique identifier from your data as the key
//         img={img}
//         title={title}
//         star={star}
//         reviews={reviews}
//         prevPrice={prevPrice}
//         newPrice={newPrice}
//       />
//     ));
//   }

//   const result = filteredData(Products, selectedCategory, query);

//   return (
//     <>
//       <h1>hiii</h1>
//       <Sidebar handleChange={handleChange} />
//       <Navigation query={query} handleInputChange={handleInputChange} />
//       <Recommended handleClick={handleClick} />
//       <Products result={result} />
//     </>
//   );
// };

// export default Everything;

import React from 'react'
// import { useProductContext } from '../context/productcontext';
// import { AppContext } from '../context/productcontext';

const Everything = () => {
    // const {name}=useProductContext();

  return (
    <div>
      hi
      {/* {name} */}
      
      
      </div>
  )
}

export default Everything;

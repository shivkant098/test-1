import React from  "react";

import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
// import React from  "react";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/organic-2-234343.png" alt="im1"/> */}
          {/* <h1>🛒</h1> */}
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

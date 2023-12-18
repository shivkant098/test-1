import React from  "react";

import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Vegetable"
          title="Vegetable"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fruits"
          title="Fruits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Juice"
          title="Juice"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="HouseHold-Item"
          title="HouseHold-Item"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Seeds & Plants"
          title="Seeds & Plants"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;

import React from  "react";

import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Company A" title=" Company A" />
          <Button onClickHandler={handleClick} value="Company B" title="Company B" />
          <Button onClickHandler={handleClick} value="Company C" title="Company C" />
          <Button onClickHandler={handleClick} value="Company D" title="Company D" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

import React, { useEffect } from "react";
// import $ from "jquery";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    const year = document.querySelector("#year");
    year.innerText = new Date().getFullYear();
  }, []);

  return (
    <div>
      <div className="footer">
        &copy;<span id="year"> </span>
        <span> Your Company Name. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

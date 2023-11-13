import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Grocery from '../pages/Grocery';
import Contact from '../pages/Contact';
import Everything from '../pages/Everything';
import Cart from '../pages/Cart';
import About from '../pages/About';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import Login from "../pages/Login";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <div>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="logo" />
                <span className="icon">
                  {/* <CodeIcon /> */}
                </span>
              </div>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/everything"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Everything
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/grocery"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Groceries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/juice"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Juice
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faUser} />
                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/cart"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {click ? (
                <span className="icon">
                  <HamburgetMenuOpen />{" "}
                </span>
              ) : (
                <span className="icon">
                  <HamburgetMenuClose />
                </span>
              )}
            </div>
          </div>
        </nav>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/everything" element={<Everything />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavBar;

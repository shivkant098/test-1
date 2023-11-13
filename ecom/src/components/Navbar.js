// Navbar.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Grocery from '../pages/Grocery';
import Contact from '../pages/Contact';
import Everything from '../pages/Everything';
import Cart from '../pages/Cart';
import About from '../pages/About';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import './navbar.css';

const Navbar = () => {
    const [isResponsive, setResponsive] = useState(false);

    const handleResponsiveToggle = () => {
        setResponsive(!isResponsive);
    };

    return (
        <div>
            <Router>
                <div className="logo">
                    <Link to="/">
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="logo" />
                    </Link>
                
                <div className={`nav-item ${isResponsive ? 'responsive' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/everything">Everything</Link>
                        </li>
                        <li>
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="icon" onClick={handleResponsiveToggle}>
                            <i className="fa fa-bars"></i>
                        </li>
                    </ul>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="grocery" element={<Grocery />} />
                    <Route path="everything" element={<Everything />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Navbar;

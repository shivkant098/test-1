import React from 'react'
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className='banner'>
        <div className='banner-pic'>
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png' alt="banner" />
        </div>
        <div className='banner-text'>
          <h5>Best Quality Products</h5>
          <h1>Join The Organic<br /> Movement!
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

          </p>
          <button className='button1'>Shop Now</button>
        </div>
      </div>


    </div>
  )
}

export default Home
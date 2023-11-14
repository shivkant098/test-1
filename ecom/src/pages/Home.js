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
      <div className='features'>
        <div className='f1'>
          <i class='fa fa-truck'></i>
          <h4>Free Shipping</h4>
          <p>Above $5 Only

          </p>
        </div>
        <div className='f2'>
          <h4>Certified Organic
          </h4>
          <p>100% Guarantee

          </p>
        </div>

        <div className='f3'>
          <h4>Huge Savings
          </h4>
          <p>At Lowest Price

          </p>
        </div>

        <div className='f4'>
          <h4>Easy Returns
          </h4>
          <p></p>
        </div>


      </div>
    <div className='content'>
      <div className='text1'>
    <h2>Best Selling Products
</h2>
<img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' alt='imga'/>
</div>
    </div>

    </div>
  )
}

export default Home
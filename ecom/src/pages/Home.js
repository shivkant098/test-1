import React from 'react'
import "./home.css";
import FeatureProduct from '../components/FeatureProduct';
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
          {/* <i class='fa fa-truck'></i> */}
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
          <p>No Questions Asked

          </p>
        </div>


      </div>
      <div className='content'>
        <div className='text1'>
          <h2>Best Selling Products</h2>
          <br />
          <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' alt='imga' />
        </div>
      </div>

      <div className='product'>
        <div className='product-item1'>
          <div className='product-main'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg" alt='product-pic' />
            <p>Groceries</p>
            <h2>Assorted coffee</h2>
            {/* </div> */}
            <div className='rating'>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>

        <div className='product-item2'>
          <div className='product-main'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg" alt='product-pic' />
            <p>Groceries</p>
            <h2>Assorted coffee</h2>
          </div>
          <div className='rating'>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
        <div className='product-item3'>
          <div className='product-main'>
            <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg' alt="im" />
            <p>Groceries</p>
            <h2>Assorted coffee</h2>
          </div>
          <div className='rating'>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>

        <div className='product-item4'>
          <div className='product-main'>
            <span className='sale'>Sale!</span>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg" alt="im" />
            <p>Groceries</p>
            <h2>Assorted coffee</h2>
          </div>
          <div className='rating'>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>

      </div>
      <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png' alt="im" className='mid-img' align="center" />

      <div className="other-products">
        
        <FeatureProduct/>
        
        </div>



    </div>
  )
}

export default Home
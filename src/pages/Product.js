import React from 'react';
import { Button } from 'antd';
import Header from '../components/Header';
import "./Product.css";
import { useLocation } from 'react-router';


const Product = () => {
  
  let {state: book} = useLocation(); // tracks which product to display

  return (
    <>
      <div className="container">
        <Header />
        <div className="product-content">
          <div>
            <div className="product-img">
              <img src={book.image} alt="product" width="100%"></img>
            </div>
            <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;

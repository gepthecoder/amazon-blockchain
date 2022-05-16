import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel } from 'antd';

import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";

const carousel = [ Carousel1, Carousel2, Carousel3 ];

const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay>
      {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
      })}
    </Carousel>
  </div>
  </>
)
}

export default Home;

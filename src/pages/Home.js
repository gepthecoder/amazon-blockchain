import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';

import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";

import Comics from "../images/comics.png";
import ArtemisFowl from "../images/ArtemisFowl.png";
import MobyDick from "../images/MobyDick.png";
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";

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
    <div className="cards">
      <Card className="card">
        <h1>Browse Comics</h1>
        <img src={Comics} alt="Comics Category" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Comics"} className="link">
          Shop Now
        </Link>
      </Card>
    </div>
  </div>
  </>
)
}

export default Home;

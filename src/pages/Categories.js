import React from 'react';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { Layout } from 'antd';
import { useState } from 'react';
import Rating from '../components/Rating';
import PriceRanges from '../components/PriceRanges';

const { Sider, Content } = Layout;

const Categories = () => {

const {state: category} = useLocation();
const [rating, setRating] = useState(1);

const [priceMin, setPriceMin] = useState(0);
const [priceMax, setPriceMax] = useState(100);

return(
  <>
    <div className="container">
      <Header />
      <div className="results-header">
          <span>Showing Products For </span>
          <span className="category">"{category}"</span>
      </div>
      <Layout>
        <Sider width="340px" theme="light" style={{ padding: "25px" }}>
          <Rating rating={rating} setRating={setRating}/>
          <PriceRanges 
            priceMin={priceMin}
            setPriceMin={setPriceMin}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
          />
          <Button className="login">Apply Filters</Button>
        </Sider>
        <Content
          theme="light"
          style={{ padding: "35px", backgroundColor: "brown"}}
        >
        </Content>
      </Layout>
    </div>
  </>
)
}

export default Categories;

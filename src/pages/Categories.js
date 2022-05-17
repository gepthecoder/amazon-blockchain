import React from 'react';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { Layout } from 'antd';
import { useState } from 'react';
import Rating from '../components/Rating';

const { Sider, Content } = Layout;

const Categories = () => {

const {state: category} = useLocation();
const [rating, setRating] = useState(1);

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
        </Sider>
        <Content
          theme="light"
          style={{ padding: "35px", backgroundColor: "brown"}}
        >
        </Content>
      </Layout>

      <Button 
        type="primary"
        onClick={() => console.log(category)}
      >
        Categories Page
      </Button>
    </div>
  </>
)
}

export default Categories;

import React from 'react';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Categories = () => {

const {state: category} = useLocation()

return(
  <>
    <div className="container">
      <Header />
      <div className="results-header">
          <span>Showing Products For </span>
          <span className="category">"{category}"</span>
      </div>
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

import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'
import Amazon from "../images/logo.png";
import USA from "../images/usa.png";
import BookStore from "../images/bookstore.png";
import {ShoppingCartOutlined} from "@ant-design/icons";

const { Search } = Input;

const Header = () => {
  const { authenticate } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img src={Amazon} className="logo"></img>
            <img src={BookStore} className="logo"></img>
            <Search
              placeholder='Find A Product'
              enterButton
              className='searchBar'
            />
            <Button
              className="login"
              key="1" 
              type="primary" 
              onClick={() => authenticate()}
            >
              Login
            </Button>
            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>

            </Space>
          </>
          
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;
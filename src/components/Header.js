import { PageHeader, Button } from 'antd';
import { useMoralis } from "react-moralis";
import './Header.css'
import Amazon from "../images/logo.png";
import USA from "../images/usa.png";
import BookStore from "../images/bookstore.png";

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
            <Button
              className="login"
              key="1" 
              type="primary" 
              onClick={() => authenticate()}
            >
              Login
            </Button>
          </>
          
        ]}>
      </PageHeader>
    </div>
  )
}

export default Header;
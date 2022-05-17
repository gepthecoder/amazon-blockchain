import {Select, Button} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons";

const {Option} = Select;


function Purchase({book}) {
  return (
    <>
        <span className="price"> ${book.price}</span>
        <p>No Import Fees & Free Shipping Included</p>
        <h1 style={{ color: "green" }}> In Stock </h1>
        <h3>Quantity</h3>
        <Select defaultValue={1} style={{ width: "100%" }}>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
            <Option value={4}>4</Option>
            <Option value={5}>5</Option>
        </Select>
        <Button
            className="login"
            style={{ width: "100%", marginTop: "50px" }}
            onClick={()=>console.log('🎈')}
        >
            <ShoppingCartOutlined /> Buy Now
        </Button>
  </>
  )
}

export default Purchase
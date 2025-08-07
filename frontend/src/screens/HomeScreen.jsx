import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            {/* <Product product={product} /> */}
            {/* <div className="product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div> */}
            </Col>
        ))}
    </Row>
      
    </>
  )
}

export default HomeScreen

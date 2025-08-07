import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../products';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = () => {
    const { id : productId} = useParams();
    console.log(productId);
    const product = products.find((p) => p._id === productId);
    console.log(product);
  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} className='img-fluid' />
        </Col>
        <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroupItem>
                <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
                <p>Price: ${product.price}</p>
            </ListGroupItem>
            <ListGroupItem>
                <p>Description: {product.description}</p>
            </ListGroupItem>
            
        </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem className='text-center'>
                    <Button className='btn btn-block' type='button' disabled={product.countInStock === 0}>
                        Add to Cart
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen

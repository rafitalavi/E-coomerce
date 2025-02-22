import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Product.css'; // Ensure you create a CSS file for animations
import Rating from './Rating';
import {Link, link} from 'react-router-dom'
function Product({ product }) {
  return (
    <Card className='product-card my-3 p-3 rounded shadow-lg'>
      <Link to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="product-image" />
      </Link>

      <Card.Body className="text-center">
        <Link to={`/products/${product._id}`} className="text-decoration-none">
          <Card.Title as='div' className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
           {/* {product.rating} from {product.numReviews} reviews */}
           <Rating value={product.rating} text ={`${product.numReviews} reveiws`} color={'#f8e825'}/>
        </Card.Text>

        {product.offerPrice ? (
          <Card.Text as="h3" className="price">
            <span className="original-price">${product.price}</span>
            <span className="offer-price">${product.offerPrice}</span>
          </Card.Text>
        ) : (
          <Card.Text as="h3" className="price">${product.price}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;

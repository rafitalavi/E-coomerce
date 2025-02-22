import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Product.css'; // Ensure you create a CSS file for animations

function Product({ product }) {
  return (
    <Card className='product-card my-3 p-3 rounded shadow-lg'>
      <a href={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="product-image" />
      </a>

      <Card.Body className="text-center">
        <a href={`/products/${product._id}`} className="text-decoration-none">
          <Card.Title as='div' className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div' className="rating">
          ⭐ {product.rating} from {product.numReviews} reviews
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

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Badge } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
 // Import your CSS file
import'../styles/ProductScreen.css'
function ProductScreen() {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);

    if (!product) {
        return <h2 className="text-danger text-center mt-5">Product Not Found</h2>;
    }

    return (
        <div className="product-screen-container"> {/* Main container */}
            <Link to="/" className="btn btn-outline-secondary my-3 go-back-btn">
                ← Go Back
            </Link>
            <Row className="shadow-lg p-4 bg-white rounded product-details-row">
                {/* Left: Product Image */}
                <Col md={6} className="product-image-col">
                    <Image src={product.image} alt={product.name} fluid className="product-image" />
                </Col>

                {/* Middle: Product Details */}
                <Col md={3} className="product-info-col">
                    <ListGroup variant="flush" className="product-info-list">
                        <ListGroup.Item className="product-title">
                            <h3 className="fw-bold">{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="product-rating">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item className="product-description text-muted">{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* Right: Price & Purchase Section */}
                <Col md={3} className="product-purchase-col">
                    <Card className="p-3 product-purchase-card">
                        <ListGroup variant="flush">
                            {/* Offer Price / Original Price */}
                            <ListGroup.Item className="product-price">
                                {product.offerPrice ? (
                                    <>
                                        <h4 className="text-success">
                                            Offer Price: ${product.offerPrice}
                                            <Badge bg="warning" className="ms-2 limited-deal-badge">Limited Deal</Badge>
                                        </h4>
                                        <span className="text-muted text-decoration-line-through original-price">
                                            Original: ${product.price}
                                        </span>
                                    </>
                                ) : (
                                    <h4>${product.price}</h4>
                                )}
                            </ListGroup.Item>

                            {/* Stock Status */}
                            <ListGroup.Item className="product-stock">
      <Row>
        <Col>Status:{product.countInStock}</Col>
        <Col>
          {product.countInStock > 0 ? (
            <Badge 
              className={product.countInStock < 2 ? 'blink-warning' : ''} 
              bg={product.countInStock < 2 ? 'Danger' : 'success'}
            >
              {product.countInStock < 2 ? `Only ${product.countInStock} Left!` : 'In Stock'}
            </Badge>
          ) : (
            <Badge bg="danger">Out of Stock</Badge>
          )}
        </Col>
      </Row>
    </ListGroup.Item>

                            {/* Add to Cart Button */}
                            <ListGroup.Item className="product-add-to-cart">
                                <Button
                                    className="btn-block btn-lg add-to-cart-button"
                                    type="button"
                                    disabled={product.countInStock === 0}
                                >
                                    {product.countInStock > 0 ? "🛒 Add to Cart" : "Out of Stock"}
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen;
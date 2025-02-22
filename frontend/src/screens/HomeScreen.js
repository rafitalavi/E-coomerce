import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import '../styles/HomeScreen.css'

function HomeScreen() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Moving Welcome Message */}
      <div className="marquee-container">
        <p className="marquee-text ">🚀 Welcome to Our Website! Enjoy Shopping! 🛒</p>
      </div>

      {/* Fixed Digital Clock on the Right */}
      <div className="fixed-watch">
        {time.toLocaleTimeString()}
      </div>

      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;

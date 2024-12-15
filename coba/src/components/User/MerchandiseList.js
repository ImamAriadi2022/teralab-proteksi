import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const MerchandiseList = ({ cartItems, setCartItems }) => {
  const [merchandise, setMerchandise] = useState([]);

  // Fetch merchandise dari backend
  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/merchandise');
        const data = await response.json();
        setMerchandise(data);
      } catch (error) {
        console.error('Gagal mengambil data merchandise:', error);
      }
    };

    fetchMerchandise();
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Jika merchandise sudah ada di keranjang, tambahkan quantity-nya
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // Jika merchandise belum ada di keranjang
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Daftar Merchandise</h1>
      <Row>
        {merchandise.length === 0 ? (
          <p className="text-center">Tidak ada merchandise yang tersedia.</p>
        ) : (
          merchandise.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Rp {item.price.toLocaleString()}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(item)}>
                    Tambahkan ke Keranjang
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MerchandiseList;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const Merchandise = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Fetch all products (replace with actual API call)
    const allProducts = [
      { id: 1, name: 'T-Shirt', stock: 10, price: 10000, description: 'Deskripsi singkat produk 1', thumbnail: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Gantungan Kunci', stock: 5, price: 5000, description: 'Deskripsi singkat produk 2', thumbnail: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Stiker', stock: 20, price: 3000, description: 'Deskripsi singkat produk 3', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setProducts(allProducts);
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({
      ...quantities,
      [productId]: quantity,
    });
  };

  const handleBuy = (product) => {
    const quantity = quantities[product.id] || 1;
    const message = `Halo, saya ingin membeli ${product.name} sebanyak ${quantity}. Apakah stok masih tersedia?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <UserNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Merchandise</h2>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Stok: {product.stock}</Card.Text>
                  <Card.Text>Harga: Rp{product.price}</Card.Text>
                  <Form.Group controlId={`quantity-${product.id}`}>
                    <Form.Label>Jumlah</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="success" className="mt-3" onClick={() => handleBuy(product)}>
                    Beli via WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Merchandise;
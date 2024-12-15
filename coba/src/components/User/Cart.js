import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';

const Cart = ({ cartItems, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');

  // Menghitung total harga berdasarkan item di keranjang
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setError('Keranjang Anda kosong.');
      return;
    }

    // Proses checkout
    alert('Checkout berhasil! Terima kasih telah berbelanja.');
    setCartItems([]); // Kosongkan keranjang setelah checkout
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Keranjang Belanja</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      {cartItems.length === 0 ? (
        <p className="text-center">Keranjang Anda kosong. Tambahkan produk ke keranjang.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Item</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>Rp {item.price.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>Rp {(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3>Total Harga: Rp {totalPrice.toLocaleString()}</h3>
            <Button variant="success" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';

const AdminMerchandise = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    // Fetch products (replace with actual API call)
    const fetchedProducts = [
      { id: 1, name: 'Produk 1', stock: 10, price: 50000, description: 'Deskripsi singkat produk 1', thumbnail: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Produk 2', stock: 5, price: 75000, description: 'Deskripsi singkat produk 2', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleShowModal = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct({});
  };

  const handleSaveProduct = () => {
    // Save product (replace with actual API call)
    setShowModal(false);
  };

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Kelola Merchandise</h2>
            <Button variant="primary" onClick={() => handleShowModal({})}>
              Tambah Produk
            </Button>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Stok</th>
                  <th>Harga</th>
                  <th>Deskripsi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>Rp{product.price}</td>
                    <td>{product.description}</td>
                    <td>
                      <Button variant="warning" onClick={() => handleShowModal(product)}>
                        Edit
                      </Button>
                      <Button variant="danger" className="ms-2">
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentProduct.id ? 'Edit Produk' : 'Tambah Produk'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.name || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formStock" className="mt-3">
              <Form.Label>Stok</Form.Label>
              <Form.Control
                type="number"
                value={currentProduct.stock || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, stock: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mt-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                value={currentProduct.price || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentProduct.description || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formThumbnail" className="mt-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.thumbnail || ''}
                onChange={(e) => setCurrentProduct({ ...currentProduct, thumbnail: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSaveProduct}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminMerchandise;
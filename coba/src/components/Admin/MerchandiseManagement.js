import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const MerchandiseManagement = () => {
  const [merchandise, setMerchandise] = useState([]);
  const [newMerch, setNewMerch] = useState({ name: '', price: '', stock: '' });

  useEffect(() => {
    axios.get('/admin/merchandise')
      .then(res => setMerchandise(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/admin/merchandise/${id}`)
      .then(() => setMerchandise(merchandise.filter(item => item.id !== id)))
      .catch(err => console.error(err));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post('/admin/merchandise', newMerch)
      .then(res => setMerchandise([...merchandise, res.data]))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setNewMerch({ ...newMerch, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h1>Manage Merchandise</h1>
      <form onSubmit={handleAdd} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
          required
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Add Merchandise</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {merchandise.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchandiseManagement;

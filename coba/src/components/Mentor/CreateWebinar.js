import React, { useState } from 'react';
import axios from '../../utils/api';

const CreateWebinar = () => {
  const [webinar, setWebinar] = useState({
    title: '',
    description: '',
    date: '',
    link_zoom: '',
  });

  const handleChange = (e) => {
    setWebinar({ ...webinar, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/mentor/webinars', webinar)
      .then(() => alert('Webinar created successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h1>Create Webinar</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="description" onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" name="date" onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateWebinar;

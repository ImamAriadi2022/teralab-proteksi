import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';

const WebinarDetail = () => {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);

  useEffect(() => {
    axios.get(`/webinars/${id}`)
      .then(res => setWebinar(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleRegister = () => {
    axios.post(`/webinars/${id}/register`)
      .then(() => alert('You have successfully registered for this webinar!'))
      .catch(err => console.error(err));
  };

  if (!webinar) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{webinar.title}</h1>
      <p>{webinar.description}</p>
      <p><b>Date:</b> {webinar.date}</p>
      <button onClick={handleRegister} className="btn btn-success">Register</button>
    </div>
  );
};

export default WebinarDetail;

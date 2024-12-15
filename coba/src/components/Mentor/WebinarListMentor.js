import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const WebinarListMentor = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    axios.get('/mentor/webinars')
      .then(res => setWebinars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>My Webinars</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Zoom Link</th>
          </tr>
        </thead>
        <tbody>
          {webinars.map(webinar => (
            <tr key={webinar.id}>
              <td>{webinar.id}</td>
              <td>{webinar.title}</td>
              <td>{webinar.date}</td>
              <td><a href={webinar.link_zoom} target="_blank" rel="noopener noreferrer">Zoom Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebinarListMentor;

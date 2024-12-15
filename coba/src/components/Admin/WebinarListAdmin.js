import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const WebinarListAdmin = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    axios.get('/admin/webinars')
      .then(res => setWebinars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>All Webinars</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Mentor</th>
          </tr>
        </thead>
        <tbody>
          {webinars.map(webinar => (
            <tr key={webinar.id}>
              <td>{webinar.id}</td>
              <td>{webinar.title}</td>
              <td>{webinar.date}</td>
              <td>{webinar.mentor_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebinarListAdmin;

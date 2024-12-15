import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const WebinarList = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    axios.get('/webinars')
      .then(res => setWebinars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Available Webinars</h1>
      <div className="row">
        {webinars.map(webinar => (
          <div className="col-md-4 mb-3" key={webinar.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{webinar.title}</h5>
                <p className="card-text">{webinar.description}</p>
                <Link to={`/webinars/${webinar.id}`} className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebinarList;

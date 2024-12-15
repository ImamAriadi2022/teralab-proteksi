import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/classes')
      .then(res => setClasses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Available Classes</h1>
      <div className="row">
        {classes.map(cls => (
          <div className="col-md-4 mb-3" key={cls.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cls.title}</h5>
                <p className="card-text">{cls.description}</p>
                <a href={cls.link} className="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;

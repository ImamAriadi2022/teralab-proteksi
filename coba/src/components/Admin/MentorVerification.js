import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const MentorVerification = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('/admin/mentors/unverified')
      .then(res => setMentors(res.data))
      .catch(err => console.error(err));
  }, []);

  const verifyMentor = (id) => {
    axios.post(`/admin/mentors/${id}/verify`)
      .then(() => {
        alert('Mentor verified!');
        setMentors(mentors.filter(mentor => mentor.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h1>Mentor Verification</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map(mentor => (
            <tr key={mentor.id}>
              <td>{mentor.id}</td>
              <td>{mentor.name}</td>
              <td>{mentor.email}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => verifyMentor(mentor.id)}
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorVerification;

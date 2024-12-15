import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WebinarApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/webinars">Webinars</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classes">Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/merchandise">Merchandise</Link>
            </li>
          </ul>
          <Link className="btn btn-outline-primary" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

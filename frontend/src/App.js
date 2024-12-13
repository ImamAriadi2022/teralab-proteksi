import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppPage from './page/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login'
import About from './page/About'


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AppPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
};

export default App;

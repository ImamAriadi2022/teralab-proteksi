import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/UserList';
import CreateWebinar from './components/Mentor/CreateWebinar';
import MentorDashboard from './components/Mentor/DashboardMentor';
import Navbar from './components/Navbar';
import ClassList from './components/User/ClassList';
import MerchandiseList from './components/User/MerchandiseList';
import WebinarDetail from './components/User/WebinarDetail';
import WebinarList from './components/User/WebinarList';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/webinars" element={<WebinarList />} />
        <Route path="/webinars/:id" element={<WebinarDetail />} />
        <Route path="/classes" element={<ClassList />} />
        <Route path="/merchandise" element={<MerchandiseList />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        <Route path="/mentor/create-webinar" element={<CreateWebinar />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

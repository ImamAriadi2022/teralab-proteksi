import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import UserDashboard from './page/UserDashboard';
import MyWebinars from './page/MyWebinars';
import AllWebinars from './page/AllWebinars';
import Merchandise from './page/Merchandise';
import Profile from './page/Profile';
import AdminDashboard from './page/AdminDashboard';
import AdminUsers from './page/AdminUsers';
import AdminMentors from './page/AdminMentors';
import AdminWebinars from './page/AdminWebinars';
import AdminClasses from './page/AdminClasses';
import AdminMerchandise from './page/AdminMerchandise';
import AdminVerifyMentors from './page/AdminVerifyMentors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-webinars" element={<MyWebinars />} />
        <Route path="/all-webinars" element={<AllWebinars />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-mentors" element={<AdminMentors />} />
        <Route path="/admin-webinars" element={<AdminWebinars />} />
        <Route path="/admin-classes" element={<AdminClasses />} />
        <Route path="/admin-merchandise" element={<AdminMerchandise />} />
        <Route path="/admin-verify-mentors" element={<AdminVerifyMentors />} />
      </Routes>
    </Router>
  );
}

export default App;
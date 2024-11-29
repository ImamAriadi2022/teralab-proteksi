import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CategorySection from './components/CategorySection';
import Mentor from './components/Mentor';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import FloatingActionButton from "./components/FloatingActionButton";


const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <CategorySection />
      <Mentor />
      <Testimonial />
      <Footer />
      <FloatingActionButton />
    </>
  );
};

export default App;

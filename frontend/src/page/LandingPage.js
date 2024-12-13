import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import CategorySection from '../components/CategorySection';
import Mentor from '../components/Mentor';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import FloatingActionButton from "../components/FloatingActionButton";
import OurPartner from "../components/OurPartner";
import Support from '../components/Support';


const AppPage = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <CategorySection />
      <Mentor />
      <Testimonial />
      <OurPartner />
      <Support />
      <Footer />
      <FloatingActionButton />
    </>
  );
};

export default AppPage;

import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;

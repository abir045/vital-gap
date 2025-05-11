import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <Testimonials />
    </div>
  );
};

export default Home;

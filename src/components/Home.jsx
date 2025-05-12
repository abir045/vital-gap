import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Crm from "./Crm";
import Inventory from "./Inventory";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <Crm />
      <Inventory />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;

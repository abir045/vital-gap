import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Crm from "./Crm";
import Inventory from "./Inventory";
import About from "./About";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <Crm />
      <Inventory />
      <About />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;

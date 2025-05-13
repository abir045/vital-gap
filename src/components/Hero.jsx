import React from "react";
import hero from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-overlay ">
          <img src={hero} className="w-full h-[600px]  object-cover" alt="" />
        </div>
        <div className="hero-content  text-gray-500 text-center mt-80 bg-transparent bg-opacity-20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm py-4">
          <div className="">
            <h1 className="mb-5 md:text-5xl text-4xl font-bold text-white">
              Power Your Business With Confidence and Ease, Without Breaking The
              Bank!
            </h1>
            <p className="mb-5 text-white">
              With Our Distribution Management System - The New Age ERP. Built
              for Wholesalers and Distributors.
            </p>
            <button className="btn bg-blue-500 text-white border-none">
              Book a Demo
            </button>
            <button className="btn bg-white  ml-3">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

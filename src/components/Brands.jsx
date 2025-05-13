import React from "react";
import advance from "../assets/advance.png";
import polani from "../assets/polani.png";
import green from "../assets/greenbird.png";
import Marquee from "react-fast-marquee";

const brands = [advance, polani, green];

const Brands = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-center text-5xl">Our Clients</h1>

      <div className="relative">
        <Marquee speed={80} pauseOnHover={true} gradient={false}>
          {brands.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt="brand-logo"
                className="opacity-50 hover:opacity-100 transition-opacity duration-300 w-[30%]"
              />
            </div>
          ))}
        </Marquee>
        {/* Left blur */}
        <div
          className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"
          style={{ filter: "blur(10px)" }}
        />
        {/* Right blur */}
        <div
          className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"
          style={{ filter: "blur(10px)" }}
        />
      </div>
    </div>
  );
};

export default Brands;

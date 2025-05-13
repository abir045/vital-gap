import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import mission from "../assets/mission.svg";
import story from "../assets/story.svg";

const About = () => {
  return (
    <div className="pb-30 mt-20 container mx-auto">
      <div className="lg:flex gap-10 items-start">
        {/* 1st */}
        <div className="relative">
          <img src={p2} className="rounded-2xl" alt="" />

          {/* <div className="absolute -bottom-[15%] -right-[30%]">
            <img src={p1} className="w-[50%]" alt="" />
          </div> */}
        </div>
        {/* 2nd */}
        <div className="flex flex-col mt-10 px-5 lg:px-0 lg:mt-0">
          <p className="text-blue-400 font-semibold uppercase">
            About VitalGap
          </p>
          <h3 className="text-[42px] font-semibold">
            We Are Fully Dedicated To Support
          </h3>

          <p className="text-[#777777] mt-5">
            here's this notion that to grow a business, you have to be rutless
            But we know there's a better way to grow
          </p>

          <div className="flex items-center mt-5">
            <img src={mission} className="w-[50px] " alt="" />
            <h4 className="font-medium text-2xl text-[#0d1820]">Our Mission</h4>
          </div>

          <p className="text-[#777777] mt-5">
            Ryun ipsum dolor sit ametconsecteturing elit sed do eiusmod tempor
            incididunt laboret dolore magna aliqua minaquaerat.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <img src={story} className="w-[50px] " alt="" />
            <h4 className="font-medium text-2xl text-[#0d1820]">Our Story</h4>
          </div>

          <p className="text-[#777777] mt-5">
            Ryun ipsum dolor sit ametconsecteturing elit sed do eiusmod tempor
            incididunt laboret dolore magna aliqua minaquaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#070D41] shadow-md w-full p-6 sm:p-9">
        <div className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
          <div className="w-full sm:w-[25%] ">
            <img src={logo} alt="logo" className="w-[150px] mb-[20px]" />
            <div className="flex flex-col gap-[20px] text-[#3B9DF8]">
              <span>
                <a className="text-[0.9rem] text-white flex items-center gap-[8px] cursor-pointer">
                  <IoLocationOutline className="text-[1.2rem]" />
                  25 Watline Ave, Mississauga, ON L4Z 2Z1, Canada
                </a>
              </span>
              <span>
                <a className="text-[0.9rem] text-white flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                  <MdOutlineEmail className="text-[1.1rem]" />
                  info@vitalgap.com
                </a>
              </span>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem]  font-semibold text-white mb-2">
              Services
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                ELectrical
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                HVAC
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Steel Metal
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Hardware and Building Supplies
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[1.2rem] font-semibold text-white mb-2">
              Company
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                About Us
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Blog
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Terms and Conditions
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Privacy Policy
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Pricing
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Contact
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-white mb-2">
              Our Social Media
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Dribble
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Behance
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Medium
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Instagram
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Facebook
              </p>
              <p className="text-[0.9rem] text-white hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Twitter
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

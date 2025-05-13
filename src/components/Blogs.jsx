import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="bg-gray-100 pb-10">
      <div className="container mx-auto my-20">
        <h1 className="text-5xl pt-10 text-center text-[#070D41]">Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
          {/* 1st */}
          <div className="w-full  shadow-lg bg-white rounded">
            <div className="flex w-full justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center text-white text-[1.3rem] rounded-full bg-[#070D41]">
                  V
                </div>

                <div className="">
                  <h2 className="font-[500] text-[1.2rem] uppercase">
                    vitalgap
                  </h2>
                  <p className="text-[#424242] text-[0.9rem]">April 17, 2025</p>
                </div>
              </div>
              <BsThreeDotsVertical className="text-[#424242] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
            </div>

            <img src={b1} alt="" className="w-full h-[250px] object-cover" />

            <p className="text-[#424242] p-4">
              Transition from Quickbooks Desktop to VitalGap Distribution
              Management System
            </p>

            <div className="flex items-center justify-between w-full p-4 ">
              <div className="flex items-center gap-4 ">
                <FaHeart
                  className={`${
                    isFavorite ? "text-[#ff3d3d]" : "text-[#424242]"
                  } text-[1.4rem] cursor-pointer`}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
                <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer" />
              </div>

              <button className="btn bg-blue-400 text-white">
                {" "}
                Learn More
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div className="w-full  shadow-lg bg-white rounded">
            <div className="flex w-full justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center text-white text-[1.3rem] rounded-full bg-[#070D41]">
                  V
                </div>

                <div className="">
                  <h2 className="font-[500] text-[1.2rem] uppercase">
                    vitalgap
                  </h2>
                  <p className="text-[#424242] text-[0.9rem]">April 16, 2025</p>
                </div>
              </div>
              <BsThreeDotsVertical className="text-[#424242] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
            </div>

            <img src={b2} alt="" className="w-full h-[250px] object-cover" />

            <p className="text-[#424242] p-4">
              How AI is Transforming Distribution and Wholesale Operations
            </p>

            <div className="flex items-center justify-between w-full p-4 ">
              <div className="flex items-center gap-4 ">
                <FaHeart
                  className={`${
                    isFavorite ? "text-[#ff3d3d]" : "text-[#424242]"
                  } text-[1.4rem] cursor-pointer`}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
                <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer" />
              </div>

              <button className="btn bg-blue-400 text-white">
                {" "}
                Learn More
              </button>
            </div>
          </div>

          {/* 3rd */}
          <div className="w-full  shadow-lg bg-white rounded">
            <div className="flex w-full justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] flex items-center justify-center text-white text-[1.3rem] rounded-full bg-[#070D41]">
                  V
                </div>

                <div className="">
                  <h2 className="font-[500] text-[1.2rem] uppercase">
                    {" "}
                    vitalgap{" "}
                  </h2>
                  <p className="text-[#424242] text-[0.9rem]">April 6, 2025</p>
                </div>
              </div>
              <BsThreeDotsVertical className="text-[#424242] rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
            </div>

            <img src={b3} alt="" className="w-full h-[250px] object-cover" />

            <p className="text-[#424242] p-4">API-First ERP Solutions</p>

            <div className="flex items-center justify-between w-full p-4 ">
              <div className="flex items-center gap-4 ">
                <FaHeart
                  className={`${
                    isFavorite ? "text-[#ff3d3d]" : "text-[#424242]"
                  } text-[1.4rem] cursor-pointer`}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
                <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer" />
              </div>

              <button className="btn bg-blue-400 text-white">
                {" "}
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

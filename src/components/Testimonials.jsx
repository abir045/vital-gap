import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { MdArrowRightAlt } from "react-icons/md";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaHeart,
} from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { MdPlayArrow } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import t1 from "../assets/test1.png";
import green from "../assets/greenbird.png";
import titan from "../assets/t1.jpg";
import test2 from "../assets/test2.png";

const Testimonials = () => {
  return (
    <div className="bg-[#070D41]  py-10">
      <h3 className="text-white text-5xl text-center mt-10">
        WATCH WHAT OUR CLIENTS HAVE TO SAY
      </h3>
      <div className="container mx-auto pt-25">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          <SwiperSlide>
            <div className="flex items-start w-full bg-gray-300 rounded-2xl">
              <div>
                <div className="w-full md:min-w-[60%] md:max-w-[90%] relative  boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
                  <div className="w-full ">
                    <img
                      src={green}
                      alt="image"
                      className="w-full  object-cover  "
                    />
                  </div>

                  <div className="w-full mt-5 ml-5 sm:mt-0">
                    <div className="flex sm:items-center justify-between w-full">
                      <div className="flex  flex-col  sm:gap-[5px]">
                        <h1 className="text-[1.2rem] font-bold">
                          GreenBird Electric Supply
                        </h1>
                        <span className="text-gray-400">
                          {" "}
                          Ahmed Baig, Vice President
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mt-5 text-2xl">
                      "Highly recommend especially if you are in the
                      distribution space"
                    </p>

                    <div className="flex items-center gap-[20px] mt-3">
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegHeart />
                        22
                      </div>
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegBookmark />
                        234
                      </div>
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <BiComment />
                        185
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5">
                <img src={t1} className=" w-[500px] rounded-2xl" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-start w-full bg-gray-300 rounded-2xl">
              <div>
                <div className="w-full md:min-w-[60%] md:max-w-[90%] relative  boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
                  <div className="w-full ">
                    <img
                      src={titan}
                      alt="image"
                      className="w-full  object-cover rounded-full"
                    />
                  </div>

                  <div className="w-full mt-5 ml-5 sm:mt-0">
                    <div className="flex sm:items-center justify-between w-full">
                      <div className="flex  flex-col  sm:gap-[5px]">
                        <h1 className="text-[1.2rem] font-bold">
                          Titan Electric Supply
                        </h1>
                        <span className="text-gray-400">
                          {" "}
                          CEO, Titan ELectric Supply
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mt-5 text-2xl">
                      "Easy to use and employees getting used to it quickly"
                    </p>

                    <div className="flex items-center gap-[20px] mt-3">
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegHeart />
                        22
                      </div>
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegBookmark />
                        234
                      </div>
                      <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <BiComment />
                        185
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 ">
                <img src={test2} className=" w-[500px] rounded-2xl" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

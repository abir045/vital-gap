import React, { useEffect, useState } from "react";
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

import d1 from "../assets/demo1.png";
import d2 from "../assets/demo2.png";
import d3 from "../assets/demo3.png";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";

const Slider = () => {
  const cards = [];

  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 1024 ? 1 : 2
  );

  // Update slides per view when window is resized
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 1024 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="pt-10 container mx-auto pb-10 w-full ">
        <h1 className="text-center text-[#172760] md:text-5xl text-4xl  font-bold">
          THE NEW AGE ERP WITH A CUSTOMER FIRST APPROACH
        </h1>
        <p className="text-xl mt-10 text-center">
          We know this business is built on customer relationships and service.
          Our distribution management system helps you improve the speed of
          processing orders, increase your sales and reduce your operating
          costs!
        </p>

        <div className="mt-20">
          <Swiper
            // key={`swiper-instance-${slidesPerView}`}
            spaceBetween={30}
            // slidesPerView="auto"
            slidesPerView={slidesPerView}
            // Default for mobile screens

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
              <div className="card lg:h-[400px]   lg:card-side bg-gray-100 shadow-lg">
                {/* <figure>
                  <img src={d1} alt="Album" className="w-full h-full" />
                </figure> */}
                <img
                  src={d1}
                  className="lg:w-[300px]  w-full  object-cover rounded-l-2xl"
                  alt=""
                />

                <div className="card-body w-full">
                  <h2 className="card-title text-3xl font-bold">
                    Tailored to your business
                  </h2>
                  <p className="text-xl ">
                    Our system is built for distributors and comes with open
                    flexibility to help you tailor the systems further to your
                    needs and customers.
                  </p>
                  <div className="card-actions justify-end mt-15">
                    <button className="btn bg-blue-400 text-white flex items-center">
                      <span>Book a demo</span> <MdArrowRightAlt size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card lg:h-[400px] lg:card-side  shadow-sm w-full bg-gray-100">
                {/* <figure> */}
                <img
                  src={d2}
                  alt="Album"
                  className="lg:w-[300px]  w-full  object-cover rounded-l-2xl"
                />
                {/* </figure> */}
                <div className="card-body">
                  <h2 className="card-title text-3xl font-bold">
                    Simple yet powerful
                  </h2>
                  <p className="text-xl">
                    We have made it simple to use with powerful functionalities
                    & automation to run your business without spending months on
                    training
                  </p>
                  <div className="card-actions justify-end mt-15 ">
                    <button className="btn bg-blue-400 text-white flex items-center">
                      <span>Book a demo</span> <MdArrowRightAlt size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card lg:h-[400px]  lg:card-side bg-gray-100 shadow-lg">
                {/* <figure>
              <img src={d1} alt="Album" className="w-full h-full" />
            </figure> */}
                <img
                  src={d3}
                  className="lg:w-[300px]   w-full  object-cover rounded-l-2xl"
                  alt=""
                />

                <div className="card-body w-full">
                  <h2 className="card-title text-3xl font-bold">
                    Cloud Based System
                  </h2>
                  <p className="text-xl">
                    Cloud based systems for easier access, increased security
                    and faster implementation.
                  </p>
                  <div className="card-actions justify-end mt-20 lg:mt-28 md:mt-15">
                    <button className="btn bg-blue-400 text-white flex items-center">
                      <span>Book a demo</span> <MdArrowRightAlt size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;

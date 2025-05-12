import React from "react";
import sales from "../assets/sales2.svg";
import { FcSalesPerformance } from "react-icons/fc";
import operation from "../assets/operation.svg";
import savings from "../assets/savings.svg";
import CountUp from "react-countup";
import customers from "../assets/customers.svg";

const Stats = () => {
  return (
    <div className="bg-blue-400 py-15">
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 lg:px-0">
          <div className="flex items-center gap-4">
            <img src={sales} className="w-[50px]" alt="" />
            {/* <FcSalesPerformance size={50} /> */}

            <div className="flex flex-col ">
              <span className="text-white">Increase Sales</span>
              <CountUp
                start={0}
                end={70}
                separator=" "
                duration={2.75}
                suffix="%"
                className="text-white font-semibold text-4xl"
              >
                <span className="">+70%</span>
              </CountUp>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={operation} className="w-[50px]" alt="" />

            <div className="flex flex-col">
              <span className="text-white">Reduction in operation time</span>
              <CountUp
                start={0}
                end={40}
                separator=" "
                duration={2.75}
                suffix="%"
                className="text-white font-semibold text-4xl"
              >
                <span className="">+40%</span>
              </CountUp>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={savings} alt="" className="w-[60px]" />

            <div className="flex flex-col ">
              <span className="text-white">In cost savings</span>
              <CountUp
                start={0}
                end={55}
                separator=" "
                duration={2.75}
                suffix="%"
                className="text-white font-semibold text-4xl"
              >
                <span className="">+55%</span>
              </CountUp>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={customers} className="w-[50px]" alt="" />

            <div className="flex flex-col">
              <span className="text-white">Satisfied customers</span>
              <CountUp
                start={0}
                end={100}
                separator=" "
                duration={2.75}
                suffix="%"
                className="text-white font-semibold text-4xl"
              >
                <span className="">+100%</span>
              </CountUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

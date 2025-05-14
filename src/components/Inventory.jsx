import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import inventory from "../assets/inventory.png";
import i1 from "../assets/cloud-asset-inventory.svg";
import i2 from "../assets/report.svg";
import i3 from "../assets/cloud-audit.svg";

const Inventory = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="w-full bg-[#fff] rounded-md relative">
        {/* header */}
        <header className="flex lg:flex-row flex-col items-start gap-12 lg:gap-0 justify-between px-8 mt-10">
          <div className="w-full lg:w-[45%]">
            {/* <p>Inventory & Warehouse Management</p> */}
            <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
              Inventory & Warehouse Management
            </h1>
            <p className="mt-2 text-[1rem]">
              We are here to help you in making efficient inventory management
            </p>

            <h1 className="text-[1.3rem] font-semibold mt-4">Our Service</h1>

            <div className="flex gap-2 mt-4">
              <img src={i1} alt="Vector" className="w-[50px]" />
              <div>
                <h4 className="text-[1.1rem] mt-3">Back order management</h4>
                <p className="text-[0.9rem] text-gray-500 mt-1">
                  Avoid negative inventory data with our backorder management
                  for inventories.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <img src={i2} alt="Vector" className="w-[50px]" />
              <div>
                <h4 className="text-[1.1rem] mt-3">Inventory reports</h4>
                <p className="text-[0.9rem] text-gray-500 mt-1">
                  Inventory reports with fastest moving products, low performing
                  products, low stock and more.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <img src={i3} alt="Vector" className="w-[50px]" />

              <div>
                <h4 className="text-[1.1rem] mt-3">Audit reports </h4>
                <p className="text-[0.9rem] text-gray-500 mt-1">
                  Inventory Audit reports to show discrepancies in physical
                  count.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] ">
            <img src={inventory} alt="image" className="rounded-2xl w-full" />
          </div>
        </header>

        <section className="px-8 pb-[30px] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 w-[70%]"></div>
        </section>

        {/* right blur shadow */}
        <div className="w-[100px] h-[100px] bg-blue-400 blur-[90px] absolute bottom-[80px] right-[80px]"></div>
      </div>
    </div>
  );
};

export default Inventory;

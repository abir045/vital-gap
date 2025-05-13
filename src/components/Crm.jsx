import React from "react";
import customer from "../assets/customer.jpeg";
import { BsArrowRight } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import sales from "../assets/sales.png";
import account from "../assets/accounting.png";

const Crm = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 pb-20">
        <h1 className="text-5xl text-center font-bold">
          Everything you need to run your distribution & wholesale business
        </h1>

        <p className="text-xl mt-4 text-center">
          Our systems comes packed with multiple features needed to help improve
          your business operations while putting the customer first
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {/* 1st */}
          <div className="w-full relative bg-white boxShadow rounded-xl">
            <img
              src={customer}
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5 mb-10">
              <h1 className="text-[1.3rem] font-bold leading-[24px]">
                Customer Management
              </h1>

              <p className="text-gray-600 mt-3 flex items-start gap-2">
                <TiTickOutline size={30} /> Manage all customer data with our
                native CRM management system.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Automate customer volume discounts, price locks, credit,
                payments and more.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Faster turnaround time for customer orders and fulfillment.
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="w-full  relative bg-white boxShadow rounded-xl">
            <img
              src={sales}
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5 mb-10">
              <h1 className="text-[1.3rem] font-bold leading-[24px]">
                Sales & Orders Tracking
              </h1>

              <p className="text-gray-600 mt-3 flex items-start gap-2">
                <TiTickOutline size={30} /> A simple and easy to use POS system
                for the front desk to manage orders quickly.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Sales reporting on customer orders, best performing products,
                top sales rep and more.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Manage backorders, partial ordering, online orders and credit
                orders using one system.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className=" w-full  relative bg-white boxShadow rounded-xl">
            <img
              src={account}
              alt="image"
              className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5 mb-10">
              <h1 className="text-[1.3rem] font-bold leading-[24px]">
                Integrations & Accounting
              </h1>

              <p className="text-gray-600 mt-3 flex items-start gap-2">
                <TiTickOutline size={30} />
                In Built integration with QuickBooks to avoid any downtime in
                operations and migration of data.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Invoices and receipts automated from the POS, connected directly
                to your accounting system.
              </p>

              <p className="text-gray-600 flex items-start gap-2">
                <TiTickOutline size={30} />
                Integrate other apps like shipping to provide customers with
                real time shipping data and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crm;

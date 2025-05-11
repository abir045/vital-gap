import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isProductHover, setIsProductHover] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest(".mobile-menu-container") &&
        !e.target.closest(".hamburger-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Handle submenu toggle in mobile view
  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? "" : menuName);
  };

  // Menu items data
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Solutions",
      children: [
        { name: "By Industries", isHeader: true },
        { name: "Electrical", link: "/electrical" },
        { name: "HVAC", link: "/hvac" },
        { name: "Steel & Metal", link: "/steel" },
        { name: "Hardware and Building Supplies", link: "/hardware" },
      ],
    },

    { name: "Pricing", link: "/pricing" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Customers", link: "/customers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="navbar bg-[#070D41] shadow-sm py-4 md:py-4 lg:py-4 px-4 md:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-none">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className="" />
            </a>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex space-x-8 text-white">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center py-2 hover:text-blue-400 transition-colors"
                        onMouseEnter={() =>
                          item.name === "Solutions" && setIsProductHover(true)
                        }
                        onMouseLeave={() =>
                          item.name === "Solutions" && setIsProductHover(false)
                        }
                      >
                        {item.name}
                        <IoIosArrowDown className="ml-1" />
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-[#070D41] rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="py-1">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              {child.isHeader ? (
                                <div className="block px-4 py-2 text-white font-bold border-b border-gray-700">
                                  {child.name}
                                </div>
                              ) : (
                                <a
                                  href={child.link}
                                  className="block px-4 py-2 text-white hover:text-blue-400"
                                >
                                  {child.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.link}
                      className="block py-2 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right buttons section */}
          <div className="flex items-center ml-auto lg:ml-0">
            {/* Hamburger Menu Button - Visible only on mobile */}
            <button
              className="hamburger-button lg:hidden btn btn-ghost btn-circle text-white ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <MdClose className="text-2xl" />
              ) : (
                <MdMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from right when active */}
      <div
        className={`mobile-menu-container fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#070D41] text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-15" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-ghost btn-circle"
            >
              <MdClose className="text-2xl" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-grow overflow-y-auto">
            <ul className="p-4">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full p-2 text-left hover:text-blue-400  text-white  rounded-md"
                      >
                        <span>{item.name}</span>
                        <IoIosArrowDown className="ml-1" />
                      </button>
                      {activeSubmenu === item.name && (
                        <ul className="pl-4 mt-1">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              {child.isHeader ? (
                                <div className="block px-4 py-2 text-white font-bold border-b border-gray-700">
                                  {child.name}
                                </div>
                              ) : (
                                <a
                                  href={child.link}
                                  className="block px-4 py-2 text-white hover:text-blue-400"
                                >
                                  {child.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block p-2 text-white hover:text-blue-400  rounded-md"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Footer */}
          {/* <div className="p-4 border-t">
            <a
              href="/get-started"
              className="btn bg-blue-600 hover:bg-blue-700 text-white w-full"
            >
              Get Started
            </a>
          </div> */}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-lg  bg-opacity-30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;

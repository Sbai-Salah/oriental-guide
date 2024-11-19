"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import Script from 'next/script';
import { LanguageSwitcher } from "./LangSwitcher";


function Header() {
  const [active, setActive] = useState(0);
  const [isCitiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();


  // Effect to set active menu item based on the current route
  useEffect(() => {
    if (pathname.startsWith("/city/")) {
      // If the path is for a city page, set the active item to "Villes Orientales"
      setActive(20);
    } else if (pathname === "/") {
      // If the path is the homepage, set the active item to "Page d'Accueil"
      setActive(0);
    } else {
      // Otherwise, find the matching menu item based on the pathname
      const menuIndex = menus.findIndex(
        (menu) => `/${menu.replace(/\s/g, "-").toLowerCase()}` === pathname
      );
      setActive(menuIndex);
    }
  }, [pathname]);


  const handleMenuClick = (index: React.SetStateAction<number>, path: string) => {
    setActive(index);
    router.push(path); // Use useRouter to navigate to the new path
  };


  const handleLanguageChange = (languageCode: string) => {
      console.log("you chossed : ", languageCode);
  };


  return (
    <div className="absolute w-full flex flex-col items-center bg-transparent text-xs font-medium uppercase opacity-90 px-5 md:px-10">
      <Head>
        <title>Next JS Slider</title>
      </Head>

      {/* Logo Section */}
      <div className="flex items-center gap-2 py-4 tracking-[4px] text-lg">
        <IoIosGlobe className="text-2xl" />
        MoroccoEast
      </div>

      {/* Menu and Icons Section */}
      <div className="flex w-full justify-between items-center">
        {/* Menu Items */}
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-10 text-[11px]">
        {menus.map((menu, index) => {
            // Determine the path based on the menu name
            let path;
            if (menu === "Page d'Accueil") {
              path = "/";
            } else if (menu === "Lieux Instagrammables") {
              path = "/instagramGallery"; // Custom path for "Lieux Instagrammables"
            } else {
              path = `/${menu.replace(/\s/g, "-").toLowerCase()}`;
            }

            return (
              <motion.li
                layout
                key={index}
                onClick={() => handleMenuClick(index, path)}
                className={`${
                  active === index && "border-b-2 border-yellow-500"
                } cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:border-white relative`}
                onMouseEnter={() =>
                  menu === "Villes Orientales" && setCitiesDropdownOpen(true)
                }
                onMouseLeave={() =>
                  menu === "Villes Orientales" && setCitiesDropdownOpen(false)
                }
              >
                <span className="hover:underline">
                 {menu}
                </span>
                {menu === "Villes Orientales" && isCitiesDropdownOpen && (
                  <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4 w-48" style={{zIndex: 1000}}>
                    {orientalCities.map((city, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 mb-2 hover:bg-gray-100 p-2 rounded-md"
                      >
                        <img
                          src={city.img}
                          alt={city.title}
                          className="w-10 h-10 object-cover rounded-md"
                        />
                        <span className="text-sm font-medium text-gray-800">
                          {city.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Social Media Icons and Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          <FaInstagram className="text-lg" />
          <FaFacebookF className="text-lg" />
          <FaTwitter className="text-lg" />
          <FaYoutube className="text-lg" />
          <FaPinterestP className="text-lg" />
          <IoMdSearch className="text-lg" />
        
           <>
             <LanguageSwitcher />
           </>
      
        </div>
      </div>

  
    </div>
  );
}

export default Header;

const menus = [
      "Page d'Accueil",
      "Villes Orientales",
      "Lieux Instagrammables",
      "Dictionnaire",
      "Expériences Culturelles",
      "Idées de Voyage",
    ];
    

const orientalCities = [
  {
    img: "/images/Ayoun.jpg",
    title: "Laayoune (Oriental)",
  },
  {
    img: "/images/Barkane.png",
    title: "Barkane",
  },
  {
    img: "/images/Nador.JPG",
    title: "Nador",
  },
  {
    img: "/images/Taourirte.jpg",
    title: "Taourirt",
  },
  {
    img: "/images/Tafoughalt.JPG",
    title: "Tafoughalt",
  },
];

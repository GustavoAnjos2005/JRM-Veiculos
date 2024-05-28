"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icones
import { FaMapMarkedAlt } from "react-icons/fa";

// data da localização
const locations = [
  "Parque Imperial 459, São Paulo",
  "Jaraguá 1678, São Paulo",
  "Osasco 123, São Paulo",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Selecionar localização");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* botão */}
        <Menu.Button
          className="dropdown-btn w-full h-full flex flex-col 
        justify-center items-center xl:items-start xl:pl-8"
        >
          <div
            className="w-full h-16 xl:h-full flex justify-center xl:justify-start 
          xl:border-r xl:border-black/10"
          >
            <div className="flex flex-col justify-center">
              <div
                className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-x-2 
              gap-y-2 xl:gap-y-0"
              >
                <FaMapMarkedAlt className="text-accent" />
                <div className="text-[15px] uppercase font-bold">
                  Selecionar Localização
                </div>
              </div>
              <div
                className="uppercase font-medium text-[13px] text-secondary 
              text-center xl:ml-6 xl:text-left"
              >
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* items */}
        <Menu.Items
          className="drodown-menu shadow-lg absolute -top-56 xl:top-[90px] 
        left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm
        text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]"
        >
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={index}
                className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] 
            uppercase"
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}

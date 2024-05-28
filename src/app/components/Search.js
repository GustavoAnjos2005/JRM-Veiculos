"use client";

// seacrh context
import { useContext } from "react";
import { SearchContext } from "../context/search";

// componentes
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        {/* botão */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "text-white btn btn-sm btn-accent xl:w-[164px]"
                : "text-white btn btn-lg btn-accent xl:w-[184px]"
            }`}
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
}

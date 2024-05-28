"use client";

import { useEffect, useState } from "react";

//icones
import { FaChevronUp } from "react-icons/fa";

//react scroll
import { Link } from "react-scroll";

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    //resetando o the event listeners
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  });
  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 
    right-16 bottom-11 z-10 cursor-pointer flex justify-center 
    items-center text-white border-2 border-white`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
}

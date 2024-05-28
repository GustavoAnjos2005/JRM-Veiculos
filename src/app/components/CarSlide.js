"use client";

// importando componente swiper react
import { Swiper, SwiperSlide } from "swiper/react";

// importando componente swiper styles
import "swiper/css";

// next image
import Image from "next/image";

//icone
import { FaStar } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variantes
import { fadeIn } from "/variants";

// data dos carros
const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 32500,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Banco",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Etanol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Liga leve",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25000,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Banco",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Etanol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1400 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Tiânio",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 50000,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "4 Banco",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Etanol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "3200 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Liga Leve",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Audi A3",
    price: 30000,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "4 Banco",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Etanol",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "2500 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Titânio",
      },
    ],
  },
];

export default function CarSlide() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show" 
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.name}> {/* Use um identificador único como chave */}
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <Image src={car.image} width={380} height={284} alt="cars" />
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-seondary uppercase">{car.type}</div>
                  <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  <h3 className="mb-10 text-accent font-semibold uppercase">R$ {car.price}</h3>
                </div>
                {/* Renderizar estrelas dinamicamente */}
                <div className="flex gap-x-2 text-accent h-max">
                  {[...Array(Math.round(car.stars))].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
              {/* Informação do carro */}
              <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                {car.info.map((item, index) => (
                  <div key={index}>
                    <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                      <Image src={item.icon} width={24} height={24} alt="icon" />
                    </div>
                    <div className="text-[12px] uppercase">{item.text}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-accent btn-lg">Veja os detalhes</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

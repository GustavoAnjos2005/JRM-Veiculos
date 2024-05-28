"use client";

//swiper react
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//importando modulos requisitados
import { Pagination } from "swiper/modules";

//icones
import { FaQuoteLeft } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";

//variantes
import { fadeIn } from "/variants";

//next Image
import Image from "next/image";

//data
const testimonialData = [
  {
    message:
      "Eles realmente superaram as minhas expectativas, uma experiência incrível!",
    avatar: "/images/testimonial/avatar.png",
    name: "Jéssica Ribeiro",
    job: "Advogada",
  },
  {
    message:
      "Sou cliente faz anos, eles tem um ótimo serviço, recomendo muito.",
    avatar: "/images/testimonial/avatar2.png",
    name: "Marcos Santos",
    job: "Pintor",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt=""
                  className="rounded-full mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

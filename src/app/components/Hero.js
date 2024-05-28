"use client";

import { useContext } from "react";

// componentes
import Search from "./Search";

// context
import { SearchContext } from "../context/search";

// next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variantes
import { fadeIn } from "/variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* texto e imagem wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* texto */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Encontre As Melhores <span className="text-accent">Ofertas</span>{" "}
              Do Brasil{" "}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Ache o seu carro ideal para qualquer aventura, com a nosssa ampla
              variedade de aluguel de carros acessíveis e confiáveis.
            </motion.p>
            {/* botão */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* botão google play */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={142}
                  height={40}
                  alt=""
                />
              </button>
              {/* botão appstore */}
              <button>
                <Image
                  src={"/icons/appstore-btn.svg"}
                  width={142}
                  height={40}
                  alt=""
                />
              </button>
            </motion.div>
          </div>
          {/* imagem */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] 
          xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] 
          xl:top-48 min-[1680px]:right-[120px]"
          >
            <Image
              src={"/images/hero/car.svg"}
              width={640}
              height={600}
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}

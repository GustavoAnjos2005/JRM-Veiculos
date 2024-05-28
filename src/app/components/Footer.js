"use client";

//next image
import Image from "next/image";

//icones
import { FaPhone, FaEnvelope, FaRobot } from "react-icons/fa6";

//componentes
import Copyright from "./Copyright";

//framer motion
import { motion } from "framer-motion";

//variantes
import { fadeIn } from "/variants";

// react scroll/ link
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* footer grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 items-center"
        >
          {/* logo e informações de contato */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-16">
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              <Image src={"/icons/logo (2).png"} width={150} height={150} alt="" className="mb-12"/>
            </Link>
            <div className="font-bold lg:text-left text-center">
              JRM VEÍCULOS.<br/>
              <FaPhone className="inline-block align-middle" /> (11)91234-12345<br/>
              <FaEnvelope className="inline-block align-middle" /> jrmveiculos@gmail.com<br/>
              <FaRobot className="cursor-pointer inline-block align-middle" />
              <Link to={"home"} className="font-medium cursor-pointer">
                Tire dúvidas com o nosso ChatBot
              </Link>
            </div>
          </div>
          {/* links */}
          <div className="flex flex-col flex-1 items-center lg:items-start">
            <div>
              <h3 className="h3 font-bold mb-4 lg:mb-8 text-center lg:text-left">Empresa</h3>
              <ul className="flex flex-col gap-y-4 font-semibold text-center lg:text-left">
                <li>
                  <Link
                    to={"home"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Locais
                  </Link>
                </li>
                <li>
                  <Link
                    to={"about"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Carreira
                  </Link>
                </li>
                <li>
                  <Link
                    to={"cars"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Carros
                  </Link>
                </li>
                <li>
                  <Link
                    to={"why"}
                    smooth={true}
                    spy={true}
                    className="cursor-pointer"
                  >
                    Como trabalhamos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* programa */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-4 lg:mb-8 text-center lg:text-left">Horário de Atendimento</h3>
            <div className="flex flex-col gap-y-4 text-center lg:text-left">
              <div className="flex gap-x-2">
                <div className="text-secondary">Seg-Sex:</div>
                <div className="font-semibold">09:00 - 21:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sáb:</div>
                <div className="font-semibold">09:00 - 19:00</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Dom:</div>
                <div className="font-semibold">Fechado</div>
              </div>
            </div>
          </div>
          {/* notícias*/}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-4 lg:mb-8 text-center lg:text-left">Notícias</h3>
            <div className="mb-9 text-secondary text-center lg:text-left">
              Receba as últimas notícias relacionadas à nossa empresa
            </div>
            {/* form */}
            <form className="flex gap-x-2 h-14 justify-center lg:justify-start">
              <input
                type="text"
                placeholder="Seu e-mail"
                className="outline-none bg-white h-full 
                border rounded-lg pl-4 focus:border-accent"
              />
              <button type="submit" className="btn btn-sm btn-accent w-24">
                Enviar
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}

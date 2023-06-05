import React from "react";
import Button from "./Button";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
const Hero = ({ setIsShowModal }) => {
  return (
    <section id="hero">
      <div className="bg-[url('/living.jpg')] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center text-white flex flex-col gap-[20px] md:gap-[40px]">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider">
                Вам нужен клининг от профессионалов? Ваша чистота - это наша
                забота!
              </h1>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider">
                <span className="text-green-600"> Профессиональная </span>{" "}
                уборка в Бишкеке
              </h1>
            </div>
            <div className="mx-auto bg-green-800 h-[2px] w-[150px]"></div>
            <div>
              <p className="text-sm md:text-xl text-gray-300 tracking-widest">
                <span className="italic">Clean </span>
                <span className="italic text-green-600">Time </span>
                <span className="italic">Самый лучший Сервис</span>
              </p>
            </div>
            <div>
              <Button link="tel: +996703156975" text="Позвонить" />
            </div>
          </div>
        </div>
        <div className="hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center">
          <div className="bg-green-600 w-[1.5px] h-[250px]"></div>
          <Link href='tel: +996703156975'>
            <AiOutlinePhone
              size={25}
              className="text-green-600 hover:translate-x-1 duration-300"
            />
          </Link>
          <Link href='https://wa.me/+996703156975' target="_blank">
            <AiOutlineWhatsApp
              size={25}
              className="text-green-600 hover:translate-x-1 duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center sm:py-32 my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-44 ">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/Viraj_Image1.jpeg"
            alt=""
            height={300}
            width={300}
          />
        </div>
        <div className=" md:mt-2 md:w-3/5 ">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&#39;m Viraj!{" "}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{"  "}
            <span className="font-semibold text-teal-600">
              Innovative Web Developer{"  "}
            </span>
            Actively pursuing studies at VSITR, dedicated to staying ahead in
            the field. Passionate about expanding skillset and exploring
            cutting-edge technologies to create exceptional web solutions.
            Committed to learning and development.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

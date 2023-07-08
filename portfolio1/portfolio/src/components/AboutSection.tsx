"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "c/c++" },
  { skill: "python" },
  { skill: "git" },
  { skill: "nextjs" },
  { skill: "github" },
  { skill: "TailwindCss" },
  { skill: "Mongodb" },
  { skill: "Django" },
  { skill: "DataScience Basics" },
  { skill: "Data Structure and Algorithm" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center justify-center text-4xl">
          About ME
          <hr className="w-6 h-1 mx-auto  my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-x-10 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Achievements
            </h1>
            <ul>
              <li>&bull; code studio 5 star ranking (champion) </li>
              <br />
              <li>&#x2022; Data Science basic certificate at Coursera</li>
              <br />
              <li>&#x2022; Hands on Workshop in IOT-Data Science(FEB-2023)</li>
              <br />
              <li>
                &#x2022; Selected in Brave jump program{" "}
                <a
                  href="https://bravejump.org"
                  className="border-double border-b-2 border-black"
                >
                  bravejump.org
                </a>
              </li>
              <br />
              <li>
                &#x2022; Selection at college level for idea representation at
                college Level in SSIP
              </li>
              <br />
              <li>
                &#x2022; Complete 2023 Web Development Boot Camp Dr. Angela
                Yu(Presently Learning from Udemy)
              </li>
            </ul>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Download my resume here
            </h1>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <HiArrowDown size={35} className="animate-bounce ml-28" />
            </Link>
            <button className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 ml-20 mt-2">
              <a href="Viraj_resume.jpg" download>
                Resume
              </a>
            </button>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>

            <div className="flex flex-wrap flex-row  justify-center  md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              className="hidden md:block  md:relative md:bottom-4  md:left-12 md:top-10 md:z-0"
              src="/aboutImage.png"
              alt=""
              height={380}
              width={380}
            /> */}
            {/* <div className="md:w-1/2"> */}
            <h1 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
              Get to know about me!
            </h1>
            <div className="ml-5">
              <p>
                {" "}
                Hi, my name is Viraj and I am a
                <span className="font-bold">{" highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> Web Developer
                Currently Studying at VSITR.
              </p>
              <br />
              <p>
                As an undergraduate student pursuing Bachelor’s in Computer
                Science
              </p>
              <br />
              <p>
                I have a wide range of hobbies and passions that keep me busy.
                From reading, exploring ,Gym ,seeking to know new technology I
                am always seeking new experiences and love to keep myself
                engaged and learning new things.
              </p>
              <br />
              <p>
                I believe that you should {""}
                <span className="font-bold text-teal-500">
                  never stop growing
                </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always push the limits of what is
                possible. I am excited to see where my career takes me and am
                always open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

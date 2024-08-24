import React from "react";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/girl-ill.c06eb42d.png";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className=" text-center font-secondary justify-center">
          <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
            ZUMAR <span>S</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a </span>
            <TypeAnimation
              sequence={["Developer", 2000, "Freelancer", 2000]}
              speed={50}
              className="text-yellow-400"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p className="mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus eu elit efficitur nisi.
          </p>
          <div>
            <button className="btn btn-lg mr-5">Contact me</button>
            <a href="#" className="text-yellow-400 btn-link text-2xl">
              My Portfolio
            </a>
          </div>
          <div className="flex text-[24px] gap-x-6 justify-center mt-10">
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

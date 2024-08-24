import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 nt mb-6 text-yellow-400"> What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelancer Front-end Developer with over 1 year of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>

          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, link, description } = service;
                return (
                  <div key={index} className="border-b border-white/20 h-[146px] mb-[38px] flex">
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-yellow-400 text-xl">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

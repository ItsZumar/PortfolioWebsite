import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-yellow-400">About me.</h2>
            <h3 className="h3 mb-4 ">I'm a Full Stack Developer with over 1 year of experience.</h3>
            <p className="mb-6">
              In my one year journey as a React Native developer, I've been busy creating mobile apps for both iPhones
              and Androids. I know my way around React Native, Node.js, TypeScript, Tailwind CSS, and React.js, making
              sure I have the right tools for the job. I've gotten good at designing screens that work well on different
              devices. I always keep up with what's new in tech to use the best methods. I'm excited to helping out in
              the React Native community and look forward to doing more fun projects in the future.
            </p>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="btn-link text-yellow-400 text-3xl">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Card from "../components/Card";
import Weather from "../components/Weather";

const Home = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="flex items-center w-full min-h-screen text-dark"
    >
      <div className="flex w-full justify-between 2xl:flex-col lg:mt-26 mt-28">
        {/* IMAGE SECTION */}
        <div className="basis-2/5 z-10 flex items-center md:mt-16 order-2 justify-center">
          <div className="flex justify-center items-center">
            <Weather />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="basis-2/5 z-10 lg:mt-12 mb-10">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center items-center flex-col"
          >
            <p className="text-6xl font-semibold xs:font-medium font-playfair xl:text-center text-start xs:text-5xl dark:text-white">
              Thanh {""}
              <span
                className="relative text-white xs:text-dark font-semibold xs:font-medium before:content-brush xs:before:content-['']
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] dark:text-dark xs:dark:text-white"
              >
                Tai
              </span>
            </p>

            <div className="mt-16 xs:mt-6 flex xl:justify-center">
              <Card />
            </div>

            <div className="mt-16 flex text-3xl xl:items-center xl:justify-center xs:text-[20px] xs:mt-6">
              <p className="mr-2 dark:text-white">I'm a</p>
              <span className="text-red">
                <Typewriter
                  words={["Software Developer", "Technical Support Engineer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            {/* <p className="mt-[20px] mb-8 xl:text-center text-start dark:text-white text-base xs:text-[14px]">
              Hi, I'm Tai. I work as an airport radar engineer, in addition to
              being a free-lance web and mobile developer 😉. I am a technology
              enthusiast and passionate about programming. Besides that, in
              leisure time I enjoy reading comics such as manga, manhwa, etc and
              listening to music of various genres. It improves my mood and
              heals my soul 😆. Thank you for reading about me. Glad to meet you
              😘.
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-16">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col items-center justify-center w-full"
      >
        <p className="font-bold text-7xl mb-4 w-full text-center md:text-5xl xs:text-4xl md:mb-2 dark:text-light uppercase">
          <span className="text-red">ABOUT </span>Me
        </p>

        <LineGradient width="mx-auto w-1/5 ss:w-3/5 xl:w-2/5 " />
      </motion.div>

      {/* Image Slide */}
      <div className="mx-auto mt-32 xs:mt-24">
        <Slider />
      </div>
    </section>
  );
};

export default About;

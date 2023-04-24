import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center rounded-full font-semibold justify-center bg-dark text-light p-8 shadow-dark cursor-pointer 
                  py-3 px-6 absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold
                   dark:bg-white dark:text-dark dark:xs:bg-transparent dark:xs:text-white"
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const SkillProgress = ({ name, progress }) => {
  return (
    <div className="px-4 py-2">
      <p className="flex justify-between text-base pb-1 font-semibold dark:text-white">
        {name} <span>{progress}</span>
      </p>

      <div className="h-3 rounded border border-dark p-0.5 flex items-center dark:text-white dark:border-white">
        <span
          className="block bg-red h-1.5 rounded"
          style={{ width: `${progress}` }}
        ></span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="pt-32">
      <motion.div
        className="flex flex-col justify-between items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-bold text-7xl mb-4 w-full text-center md:text-5xl xs:text-4xl md:mb-2 dark:text-white">
          MY <span className="text-red">SKILLS</span>
        </p>
        <LineGradient width="mx-auto w-1/5 ss:w-3/5 xl:w-2/5 " />
        <p className="mt-10 mb-7 dark:text-white">
          Having basic programming skills in embedded software and web/mobile
        </p>
      </motion.div>

      {/* Skill Progress */}
      <div className="flex wrap gap-2 justify-center w-full lg:flex-col my-8">
        <div className="relative border border-primary rounded p-2 grow shrink">
          <SkillProgress name="HTML" progress="80%" />
          <SkillProgress name="CSS" progress="50%" />
          <SkillProgress name="Javascript" progress="60%" />
        </div>
        <div className="relative border border-primary rounded p-2 grow shrink">
          <SkillProgress name="ReactJs" progress="70%" />
          <SkillProgress name="NodeJs" progress="40%" />
          <SkillProgress name="Python" progress="60%" />
        </div>
      </div>

      {/* SKILLS */}
      <div className="block pt-16 w-[95%] mx-auto xs:pt-3">
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] dark:bg-circularDark">
          <motion.div
            className="flex items-center rounded-full font-semibold justify-center bg-dark text-light p-8 shadow-dark cursor-pointer
            lg:p-6 md:p-4 xs:text-xs xs:p-2 dark:bg-white dark:text-dark"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>

          <Skill name="CSS" x="1vw" y="-14vw" />
          <Skill name="HTML" x="-16vw" y="6vw" />
          <Skill name="ReactJs" x="6vw" y="18vw" />
          <Skill name="ReactNative" x="-24vw" y="-4vw" />
          <Skill name="Python" x="16vw" y="-4vw" />
          <Skill name="Javascript" x="18vw" y="4vw" />
          <Skill name="Firebase" x="32vw" y="-2vw" />
          <Skill name="NodeJs" x="-28vw" y="15vw" />
          <Skill name="Github" x="-20vw" y="-15vw" />
          <Skill name="Tailwind CSS" x="20vw" y="-20vw" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
        <motion.span
          className="block bg-red h-1.5 rounded"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { width: 0 },
            visible: { width: progress },
          }}
        ></motion.span>
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
        <p className="mt-10 mb-7 dark:text-white text-center">
          Having basic hard skills and soft skills
        </p>
      </motion.div>

      {/* Skill Progress */}
      <div className="flex wrap gap-2 justify-center w-full lg:flex-col my-8">
        <div className="w-full">
          <p className="text-center text-dark font-bold text-lg mb-2">
            Hard Skills
          </p>
          <div className="relative flex flex-col border border-primary rounded p-2 grow shrink">
            <SkillProgress name="Web/Mobile Design" progress="60%" />
            <SkillProgress name="Mechanical Design" progress="70%" />
            <SkillProgress name="Technical Consulting" progress="60%" />
          </div>
        </div>
        <div className="w-full">
          <p className="text-center text-dark font-bold text-lg mb-2">
            Soft Skills
          </p>
          <div className="relative flex flex-col border border-primary rounded p-2 grow shrink">
            <SkillProgress name="English Communication" progress="50%" />
            <SkillProgress
              name="Analysis and Problem-solving"
              progress="70%"
            />
            <SkillProgress name="Team-work/Collaboration" progress="85%" />
          </div>
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
            Skills
          </motion.div>

          <Skill name="Web/mobile development" x="1vw" y="-14vw" />
          {/* <Skill name="HTML" x="-16vw" y="6vw" /> */}
          <Skill name="Mechanical design" x="6vw" y="18vw" />
          <Skill name="Technical consulting" x="-24vw" y="-4vw" />
          {/* <Skill name="Python" x="16vw" y="-4vw" /> */}
          <Skill name="English" x="18vw" y="4vw" />
          <Skill name="Self-learning" x="32vw" y="-2vw" />
          <Skill name="Team-work" x="-28vw" y="15vw" />
          {/* <Skill name="Github" x="-20vw" y="-15vw" /> */}
          <Skill name="Time management" x="20vw" y="-20vw" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

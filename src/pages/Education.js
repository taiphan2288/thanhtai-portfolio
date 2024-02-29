import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import MarkIcon from "../components/MarkIcon";
import LineGradient from "../components/LineGradient";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[75%] flex flex-col items-start justify-between mx-auto md:w-[80%]"
    >
      <MarkIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-lg xs:text-base dark:text-white">
          {type}
        </h3>
        <span className=" block capitalize font-medium text-dark/75 xs:text-sm italic py-1 dark:text-white">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm dark:text-white">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section id="education" className="pt-32 pb-16">
      <motion.div
        className="text-center mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="font-bold text-7xl mb-4 w-full text-center md:text-5xl xs:text-4xl md:mb-2 uppercase text-red">
          Education & Work
        </h2>
        <LineGradient width="mx-auto w-1/5 ss:w-3/5 xl:w-2/5 " />
      </motion.div>

      <div ref={ref} className="w-[70%] relative mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-white"
        />

        <ul className="w-full flex flex-col justify-between lg:ml-4 ml-10">
          <Details
            type="technical engineer"
            time="2023-now"
            place="Vietnam Air Traffic Management Corporation (VATM)"
            info="Responsible for operating and maintaining technical equipments for the air traffic control station"
          />

          <Details
            type="degree of mechanical engineering"
            time="2017-2022"
            place="Hanoi university of science and technology (HUST)"
            info="Completed all courses at university. Have knowledges in robotic and basic programming skills on website and mobile"
          />

          <Details
            type="high school"
            time="2014-2017"
            place="High school of huynh thuc khang"
            info="Completed"
          />
        </ul>
      </div>
    </section>
  );
};

export default Education;

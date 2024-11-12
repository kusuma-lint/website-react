// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-2xl">
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          UD.Karomah Indah Website
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elite. Voluptatibus, incidunt?
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis aspernatur
          facilis repellat, similique vel vitae non a expedita inventore. Earum magnam
          necessitatibus accusantium eius cum enim eaque aliquid omnis. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Recusandae necessitatibus illo odio minus,
          rerum, delectus saepe nobis quidem facilis beatae consequatur animi obcaecati id
          quam. Eveniet molestias asperiores debitis doloremque.
        </p>
        <Link to="/about-more">
          <motion.button
            variants={zoomInVariants}
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black"
          >
            READ MORE
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;

import React from "react";
import PythonLogo from "../assets/icons/python.svg";
import Djangologo from "../assets/icons/django.svg";
import Gitlogo from "../assets/icons/git.svg";
import Htmllogo from "../assets/icons/html5.svg";
import Csslogo from "../assets/icons/css3.svg";
import Numpylogo from "../assets/icons/numpy.svg";
import Jupyterlogo from "../assets/icons/jupyter.svg";
import Pandaslogo from "../assets/icons/pandas.svg";

import { BiLogoPostgresql } from "react-icons/bi";
import { SiPytorch, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";

import MatLablogo from "../assets/icons/matlab.svg";
import SolidEdgelogo from "../assets/icons/solidedge.png";
import Idatunnellogo from "../assets/icons/idatunnel.png";
import Scikitlearn from "../assets/icons/scikit-learn.png";
import Ansyslogo from "../assets/icons/ansys.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b boder-neutral-800 pb-24 text-white bg-black">
      <motion.h1
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="text-marker  my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={PythonLogo} alt="Python Logo" className="" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPytorch className="text-7xl text-red-600" />{" "}
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Djangologo} alt="Django Logo" className="" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Csslogo} alt="CSS3 Logo" className="" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Htmllogo} alt="HTLM5 Logo" className="" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-teal-500" />{" "}
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />{" "}
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Gitlogo} alt="Git Logo" className="" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-white" />{" "}
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Numpylogo} alt="Numpy Logo" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Pandaslogo} alt="Pandas Logo" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Jupyterlogo} alt="Jupyter Logo" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={MatLablogo} alt="Matlab Logo" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={Scikitlearn}
            alt="Scikit-learn Logo"
            className="logo-size"
          />
        </motion.div>
      </div>
      <motion.h2
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="smooch-text my-10 text-center text-3xl font-bold py-6"
      >
        Engineering
      </motion.h2>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Ansyslogo} alt="Ansys Logo" className="engineering-logo" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={SolidEdgelogo}
            alt="Solid Edge Logo"
            className="engineering-logo"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src={Idatunnellogo}
            alt="Solid Edge Logo"
            className="engineering-logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

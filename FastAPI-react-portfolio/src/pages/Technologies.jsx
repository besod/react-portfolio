import React from "react";
import PythonLogo from "../assets/icons/python.svg";
import Djangologo from "../assets/icons/django.svg";
import Gitlogo from "../assets/icons/git.svg";
import Htmllogo from "../assets/icons/html5.svg";
import Csslogo from "../assets/icons/css3.svg";
import Scikitlearn from "../assets/icons/scikit-learn.png";
import Numpylogo from "../assets/icons/numpy.svg";
import Jupyterlogo from "../assets/icons/jupyter.svg";

import { BiLogoPostgresql } from "react-icons/bi";

import { SiPytorch, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";

import Ansyslogo from "../assets/icons/ansys.png";
import MatLablogo from "../assets/icons/matlab.svg";
import SolidEdgelogo from "../assets/icons/solidedge.png";
import Idatunnellogo from "../assets/icons/idatunnel.png";

const Technologies = () => {
  return (
    <div className="border-b boder-neutral-800 pb-24 text-white bg-black">
      <h1 className="text-marker  my-20 text-center text-4xl font-bold">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={PythonLogo} alt="Python Logo" className="" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-7xl text-red-600" />{" "}
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Djangologo} alt="DJANGO Logo" className="" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Csslogo} alt="CSS Logo" className="" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Htmllogo} alt="HTLM Logo" className="" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-teal-500" />{" "}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />{" "}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Gitlogo} alt="GIT Logo" className="" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white" />{" "}
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Numpylogo} alt="NUMPY Logo" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Jupyterlogo} alt="JUPYTER Logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={MatLablogo} alt="MATLAB Logo" />
        </div>
        <div className=" rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Scikitlearn} alt="SCIKITLEARN Logo" className="logo-size" />
        </div>
      </div>
      <h2 className="my-10 text-center text-3xl font-bold py-6">Engineering</h2>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Ansyslogo} alt="Ansys Logo" className="engineering-logo" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={SolidEdgelogo}
            alt="Solid Edge Logo"
            className="engineering-logo"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={Idatunnellogo}
            alt="Solid Edge Logo"
            className="engineering-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

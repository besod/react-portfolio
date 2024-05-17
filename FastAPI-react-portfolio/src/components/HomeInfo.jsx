import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box ">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div>
      <h1 className="sm:text-xl sm:leading-snugg text-cneter neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm <span className="font-semibold">Biniyam</span>👋
        <br />
        <p>I'm a full-stack developer.</p>
      </h1>
    </div>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills"
      link="/about "
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
    text="Lead mltiple projects to succes and worked with many companies over the year"
    link="/projects "
    btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a developer? Contact me!"
      link="/contact"
      btnText="Let's talk!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;

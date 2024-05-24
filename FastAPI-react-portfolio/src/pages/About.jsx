import React from "react";

import aboutme from "../assets/images/aboutme.jpg";
import { ABOUT_TEXT, skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text mb-4">
        Hello, I'm{" "}
        <span className="biniyam-about font-semibold drop-shadow">
          Biniyam!
        </span>
      </h1>
      <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2  my-2">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutme} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col justify-center lg:justify-start gap-3 text-slate-500">
            <p className="my-2 max-2-xl px-6">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
       
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Tech Stack</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
      </div>
    </section>
  );
};

export default About;

import React from "react";

import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="biniyam-about font-semibold drop-shadow">Biniyam</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm am Mechanical engineer with Master's degree in Machine design -
          but with a twist. But that's not all, I've also dipped my toes into
          the exciting world of Artificial Intelligence and python development.
          My journey in AI has led me to develop a deep passion for several
          cutting-edge technologies. AI, Generative AI, Machine Learning and
          Data Analysis are all domains I am deeply passionate about. But, I'm
          not just about the software. My background in Engineering allows me to
          bring a unique perspective to my work in AI.I am always excited about
          learning new things and looking for new challanges.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">  
            <div className="btn-back rounded-xl"/>           
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
    </section>
  );
};

export default About;

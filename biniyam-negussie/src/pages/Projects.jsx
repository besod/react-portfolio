import React from "react";
import { projects} from "../constants";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div className=" bg-black text-white">
      <section className="max-container">
        <div className="py-16">
          <h3 className="text-marker text-center text-4xl font-bold mt-4">
            Projects
          </h3>
        </div>

        <div className="flex flex-wrap  gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold project-name">
                  {project.name}
                </h4>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="mt-5 mb-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white bg-pink-500 px-4 py-2 rounded"
                    >
                    View Project
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-slate-200 " />
        <CTA />
      </section>
    </div>
  );
};

export default Projects;

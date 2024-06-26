import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Technologies from "./Technologies";
import aboutme from "../assets/images/aboutme.jpg";
import { ABOUT_TEXT, experiences } from "../constants";
import CTA from "../components/CTA";
import SocialLinks from "../components/SocialLinks";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const About = () => {
  return (
    <div className=" bg-black text-white">
      <section className="max-container">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="head-text"
        >
          Hello, I'm{"  "}
          <span
            animate={{ x: 100 }}
            className="head-text font-semibold drop-shadow"
          >
            David!
          </span>
        </motion.h1>
        <div className="flex flex-wrap">
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2  my-2"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutme} alt="about" />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full lg:w-1/2 "
          >
            <div className="flex flex-col justify-center lg:justify-start gap-3 text-white">
              <p className="my-2 max-w-full px-6 sm:px-6">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
        <Technologies />

        <div className="py-16">
          <h3 className="text-marker text-center text-4xl font-bold mt-4">
            Project Experience
          </h3>
        </div>

        <div>
          Below are some of the key projects I’ve worked on, demonstrating my
          technical skills and hands-on experience. Each project is a testament
          to my ability to learn, adapt, and deliver high-quality work.
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                // date={experience.company_name}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  background: "transparent",
                  color: "#fff",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-white text-xl font-poppins font-semibold ">
                    {experience.project_title}
                  </h3>
                  <p
                    className="text-500 font-medium font-base"
                    style={{ MeshRefractionMaterial: 0 }}
                  >
                    {experience.company_name} <br />
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => {
                    const urlStart = point.indexOf("https://");
                    if (urlStart !== -1) {
                      const textPart = point.substring(0, urlStart);
                      const urlPart = point.substring(urlStart);
                      return (
                        <li
                          key={`experience-point-${index}`}
                          className="text-white font-normal pl-1 text-sm"
                        >
                          {textPart}
                          <a
                            href={urlPart}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-500 underline hover:text-blue-500"
                          >
                            {urlPart}
                          </a>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={`experience-point-${index}`}
                          className="text-white font-normal pl-1 text-sm"
                        >
                          {point}
                        </li>
                      );
                    }
                  })}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <hr className="border-slate-200" />

        <CTA />
        <div></div>
      </section>
    </div>
  );
};

export default About;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Technologies from "./Technologies";
import aboutme from "../assets/images/aboutme.jpg";
import { ABOUT_TEXT, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div className=" bg-black text-white">
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{"  "}
          <span className="head-text font-semibold drop-shadow">Biniyam!</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2  my-2">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutme} alt="about" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="flex flex-col justify-center lg:justify-start gap-3 text-white">
              <p className="my-2 max-2-xl px-6">{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
        <Technologies />

        <div className="py-16">
          <h3 className="text-marker text-center text-4xl font-bold mt-4">
            Project Experience
          </h3>
        </div>

        <div>Below are some of the key projects I’ve worked on, demonstrating my technical skills and hands-on experience. Each project is a testament to my ability to learn, adapt, and deliver high-quality work..</div>

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
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <hr className="border-slate-200" />

        <CTA />
      </section>
    </div>
  );
};

export default About;

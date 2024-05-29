import { meta, shopify, starbucks, tesla } from "../assets/images";
import python from "../assets/icons/python.svg";
import pytorch from "../assets/icons/pytorch.svg";
import link from "../assets/images/link.png";
import kth from "../assets/images/kth.jpg";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  linkedin,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: pytorch,
    name: "Python",
    type: "Machine learning library",
  },

  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    project_title: "STABLE DIFFUSION",
    company_name: "Link Arkitektur",
    icon: link,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Conducted research and experimentation on stable diffusion architectural workflow.",
      "Worked in cross-functional collaboration with designers and architects.",
      "Model training for architectural designs, both interior and exterior.",
      
    ],
  },
  {
    project_title: "ARCHICAD DATA MANAGEMENT",
    company_name: "Link Arkitektur",
    icon: link,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Developing python package to extract design and construction data from ArchiCAD models for machine learning applications.",
      "Collaborating with cross-functional teams including designers and architects.",
      "Laid groundwork for further exploration, automation and imformed decision making in architectural desin and construction.",
      
    ],
  },
  {
    project_title: "SIMULATION OF AIR QUALITY IN UNDERGROUND TRAIN STATIONS",
    company_name: "KTH",
    icon: kth,
    iconBg: "#a2d2ff",
    date: "",
    points: [
      "Examined and evaluated field collected data in previous particle concentration measurements.",
      "Rebuilt geometrical model of Stockholm's underground metro station and simulated particle emissions from trains using a software tool IDA tunnel.",
      "Analyzed and calibrated particle concentration levels in metro tunnel.",
      
    ],
  },
  {
    project_title: "DESIGN AND DEVELOPMENT OF 10 MW WAVE ENGERY CONVERTER PROTOTYPE",
    company_name: "KTH",
    icon: kth,
    iconBg: "#a2d2ff",
    date: "",
    points: [
      "Coordinated and led a team of six students designing a test rig for a scaled down prototype, from concept design to construction and testing.",
      "Built and assembled important test rig components using KTH's workshop machines.",
      "Modeled and analyzed critical test rig components using Solidedge & Ansys software to optimize design and material usage.",
      
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];

export const ABOUT_TEXT = `I am a Mechanical Engineer with a Master’s degree in Machine Design, but with a twist. Based in Sweden, my academic background and professional journey have led me to explore the intersection of engineering and cutting-edge technologies such as Artificial Intelligence, Generative AI, Machine Learning, and Data Analysis.

My expertise extends to Python development, where I’ve applied my skills to various AI projects. My engineering background provides a unique perspective to my work in AI, allowing me to bridge the gap between mechanical design and software development.

I am deeply passionate about these domains and am always eager to learn and take on new challenges. My journey is characterized by continuous learning and adaptation in the rapidly evolving field of technology.`;

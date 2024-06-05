// Description: Constants for the portfolio website, including skills, experiences, social links, and projects.

import python from "../assets/icons/python.svg";
import pytorch from "../assets/icons/pytorch.svg";
import link from "../assets/images/link.png";
import kth from "../assets/images/kth.jpg";
import archicad from "../assets/icons/archicad.jpg";
import ai from "../assets/icons/ai.jpeg";
import food from "../assets/icons/food.jpeg";
import django from "../assets/icons/django.svg";
import { FaGithub } from "react-icons/fa";
import {
  contact,
 
  git,
  github,
  html,
  linkedin,
  react,
  tailwindcss,
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
    iconBg: "#d3d3d3",
    date: "",
    points: [
      "Conducted research and experimentation on stable diffusion for architectural workflow.",
      "Worked in cross-functional collaboration with designers and architects.",
      "Model training for architectural designs, both interior and exterior designs.",
    ],
  },
  {
    project_title: "ARCHICAD DATA MANAGEMENT",
    company_name: "Link Arkitektur",
    icon: link,
    iconBg: "#d3d3d3",
    date: "",
    points: [
      "Developing python package to extract design and construction data from ArchiCAD models for machine learning applications.",
      "Collaborating with cross-functional teams including designers and architects.",
      "Laid groundwork for further exploration, automation and informed decision making in architectural design and construction.",
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
      "Rebuilt geometrical model of Stockholm's underground train stations and simulated particle emissions from trains using a software tool IDA tunnel.",
      "Analyzed and calibrated particle concentration levels in tunnels.",
    ],
  },
  {
    project_title:
      "DESIGN AND DEVELOPMENT OF 10 MW WAVE ENGERY CONVERTER PROTOTYPE",
    company_name: "KTH",
    icon: kth,
    iconBg: "#a2d2ff",
    date: "",
    points: [
      "Coordinated and led a team of six students designing a test rig for a scaled down prototype, from concept design to construction and testing.",
      "Built and assembled important test rig components using KTH's workshop machines.",
      "Modeled and analyzed critical test rig components using Solidedge & Ansys software to optimize design and material usage.",
      "Read more about the project's current development here: https://noviocean.energy/",
    ],
  },
];

export const socialLinks = [
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "/contact",
  // },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/besod",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/biniyam-negussie/",
  },
];

export const projects = [
  {
    iconUrl: archicad,
    theme: "btn-back-black",
    name: "Archicad Data Processor",
    description:
      "The ArchiCAD Data Processor is a Python-based project designed to extract and process architectural data from ArchiCAD projects using the ArchiCAD Python API. This data can then be utilized for various machine learning applications, offering insights into building dimensions and materials. By automating data extraction and analysis, this tool bridges the gap between architectural design and data-driven insights, enabling informed decision-making in building design and construction",
    link: "https://github.com/besod",
  },

  {
    iconUrl: ai,
    theme: "btn-back-blue",
    name: "Online Media Sentiment Tracker",
    description:
      "The Media Sentiment Analyzer provides real-time insights into online media coverage sentiment. It utilizes web scraping and natural language processing (NLP) techniques to analyze news articles, categorizing sentiment as positive, negative, or neutral. With efficient data storage and visualization tools, track media sentiment trends.",
    link: "https://github.com/besod/Online-Media-Sentiment-Tracker/tree/main/Online-Media-Sentiment-Tracker",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "React Based Portfolio Website",
    description:
      "This project is a portfolio website developed using React and TailwindCSS. It serves as an interactive showcase for my skills, projects, and experience. The site is fully responsive, ensuring compatibility across various devices and screen sizes.",
    link: "https://github.com/besod/react-portfolio",
  },

  {
    iconUrl: food,
    theme: "btn-back-yellow",
    name: "Culinary Review Web Application",
    description:
      "A Django-based platform where food enthusiasts upload images, leave comments, review, and rate dishes. It connects fellow foodies, discover new recipes, and share their culinary.",
    link: "https://github.com/besod/kebab-review-app/tree/main",
  },
  {
    iconUrl: django,
    theme: "btn-back-greenish",
    name: "Django-Driven Portfolio Showcase",
    description:
      "The Personal Portfolio Website is a Django-based project that serves as a showcase of my  projects, and experience. With Django's robust framework, the website offers seamless navigation, efficient data management, and dynamic content presentation. ",
    link: "https://github.com/besod/personal",
  },
];

export const ABOUT_TEXT = `I am a Mechanical Engineer with a Master’s degree in Machine Design, but with a twist. Based in Sweden, my academic background has led me to explore the intersection of engineering and cutting-edge technologies such as Artificial Intelligence, Generative AI, Machine Learning, and Web Development.

My engineering background provides a unique perspective to my work in AI, allowing me to bridge the gap between mechanical design and software development.

I am deeply passionate about these domains and am always eager to learn and take on new challenges. My journey is characterized by continuous learning and adaptation in the rapidly evolving field of technology.`;

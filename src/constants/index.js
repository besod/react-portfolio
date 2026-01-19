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
    name: "Archicad Data Extractor",
    description:
      "A Python tool that extracts data from ArchiCAD projects using the ArchiCAD Python API. It collects information like element properties, dimensions, and materials, and outputs it in a structured format for analysis and further processing.",
    link: "https://github.com/besod/ArchiCAD-pythonAPI",
  },

  {
    iconUrl: ai,
    theme: "btn-back-blue",
    name: "Sentiment Analysis",
    description:
      "A python-based sentiment analysis tool that collects news articles through web scraping and uses NLP to classify sentiment as positive, negative, or neutral.",
    link: "https://github.com/besod/Online-Media-Sentiment-Tracker/tree/main/Online-Media-Sentiment-Tracker",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "React Based Portfolio Website",
    description:
      "  A personal website built with React and Tailwind CSS to showcase my projects and experience.",
    link: "https://github.com/besod/react-portfolio",
  },

  {
    iconUrl: food,
    theme: "btn-back-yellow",
    name: "Food Review Web App",
    description:
      "A Django-based web app that lets users upload images, leave comments and rate images. Built to practice backend development.",
    link: "https://github.com/besod/kebab-review-app/tree/main",
  },
  // {
  //   iconUrl: django,
  //   theme: "btn-back-greenish",
  //   name: "Django-Driven Portfolio Website",
  //   description:
  //     "The Personal Portfolio Website is a Django-based project that serves as a showcase of projects. With Django's robust framework.",
  //   link: "https://github.com/besod/personal",
  // },
];
export const ABOUT_TEXT = [

 `With an MSc in Engineering Design, I’ve always been interested in how things are built. 
 I'm interested in automation and how python and machine learning can be used to improve engineering workflows.`,

`I enjoy learning about these domains and am always eager to learn and take on new challenges. My journey is characterized by 
  continuous learning and adaptation in the rapidly evolving field of technology.`
  
];


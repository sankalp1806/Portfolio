import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://your-project-link-1.com",
    },
    {
      src: "/LoginPage.png",
      title: "Animated Login Page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://your-project-link-2.com",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://your-project-link-3.com",
    },
    {
      src: "/WhatsApp_Chat_Analyser.png",
      title: "WhatApp Chat Analyser",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://whatsapp-chat-analyser-knkku23vzehys3efquqdo3.streamlit.app/",
    },
    {
      src: "/FifthProject.png",
      title: "Fifth Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://your-project-link-5.com",
    },
    {
      src: "/SixthProject.png",
      title: "Sixth Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://your-project-link-6.com",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-3 px-10 mt-10">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        {projects.slice(3, 6).map((project, index) => (
          <ProjectCard
            key={index + 3}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

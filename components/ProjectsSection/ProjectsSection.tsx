"use client";

import React from "react";
import Project from "./Project";
import projectImg from "@/public/images/project.jpg";
import { useSectionInView } from "@/lib/hooks";

export const projectsData = [
  {
    title: "Scribble Sphere",
    description:
      "A web app for bloggers to write and share their thoughts with the world.",
    tags: ["Vue JS", "Flask", "SQLite", "Redis"],
    githubLink: "github.com",
    imageUrl: projectImg,
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website built with Next JS, Tailwind CSS and TypeScript.",
    tags: ["Next JS", "Tailwind CSS", "TypeScript"],
    githubLink: "github.com",
    imageUrl: projectImg,
  },
];

const ProjectsSection = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="flex h-screen flex-col items-center justify-evenly scroll-mt-10"
    >
      <p className="text-2xl tracking-widest font-bold">PROJECTS</p>
      <div>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

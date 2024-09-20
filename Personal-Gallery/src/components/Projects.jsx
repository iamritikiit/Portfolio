import React from "react";
import './Project.css'

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A responsive portfolio website built with React and CSS.",
      techStack: "React, CSS, HTML",
      link: "https://github.com/your-username/portfolio-website",
    },
    {
      name: "E-commerce App",
      description: "An e-commerce application with payment integration.",
      techStack: "React, Node.js, Express.js, MongoDB",
      link: "https://github.com/your-username/ecommerce-app",
    },
    {
      name: "Task Manager",
      description: "A task management tool to track personal and professional tasks.",
      techStack: "Django, React, PostgreSQL",
      link: "https://github.com/your-username/task-manager",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

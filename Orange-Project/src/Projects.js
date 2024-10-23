// Projects.js
import React from 'react';
import Project from './Project';

const Projects = () => {
  const projects = [
    { name: 'Project 1', users: ['User 1', 'User 2'] },
    { name: 'Project 2', users: ['User 3', 'User 4'] },
    { name: 'Project 3', users: ['User 5', 'User 6'] }
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project key={index} name={project.name} users={project.users} />
      ))}
    </div>
  );
};

export default Projects;

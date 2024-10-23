// ProjectDetails.js
import React from 'react';

// Hardcoded for now

const ProjectDetails = ({ name, users }) => {
  return (
    <div className="project-details">
      <h3>{name}</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;

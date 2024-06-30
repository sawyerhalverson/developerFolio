import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.projectName}</h2>
      <p>{project.projectDesc}</p>
      {/* Additional details as needed */}
    </div>
  );
}

export default ProjectDetails;

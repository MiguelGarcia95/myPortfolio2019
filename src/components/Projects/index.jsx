import React from 'react';
import Project from '../Project';
import './styles/css/style.min.css';

import projectData from '../../projectData';

function Projects() {
  const displayProjects = () => projectData.map(project => <Project id={project.id} data={project} />);

  return (
    <div className='section projects'>
      <div className="page-container">
        <div className="content">
          <div className="header">
            <h1 className="background-title">Projects</h1>
            <h1 className="title">Projects</h1>
          </div>

          <div className="projects-display">
            <div className="project">
              {displayProjects()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
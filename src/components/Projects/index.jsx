import React from 'react';
import Project from '../Project';
import SectionTitle from '../SectionTitle';
import './styles/css/style.min.css';

import projectData from '../../projectData';

function Projects() {
  const displayProjects = () => projectData.map(project => <Project id={project.id} project={project} />);

  return (
    <div className='section projects'>
      <div className="page-container">
        <div className="content">
          <SectionTitle title="Projects" float='left' />

          <div className="projects-display">
            {displayProjects()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
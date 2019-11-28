import React from 'react';
import Project from '../_Project_';
import './styles/style.css';

import projectData from '../../projectData';

export default function Projects({onProjectClick}) {
  return (
    <div className="section projects">
      <div className="row">
        <Project 
          classes='project pf flex-1' 
          project={projectData[0]}
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project flex-1' 
          project={projectData[5]}
          onProjectClick={onProjectClick}
        />
        <Project 
         classes='project pl flex-2' 
          project={projectData[2]}
          onProjectClick={onProjectClick}
        />
      </div>
      <div className="row">
        <Project 
          classes='project pf flex-3' 
          project={projectData[3]}
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project pl flex-2' 
          project={projectData[7]}
          onProjectClick={onProjectClick}
        />
      </div>
      <div className="row">
        <Project 
          classes='project pf flex-1' 
          project={projectData[4]}
          onProjectClick={onProjectClick}
        />
        <Project 
         classes='project flex-1' 
          project={projectData[1]}
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project pl flex-1' 
          project={projectData[6]}
          onProjectClick={onProjectClick}
        />
      </div>
    </div>
  )
}

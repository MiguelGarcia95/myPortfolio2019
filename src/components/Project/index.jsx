import React from 'react';
import './styles/css/styles.min.css';

function Project({project}) {
  return (
    <div className="project">
      <div className="image">
        <img src={project.images[0].url} alt=""/>
      </div>
    </div>
  )
}

export default Project;
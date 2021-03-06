import React from 'react';

function Project({project}) {
  return (
    <div className="project">
      <div className="image">
        <img src={project.images[0].url} alt=""/>
      </div>
      <h2 className="name">{project.name}</h2>
    </div>
  )
}

export default Project;
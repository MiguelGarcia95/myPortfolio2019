import React from 'react'

export default function Project({classes, onProjectClick, project}) {
  return (
    <div className={classes} onClick={() => onProjectClick(project)}>
      <img className="background" src={project.images[0].url} alt={project.name}/>
      <div className="info">
        <h1 className="title">{project.name}</h1>
      </div>
    </div>
  )
}

import React from 'react'

export default function Project({img, title, classes, onProjectClick}) {
  return (
    <div className={classes} onClick={() => onProjectClick('project')}>
      <img className="background" src={img} alt={title}/>
      <div className="info">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
}

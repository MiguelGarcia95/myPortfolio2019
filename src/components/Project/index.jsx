import React from 'react'
import './styles/style.css';

export default function Project({img, title, classes}) {
  return (
    <div className={classes}>
      <img className="background" src={img} alt={title}/>
      <div className="info">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
}

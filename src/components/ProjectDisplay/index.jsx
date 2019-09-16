import React from 'react'
import './styles/style.css';

export default function ProjectDisplay({project}) {
  return (
    <div className='section project-display startPos'>
      {project}
    </div>
  )
}

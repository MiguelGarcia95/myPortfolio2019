import React from 'react'
import './styles/style.css';

export default function ProjectDisplay({project}) {
  return (
    <div className='section project-display startPos'>
      <div className="project-images">
        <div className="first-image">
          <img src="" alt=""/>
        </div>
        <div className="second-image">
          <img src="" alt=""/>
        </div>
      </div>
      <div className="project-content">
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestias ullam dolores sunt explicabo labore aspernatur quam ipsa consequatur doloribus omnis vitae veritatis, beatae fugiat autem vel est enim ratione.</p>
        </div>
        <div className="used">
          <p></p>
        </div>
      </div>
      {project}
    </div>
  )
}

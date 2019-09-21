import React from 'react'
import ImageSlider from '../ImageSlider';
import './styles/style.css';

const onReturnClick = (sectionLeaves, sectionEnters) => {
  sectionLeaves('project-display');
  sectionEnters('projects');
}

export default function ProjectDisplay({project, sectionLeaves, sectionEnters}) {
  return (
    <div className='section project-display startPos'>
      {project && (
        <React.Fragment>
          <div className="header">
            <div className="goback">
              <p onClick={() => onReturnClick(sectionLeaves, sectionEnters)}>Return</p>
            </div>
            <div className="go-link">
              <a href="/" target="_blank">Visit</a>
            </div>
          </div>
          <ImageSlider images={project.images} imageCount={project.imageCount}/>

          <div className="project-content">
            <div className="section-name">
              <h1>Project Name</h1>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestias ullam dolores sunt explicabo labore aspernatur quam ipsa consequatur doloribus omnis vitae veritatis, beatae fugiat autem vel est enim ratione.</p>
            </div>
            <div className="used">
              <div className="section-name">
                <h1>Tech Used</h1>
              </div>
              <p className='tech'>html</p>
              <p className='tech'>css/less</p>
              <p className='tech'>JS</p>
              <p className='tech'>ReactJS</p>
              <p className='tech'>Photoshop</p>
            </div>
            <div className="meta">
              <div className="section-name">
                <h1>Links</h1>
              </div>
              <div className="links">
                <a className="link" href='/' target="_blank">Checkout Website</a>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}      
    </div>
  )
}

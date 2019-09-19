import React from 'react'
import ImageSlider from '../ImageSlider';
import './styles/style.css';

const onReturnClick = (sectionLeaves, sectionEnters) => {
  sectionLeaves('project-display');
  sectionEnters('projects');
}

const IMAGES = {
  imageCount: 4,
  images: [
    {
      url: 'https://gameranx.com/wp-content/uploads/2016/09/Nier-Automata-1080P-Wallpaper-1.jpg',
      id: 1,
      class: 'project-image image-1' 
    },
    {
      url: 'https://i.redd.it/1dbjwhvpoia11.jpg',
      id: 2,
      class: 'project-image image-2 image-startPos' 
    },
    {
      url: 'https://i.pinimg.com/736x/bf/b4/ec/bfb4ec55cd5f515f267b918b36b18b47.jpg',
      id: 3,
      class: 'project-image image-3 image-startPos' 
    },
    {
      url: 'https://www.pcgamesn.com/wp-content/uploads/2018/08/Cyberpunk-2077-screenshot1.jpg',
      id: 4,
      class: 'project-image image-4 image-startPos' 
    },
  ]
}

export default function ProjectDisplay({project, sectionLeaves, sectionEnters}) {
  return (
    <div className='section project-display startPos'>
      <div className="header">
        <div className="goback">
          <p onClick={() => onReturnClick(sectionLeaves, sectionEnters)}>Return</p>
        </div>
        <div className="go-link">
          <a href="/" target="_blank">Visit</a>
        </div>
      </div>
      <ImageSlider images={IMAGES} />

      <div className="project-content">
        <div className="project-name">
          <h1>Project Name</h1>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestias ullam dolores sunt explicabo labore aspernatur quam ipsa consequatur doloribus omnis vitae veritatis, beatae fugiat autem vel est enim ratione.</p>
        </div>
        <div className="used">
          <div className="used-title">
            <h1>Tech Used</h1>
          </div>
          <p className='tech'>html</p>
          <p className='tech'>css/less</p>
          <p className='tech'>JS</p>
          <p className='tech'>ReactJS</p>
          <p className='tech'>Photoshop</p>
        </div>
        <div className="meta">
          <div className="meta-title">
            <h1>Links</h1>
          </div>
          <div className="links">
            <a className="link" href='/' target="_blank">Checkout Website</a>
          </div>
        </div>
      </div>
    </div>
  )
}

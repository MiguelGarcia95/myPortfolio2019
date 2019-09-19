import React from 'react'
import './styles/style.css';

export default function ProjectDisplay({project}) {
  return (
    <div className='section project-display startPos'>
      <div className="project-images">
        <div className="project-image first-image">
          <img src="https://gameranx.com/wp-content/uploads/2016/09/Nier-Automata-1080P-Wallpaper-1.jpg" alt=""/>
        </div>
        <div className="project-image second-image">
          <img src="https://i.redd.it/1dbjwhvpoia11.jpg" alt=""/>
        </div>
        <div className="project-image third-image">
          <img src="https://i.pinimg.com/736x/bf/b4/ec/bfb4ec55cd5f515f267b918b36b18b47.jpg" alt=""/>
        </div>
        <div className="project-image fourth-image">
          <img src="https://www.pcgamesn.com/wp-content/uploads/2018/08/Cyberpunk-2077-screenshot1.jpg" alt=""/>
        </div>
      </div>
      <div className="project-content">
        <div className="project-name">
          <h1>Project Name</h1>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum molestias ullam dolores sunt explicabo labore aspernatur quam ipsa consequatur doloribus omnis vitae veritatis, beatae fugiat autem vel est enim ratione.</p>
        </div>
        <div className="used">
          <p className='tech'></p>
        </div>
      </div>
      {project}
    </div>
  )
}

import React from 'react';
import Project from '../Project';
import './styles/style.css';

import projectData from '../../projectData';

export default function Projects({onProjectClick}) {
  return (
    <div className="section projects">
      <div className="row">
        <Project 
          classes='project pf flex-1' 
          project={projectData[0]}
          onProjectClick={onProjectClick}
        />
        {/* <Project 
          classes='project flex-1' 
          img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project pl flex-2' 
          img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
          title='Title Here'
          onProjectClick={onProjectClick}
        /> */}
      </div>
      {/* <div className="row">
        <Project 
          classes='project pf flex-3' 
          img='https://proxer.me/media/kunena/attachments/77388/BlueArt.jpg' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project pl flex-1' 
          img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
      </div>
      <div className="row">
        <Project 
          classes='project pf flex-1' 
          img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project flex-1' 
          img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
        <Project 
          classes='project pl flex-1' 
          img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
          title='Title Here'
          onProjectClick={onProjectClick}
        />
      </div> */}
    </div>
  )
}

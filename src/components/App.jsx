import React from 'react';
import Sidebar from './Sidebar';
import Project from './Project';
import Skill from './Skill';
import './styles/style.css';

function App() {
  return (
    <div className="body-wrapper">
      <Sidebar />

      <div className="content">
        <div className="section projects">
          <div className="row">
            <Project 
              classes='project pf flex-1' 
              img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
              title='Title Here'
            />
            <Project 
              classes='project flex-1' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
            <Project 
              classes='project pl flex-2' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
          </div>
          <div className="row">
            <Project 
              classes='project pf flex-3' 
              img='https://proxer.me/media/kunena/attachments/77388/BlueArt.jpg' 
              title='Title Here'
            />
            <Project 
              classes='project pl flex-1' 
              img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
              title='Title Here'
            />
          </div>
          <div className="row">
            <Project 
              classes='project pf flex-1' 
              img='https://www.cssauthor.com/wp-content/uploads/2014/08/Boarding-pass-app-ui-psd.jpg' 
              title='Title Here'
            />
            <Project 
              classes='project flex-1' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
            <Project 
              classes='project pl flex-1' 
              img='https://appsamurai.com/wp-content/uploads/2017/08/2-2.png' 
              title='Title Here'
            />
          </div>
        </div>
        <div className="section skills">
          <div className="skill-row">
            <Skill name='html' icon='' />
            <Skill name='css' icon='' />
            <Skill name='less' icon='' />
            <Skill name='sass' icon='' />
            <Skill name='JS' icon='' />
            <Skill name='React' icon='' />
            <Skill name='Redux' icon='' />
            <Skill name='jQuery' icon='' />
            <Skill name='Animation - gsap/scrollmagic' icon='' />
            <Skill name='php' icon='' />
            <Skill name='laravel' icon='' />
            <Skill name='wordpress' icon='' />
            <Skill name='nodejs' icon='' />
            <Skill name='mysql' icon='' />
            <Skill name='nosql' icon='' />
          </div>
        </div>
        <div className="section about">
          <div className="about">
            <div className="about-decal"></div>
            <div className="about-content"></div>
          </div>
        </div>
        <div className="section contact">
          <div className="contact-title"></div>
          <div className="contact-text"></div>
        </div>
      </div>
    </div>
  );
}

export default App;


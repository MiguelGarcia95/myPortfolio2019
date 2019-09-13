import React from 'react';
import Sidebar from './Sidebar';
import Project from './Project';
import Skill from './Skill';
import './styles/style.css';

const ICON_PATH = './assets/icons';

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
            <div className="skill-column"></div>
            <Skill name='html' icon={`${ICON_PATH}/html.png`} />
            <Skill name='css' icon={`${ICON_PATH}/css.png`} />
            <Skill name='less' icon={`${ICON_PATH}/less.png`} />
            <Skill name='sass' icon={`${ICON_PATH}/sass.png`} />
            <Skill name='JS' icon={`${ICON_PATH}/js.png`} />
            <Skill name='React' icon={`${ICON_PATH}/react.png`} />
            <Skill name='Redux' icon={`${ICON_PATH}/redux.png`} />
            <Skill name='jQuery' icon={`${ICON_PATH}/jquery.png`} />
            {/* <Skill name='Animation - gsap/scrollmagic' icon={`${ICON_PATH}/css.png`} /> */}
            <Skill name='php' icon={`${ICON_PATH}/php.png`} />
            <Skill name='laravel' icon={`${ICON_PATH}/laravel.png`} />
            <Skill name='wordpress' icon={`${ICON_PATH}/wordpress.png`} />
            <Skill name='nodejs' icon={`${ICON_PATH}/nodejs.png`} />
            <Skill name='mysql' icon={`${ICON_PATH}/mysql.png`} />
            <Skill name='mongodb' icon={`${ICON_PATH}/mongodb.png`} />
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


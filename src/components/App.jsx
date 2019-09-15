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
          <div className="section-name"><h1>Projects</h1></div>
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
          <div className="section-name"><h1>Skills</h1></div>
          <div className="skill-row">
            <div className="skill-column">
              <h1 className='column-title'>Front End</h1>
              <Skill name='html' icon={`${ICON_PATH}/html.png`} />
              <Skill name='css' icon={`${ICON_PATH}/css.png`} />
              <Skill name='less' icon={`${ICON_PATH}/less.png`} />
              <Skill name='sass' icon={`${ICON_PATH}/sass.png`} />
              <Skill name='JS' icon={`${ICON_PATH}/js.png`} />
              <Skill name='jQuery' icon={`${ICON_PATH}/jquery.png`} />
              <Skill name='React' icon={`${ICON_PATH}/react.png`} />
              <Skill name='Redux' icon={`${ICON_PATH}/redux.png`} />
            </div>
            <div className="skill-column">
              <h1 className='column-title'>Back End</h1>
              <Skill name='php' icon={`${ICON_PATH}/php.png`} />
              <Skill name='laravel' icon={`${ICON_PATH}/laravel.png`} />
              <Skill name='wordpress' icon={`${ICON_PATH}/wordpress.png`} />
              <Skill name='nodejs' icon={`${ICON_PATH}/nodejs.png`} />
              <Skill name='mysql' icon={`${ICON_PATH}/mysql.png`} />
              <Skill name='mongodb' icon={`${ICON_PATH}/mongodb.png`} />
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-column full">
              <h1 className='column-title'>Currently Learning</h1>        
              <Skill name='C#' icon={`${ICON_PATH}/csharp.png`} />
              <Skill name='React Native' icon={`${ICON_PATH}/react-native.png`} />
              <Skill name='.NET' icon={`${ICON_PATH}/aspnet.png`} />
              <Skill name='WordPress theme development' classes='lg' icon={`${ICON_PATH}/wordpress.png`} />
            </div>
          </div>
        </div>
        <div className="section about">
          <div className="section-name"><h1>About</h1></div>
          <div className="about-content">
            <div className="about-decal"></div>
            <p className='about-text about-name'>Miguel Garcia</p>
            <p className='about-text'>Have worked with React w/ Redux, Firebase, NodeJS, Laravel, WordPress, and CSS Pre-Processors.</p>
            <p className='about-text'>Also have some working knowledge of Photoshop, and Illustrator.</p>
            <p className='about-text about-extra'>I also have an interest in character design, story telling and game design/development. </p>
          </div>
        </div>
        <div className="section contact">
          <div className="section-name"><h1>Contact</h1></div>
          <div className="contact-info">
            <div className="contact-text"></div>
          </div>
          <div className="contact-form">
            <div className="contact-title">Contact Me</div>
            <form>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Subject'/>
              <input type="text" placeholder='Email'/>
              <textarea placeholder="What's up?"></textarea>
              <button>Send</button>
            </form>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;


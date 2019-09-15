import React from 'react';
import Sidebar from './Sidebar';
import Project from './Project';
import Skill from './Skill';
import './styles/style.css';

class App extends React.Component {
  state = {
    currentSection: 'projects',
    iconPath: './assets/icons',
  }

  setSection = sectionName => this.setState({currentSection: sectionName});

  isSectionActive = (currentSection, sectionName) => {
    return currentSection === sectionName;
  }

  sectionEnters = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 0, autoAlpha: 0, left: '100%'},  {left: 0, autoAlpha: 1, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)})
  }

  sectionLeaves = sectionName => {
    
  }

  render() {
    const {currentSection, iconPath} = this.state;
    return (
      <div className="body-wrapper">
        <Sidebar currentSection={currentSection} setSection={this.setSection} sectionEnters={this.sectionEnters} />
  
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
          
          <div className="section skills startPos">
            <div className="skill-row">
              <div className="skill-column">
                <h1 className='column-title'>Front End</h1>
                <Skill name='html' icon={`${iconPath}/html.png`} />
                <Skill name='css' icon={`${iconPath}/css.png`} />
                <Skill name='less' icon={`${iconPath}/less.png`} />
                <Skill name='sass' icon={`${iconPath}/sass.png`} />
                <Skill name='JS' icon={`${iconPath}/js.png`} />
                <Skill name='jQuery' icon={`${iconPath}/jquery.png`} />
                <Skill name='React' icon={`${iconPath}/react.png`} />
                <Skill name='Redux' icon={`${iconPath}/redux.png`} />
              </div>
              <div className="skill-column">
                <h1 className='column-title'>Back End</h1>
                <Skill name='php' icon={`${iconPath}/php.png`} />
                <Skill name='laravel' icon={`${iconPath}/laravel.png`} />
                <Skill name='wordpress' icon={`${iconPath}/wordpress.png`} />
                <Skill name='nodejs' icon={`${iconPath}/nodejs.png`} />
                <Skill name='mysql' icon={`${iconPath}/mysql.png`} />
                <Skill name='mongodb' icon={`${iconPath}/mongodb.png`} />
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-column full">
                <h1 className='column-title'>Currently Learning</h1>        
                <Skill name='C#' icon={`${iconPath}/csharp.png`} />
                <Skill name='React Native' icon={`${iconPath}/react-native.png`} />
                <Skill name='.NET' icon={`${iconPath}/aspnet.png`} />
                <Skill name='WordPress theme development' classes='lg' icon={`${iconPath}/wordpress.png`} />
              </div>
            </div>
          </div> 
  
          <div className="section about startPos">
            <div className="about-content">
              <div className="about-decal"></div>
              <p className='about-text about-name'>Miguel Garcia</p>
              <p className='about-text'>Have worked with React w/ Redux, Firebase, NodeJS, Laravel, WordPress, and CSS Pre-Processors.</p>
              <p className='about-text'>Also have some working knowledge of Photoshop, and Illustrator.</p>
              <p className='about-text about-extra'>I also have an interest in character design, story telling and game design/development. </p>
            </div>
          </div>
  
          <div className="section contact startPos">
            <div className="contact-info">
              <div className="contact-text">
                <h2>Want to talk?</h2>
                <p>Shoot me a message here, or email me directly.</p>
              </div>
              <div className="contact-method">
                <div className="method">
                  <a href="mailto:miguel@miguelgarcia.co">miguel@miguelgarcia.co</a>
                </div>
                <div className="method">
                  <a href="https://github.com/MiguelGarcia95" target="_blank">github</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-form-ws"></div>
              <div className="contact-title">Contact Me</div>
              <form>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Subject'/>
                <input type="text" placeholder='Email'/>
                <textarea placeholder="What's up?"></textarea>
                <button>Send</button>
              </form>
              <div className="contact-form-ws"></div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;


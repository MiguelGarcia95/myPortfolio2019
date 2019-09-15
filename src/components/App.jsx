import React from 'react';
import Sidebar from './Sidebar';
import Projects from './Projects';
import Skill from './Skill';
import './styles/style.css';
import {EMAILJSUSER} from '../keys';

const emailjs = window.emailjs;

class App extends React.Component {
  state = {
    currentSection: 'projects',
    iconPath: './assets/icons',
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
    messageSent: '',
  }

  componentDidMount() {
    emailjs.init(EMAILJSUSER);
  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value,
    [`${e.target.name}Error`]: ''
  });

  validateForm = () => {
    let errors = [];
    if (!this.state.email) {
      errors.push({})
      this.setState({emailError: 'Enter an Email'});
    }
    if (!this.state.name) {
      errors.push({})
      this.setState({nameError: 'Enter an Name'});
    }
    if (!this.state.subject) {
      errors.push({})
      this.setState({subjectError: 'Enter an Subject'});
    }
    if (!this.state.message) {
      errors.push({})
      this.setState({messageError: 'Enter an Message'});
    }
    return errors.length > 0 ? false : true;
  }

  sendEmail = e => {
    e.preventDefault();

    if (this.validateForm()) {
      let senderName = this.state.name;

      let emailParams = {
        from_name: `${senderName} (${this.state.email})`,
        to_name: 'miguel@miguel-garcia.co',
        subject: this.state.subject,
        message_html: this.state.message
      }
      
      emailjs.send('sendgrid', 'template_MqjTWjc0', emailParams, EMAILJSUSER).then(() => {
        this.setState({messageSent: `Message sent`});
      }).catch(e => console.log(e))

      this.clearForm();
    }
  }

  clearForm = () => {
    this.setState({
    name: '', email: '', subject: '', message: '', errors: []
    })

    setInterval(() => {
      this.setState({messageSent: ''});
    }, 5000);
  }; 

  setSection = sectionName => this.setState({currentSection: sectionName});

  isSectionActive = (currentSection, sectionName) => {
    return currentSection === sectionName;
  }

  sectionEnters = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 0, autoAlpha: 0, left: '100%'},  {left: 0, autoAlpha: 1, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)})
  }

  sectionLeaves = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)})
  }

  render() {
    const {currentSection, iconPath} = this.state;
    const {nameError, emailError, subjectError, messageError, messageSent} = this.state;

    return (
      <div className="body-wrapper">
        <Sidebar currentSection={currentSection} setSection={this.setSection} sectionEnters={this.sectionEnters} sectionLeaves={this.sectionLeaves} />
  
        <div className="content">
          <Projects />
          
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


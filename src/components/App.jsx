import React from 'react';
import Sidebar from './Sidebar';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './styles/style.css';
import {EMAILJSUSER} from '../keys';

const emailjs = window.emailjs;

class App extends React.Component {
  state = {
    currentSection: 'projects',
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
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;


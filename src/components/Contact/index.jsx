import React from 'react';
import SectionTitle from '../SectionTitle';
import {EMAILJSUSER} from '../../keys';

const emailjs = window.emailjs;

class Contact extends React.Component {
  state = {
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

  render() {
    const {name, email, subject, message, nameError, emailError, subjectError, messageError, messageSent, opened} = this.state;

    return (
      <div className='section contact' id='contact'>
        <div className="page-container">
          <div className="content">
            <SectionTitle title='Contact' float='left' />
  
            <div className="form">
  
            </div>
          </div>        
        </div>
      </div>
    )
  }
}

export default Contact
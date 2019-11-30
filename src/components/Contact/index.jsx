import React from 'react';
import SectionTitle from '../SectionTitle';
import {EMAILJSUSER} from '../../keys';
import './styles/css/style.min.css';

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
  
            <div className='contact-form'>
              {messageSent && <div className="contact-message"><p>{messageSent}</p></div> }
              <div className="contact-title">Contact Me</div>
              <form onSubmit={this.sendEmail} >
                <input type="text" placeholder='Name' name='name' value={name} onChange={this.onChange} className={nameError ? 'error' : ''} />
                <input type="text" placeholder='Subject' name='subject' value={subject} onChange={this.onChange} className={subjectError ? 'error' : ''} />
                <input type="email" placeholder='Email' name='email' value={email} onChange={this.onChange} className={emailError ? 'error' : ''} />
                <textarea placeholder="What's up?" name='message' value={message} onChange={this.onChange} className={messageError ? 'error' : ''} ></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>        
        </div>
      </div>
    )
  }
}

export default Contact;

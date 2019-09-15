import React from 'react';
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
    const {nameError, emailError, subjectError, messageError, messageSent} = this.state;
    const {} = this.props;
    return (
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
    )
  }
}

export default Contact;
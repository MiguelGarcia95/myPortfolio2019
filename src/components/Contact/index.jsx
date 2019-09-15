import React from 'react';

export default function Contact() {
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
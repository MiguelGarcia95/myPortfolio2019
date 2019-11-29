import React from 'react';
import SectionTitle from '../SectionTitle';
import './styles/css/style.min.css';

const ICON_PATH = './assets/icons';

function Skills({scrollTo}) {
  return (
    <div className='section skills' id='skills'>
      <div className="page-container">
        <div className="content">
          <SectionTitle title='Skills' float='right' />
          <div className="description">
            <p>I'm skilled in both Front End & Back End development</p>
            <p>HTML, CSS, JS, ReactJS, ReduxJS for Front End websites and applications.</p>
            <p>NodeJS, Express, PHP, Laravel, MongoDB, MySQL for the Back End</p>
            <p>
              Visit my <a className='link' href="https://github.com/MiguelGarcia95" target='_blank'>Github</a> or <span onClick={() => scrollTo('#contact')} className='link' >Contact</span> me.
            </p>
          </div>
          <div className="skills-container">
            <div className="skill">
              <div className="skill-icon">
                <img src={`${ICON_PATH}/html.png`} alt='html'/>
              </div>
              <div className="skill-name">
                <p>HTML</p>
              </div>
            </div>
          </div> 
        </div>       
      </div>
    </div>
  )
}

export default Skills
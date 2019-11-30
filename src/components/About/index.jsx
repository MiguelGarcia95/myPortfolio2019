import React from 'react';
import SectionTitle from '../SectionTitle';
import './styles/css/style.min.css';

// const ICON_PATH = './assets/icons';

function About({scrollTo}) {
  return (
    <div className='section about' id='about'>
      <div className="page-container">
        <div className="content">
          <SectionTitle title='About' float='right' />
          <div className="description">
            <p>I have worked with both the Front End & Back End development</p>

            <p>HTML, CSS, JS, ReactJS, ReduxJS for Front End websites and applications.</p>
            <p>NodeJS, Express, PHP, Laravel, MongoDB, MySQL for the Back End</p>

            <p>Also have some working knowledge of Photoshop, and Illustrator.</p>
            <p>I also have an interest in character design, story telling and game design/development.</p>

            <p>
              Visit my <a className='link' href="https://github.com/MiguelGarcia95" target='_blank'>Github</a> or <span onClick={() => scrollTo('#contact')} className='link' >Contact</span> me.
            </p>
          </div>
        </div>       
      </div>
    </div>
  )
}

export default About;
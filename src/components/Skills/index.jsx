import React from 'react';
import SectionTitle from '../SectionTitle';

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
              Visit my <a className='link' href="https://github.com/MiguelGarcia95" target='_blank'>Github</a> 
              or <p onClick={() => scrollTo('#contact')} className='link' >Contact</p> me.
            </p>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Skills
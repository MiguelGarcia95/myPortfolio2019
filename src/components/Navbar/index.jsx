import React from 'react';
import './styles/css/style.min.css';

function Navbar({scrollTo, opened, toggle}) {
  return (
    <div className='navbar'>
      <div className="page-container">
        <div className="branding">
          <p className="title">Miguel Garcia</p>
          <p className="subtitle">Web Developer</p>
        </div>
        <div className="menu">
          <div className="menu-ham" onClick={toggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`menu-list ${opened && 'opened'}`}>
            <p className="item">Projects</p> 
            <p className="item">Skills</p>        
            <p className="item">About</p>        
            <p className="item">Contact</p>        
          </div>
          <p className="menu-item">Contact</p>        
          <p className="menu-item">About</p>        
          <p className="menu-item">Skills</p>        
          <p className="menu-item">Projects</p>        
        </div>
      </div>
    </div>
  )
}

export default Navbar;
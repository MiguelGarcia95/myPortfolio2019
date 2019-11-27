import React from 'react';
import './styles/css/style.min.css';

function Navbar({scrollTo}) {
  return (
    <div className='navbar'>
      <div className="page-container">
        <div className="branding">
          <p className="title">Miguel Garcia</p>
          <p className="subtitle">Web Developer</p>
        </div>
        <div className="menu">
          <p className="menu-item">Projects</p>        
          <p className="menu-item">Skills</p>        
          <p className="menu-item">About</p>        
          <p className="menu-item">Contact</p>        
        </div>
      </div>
    </div>
  )
}

export default Navbar;
import React from 'react';
import './styles/css/style.min.css';

function Navbar({scrollTo, opened}) {
  return (
    <div className='navbar'>
      <div className="page-container">
        <div className="branding">
          <p className="title">Miguel Garcia</p>
          <p className="subtitle">Web Developer</p>
        </div>
        <div className={`menu ${!opened && 'closed'}`}>
          {/* {!opened && (

          )} */}
          <div className="menu-ham">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
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
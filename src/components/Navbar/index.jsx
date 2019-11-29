import React from 'react';
import './styles/css/style.min.css';

function Navbar({scrollTo, opened, toggle}) {
  const onNavClick = sectionId => {
    toggle();
    scrollTo(sectionId);
  }
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
            <p className="item" onClick={() => onNavClick('#projects')} >Projects</p> 
            <p className="item" onClick={() => onNavClick('#skills')} >Skills</p>        
            <p className="item" onClick={() => onNavClick('#about')} >About</p>        
            <p className="item" onClick={() => onNavClick('#contact')} >Contact</p>        
          </div>
          <p className="menu-item" onClick={() => scrollTo('#contact')} >Contact</p>        
          <p className="menu-item" onClick={() => scrollTo('#about')} >About</p>        
          <p className="menu-item" onClick={() => scrollTo('#skills')} >Skills</p>        
          <p className="menu-item" onClick={() => scrollTo('#projects')} >Projects</p>        
        </div>
      </div>
    </div>
  )
}

export default Navbar;
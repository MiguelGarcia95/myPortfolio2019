import React from 'react'
import './styles/style.css';

const isActive = (currentSection, sectionName) => {
  return currentSection === sectionName;
}

const onNavClick = (setSection, sectionName, sectionEnters) => {
  setSection(sectionName);
  sectionEnters(sectionName);
}

export default function Sidebar({currentSection, setSection, sectionEnters}) {
  return (
    <React.Fragment>
      <header className="sidebar">
        <nav>
          <p 
            className={isActive(currentSection, 'projects') ? 'active' : ''} 
            onClick={() => {onNavClick(setSection, 'projects', sectionEnters)}} 
          >
            Projects
          </p>
          <p 
            className={isActive(currentSection, 'skills') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'skills', sectionEnters)} 
          >
            Skills
          </p>
          <p 
            className={isActive(currentSection, 'about') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'about', sectionEnters)} 
          >
            About
          </p>
          <p 
            className={isActive(currentSection, 'contact') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'contact', sectionEnters)} 
          >
            Contact
          </p>
        </nav>
        <div className="name">
          <h1>Miguel Garcia</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
      <div className="nav-name">
        {/* <h1>Projects</h1> */}
      </div>
    </React.Fragment>
  )
}

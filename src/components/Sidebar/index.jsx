import React from 'react'
import './styles/style.css';

const isActive = (currentSection, sectionName) => {
  return currentSection === sectionName;
}

const onNavClick = (setSection, sectionName, sectionEnters, sectionLeaves, currentSection) => {
  setSection(sectionName);
  sectionLeaves(currentSection);
  sectionEnters(sectionName);
}

export default function Sidebar({currentSection, setSection, sectionEnters, sectionLeaves}) {
  return (
    <React.Fragment>
      <header className="sidebar">
        <nav>
          <p 
            className={isActive(currentSection, 'projects') ? 'active' : ''} 
            onClick={() => {onNavClick(setSection, 'projects', sectionEnters, sectionLeaves, currentSection)}} 
          >
            Projects
          </p>
          <p 
            className={isActive(currentSection, 'skills') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'skills', sectionEnters, sectionLeaves, currentSection)} 
          >
            Skills
          </p>
          <p 
            className={isActive(currentSection, 'about') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'about', sectionEnters, sectionLeaves, currentSection)} 
          >
            About
          </p>
          <p 
            className={isActive(currentSection, 'contact') ? 'active' : ''} 
            onClick={() => onNavClick(setSection, 'contact', sectionEnters, sectionLeaves, currentSection)} 
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

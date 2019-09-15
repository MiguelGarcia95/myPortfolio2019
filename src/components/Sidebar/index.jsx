import React from 'react'
import './styles/style.css';

const isActive = (currentSection, sectionName) => {
  return currentSection === sectionName;
}

export default function Sidebar({currentSection, setSection}) {
  return (
    <React.Fragment>
      <header className="sidebar">
        <nav>
          <p 
            className={isActive(currentSection, 'projects') ? 'active' : ''} 
            onClick={() => {setSection('projects')}} 
          >
            Projects
          </p>
          <p 
            className={isActive(currentSection, 'skills') ? 'active' : ''} 
            onClick={() => setSection('skills')} 
          >
            Skills
          </p>
          <p 
            className={isActive(currentSection, 'about') ? 'active' : ''} 
            onClick={() => setSection('about')} 
          >
            About
          </p>
          <p 
            className={isActive(currentSection, 'contact') ? 'active' : ''} 
            onClick={() => setSection('contact')} 
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

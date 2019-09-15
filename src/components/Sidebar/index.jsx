import React from 'react'
import './styles/style.css';

const isActive = (currentSection, sectionName) => {
  return currentSection === sectionName;
}

export default function Sidebar({currentSection}) {
  return (
    <React.Fragment>
      <header className="sidebar">
        <nav>
          <p className={isActive(currentSection, 'projects') ? 'active' : ''} >Projects</p>
          <p className={isActive(currentSection, 'skills') ? 'active' : ''} >Skills</p>
          <p className={isActive(currentSection, 'about') ? 'active' : ''} >About</p>
          <p className={isActive(currentSection, 'contact') ? 'active' : ''} >Contact</p>
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

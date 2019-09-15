import React from 'react'
import './styles/style.css';

class Sidebar extends React.Component {

  isActive = (currentSection, sectionName) => currentSection === sectionName;

  onNavClick = (sectionName, currentSection) => {
    const {setSection, sectionEnters, sectionLeaves, projectModal, onProjectClick} = this.props;
    setSection(sectionName);
    if (projectModal) {
      sectionLeaves('project-display');
      onProjectClick('');
    } else {
      sectionLeaves(currentSection);
    }
    sectionEnters(sectionName);
  }

  render() {
    const {currentSection} = this.props;
    return (
      <React.Fragment>
        <header className="sidebar">
          <nav>
            <p 
              className={this.isActive(currentSection, 'projects') ? 'active' : ''} 
              onClick={() => this.onNavClick('projects', currentSection)}
            >
              Projects
            </p>
            <p 
              className={this.isActive(currentSection, 'skills') ? 'active' : ''} 
              onClick={() => this.onNavClick('skills', currentSection)} 
            >
              Skills
            </p>
            <p 
              className={this.isActive(currentSection, 'about') ? 'active' : ''} 
              onClick={() => this.onNavClick('about', currentSection)} 
            >
              About
            </p>
            <p 
              className={this.isActive(currentSection, 'contact') ? 'active' : ''} 
              onClick={() => this.onNavClick('contact', currentSection)} 
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
}


export default Sidebar;
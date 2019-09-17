import React from 'react'
import './styles/style.css';

class Sidebar extends React.Component {
  state = {
    opened: false
  }

  isActive = (currentSection, sectionName) => currentSection === sectionName;

  onNavToggle = () => this.setState({opened: !this.state.opened});

  onNavClick = (sectionName, currentSection) => {
    const {setSection, sectionEnters, sectionLeaves, projectModal, onProjectClick} = this.props;
    if (sectionName !== currentSection) {
      setSection(sectionName);
      if (projectModal) {
        sectionLeaves('project-display');
        onProjectClick('');
      } else {
        sectionLeaves(currentSection);
      }
      sectionEnters(sectionName);
    }
  }

  render() {
    const {currentSection} = this.props;
    const {opened} = this.state;
    return (
      <header className={`sidebar ${opened ? 'opened' : ''}`}>
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
        <div className="mobile-name">
          <h1>M</h1>
        </div>
        <div className={`mobile-toggle ${opened ? 'opened' : ''}`} onClick={this.onNavToggle}>
          <div className="bar bar_01"></div>
          <div className="bar bar_02"></div>
          <div className="bar bar_03"></div>
        </div>
        <div className="name">
          <h1>Miguel Garcia</h1>
          <h2>Web Developer</h2>
        </div>
      </header>
    )
  }
}


export default Sidebar;
import React from 'react';
import Sidebar from './Sidebar';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './styles/style.css';


class App extends React.Component {
  state = {
    currentSection: 'projects'
  }

  setSection = sectionName => this.setState({currentSection: sectionName});

  isSectionActive = (currentSection, sectionName) => {
    return currentSection === sectionName;
  }

  sectionEnters = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 0, autoAlpha: 0, left: '100%'},  {left: 0, autoAlpha: 1, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)})
  }

  sectionLeaves = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)})
  }

  render() {
    const {currentSection} = this.state;

    return (
      <div className="body-wrapper">
        <Sidebar currentSection={currentSection} setSection={this.setSection} sectionEnters={this.sectionEnters} sectionLeaves={this.sectionLeaves} />
  
        <div className="content">
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;


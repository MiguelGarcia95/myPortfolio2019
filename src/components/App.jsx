import React from 'react';
import Sidebar from './Sidebar';
import Projects from './Projects';
import ProjectDisplay from './ProjectDisplay';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './styles/style.css';

class App extends React.Component {
  state = {
    currentSection: 'projects',
    projectModal: false,
    project: ''
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.scrollToTop();
  }

  setSection = sectionName => this.setState({currentSection: sectionName});

  isSectionActive = (currentSection, sectionName) => currentSection === sectionName;

  onProjectClick = project => {
    if (!this.state.projectModal) {
      this.sectionEnters('project-display');
      this.sectionLeaves('projects');
    }
    this.setState({
      project: project,
      projectModal: !this.state.projectModal
    });
  }

  // Replace ease
  sectionEnters = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 1, {scale: 0, autoAlpha: 0, left: '100%'},  {left: 0, autoAlpha: 1, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)}, '+=0.3')
  }

  sectionLeaves = sectionName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${sectionName}`, 2, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 2, ease: window.Elastic.easeInOut.config(1, 0.3)})
    tl.to(`.${sectionName}`, 0, {scale: 1})
  }

  scrollToTop = () => {
    window.TweenMax.to(window, 0.5, {scrollTo:{y:'#scrollToTop'}})
  }

  render() {
    const {currentSection, projectModal, project} = this.state;
    return (
      <div className="body-wrapper">
        {/* <Sidebar 
          onProjectClick={this.onProjectClick} 
          currentSection={currentSection} 
          setSection={this.setSection} 
          sectionEnters={this.sectionEnters} 
          sectionLeaves={this.sectionLeaves} 
          projectModal={projectModal} 
        /> */}
  
        <div className="content">
          <div id="scrollToTop"></div>
          {/* <Projects onProjectClick={this.onProjectClick} />
          <ProjectDisplay project={project} sectionLeaves={this.sectionLeaves} sectionEnters={this.sectionEnters}  />
          <Skills />
          <About />
          <Contact /> */}
        </div>
      </div>
    );
  }
}

export default App;


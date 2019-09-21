import React from 'react'
import ImageSlider from '../ImageSlider';
import './styles/style.css';

class ProjectDisplay extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.scrollToTop();
  }

  scrollToTop = () => {
  }

  displayTags = tags => {
    return tags.map(tag => <p className='tech' key={tag}>{tag}</p>)
  }

  onReturnClick = (sectionLeaves, sectionEnters) => {
    sectionLeaves('project-display');
    sectionEnters('projects');
  }

  render() {
    const {project, sectionLeaves, sectionEnters} = this.props;
    return (
      <div className='section project-display startPos'>
        {project && (
          <React.Fragment>
            <div className="header">
              <div className="goback">
                <p onClick={() => this.onReturnClick(sectionLeaves, sectionEnters)}>Return</p>
              </div>
              <div className="go-link">
                <a href={project.url} target="_blank">Visit</a>
              </div>
            </div>
            <ImageSlider images={project.images} imageCount={project.imageCount}/>
  
            <div className="project-content">
              <div className="section-name">
                <h1>{project.name}</h1>
              </div>
              <div className="description">
                <p>{project.description}</p>
              </div>
              <div className="used">
                <div className="section-name">
                  <h1>Tech Used</h1>
                </div>
                {this.displayTags(project.used)}
              </div>
              <div className="meta">
                <div className="section-name">
                  <h1>Links</h1>
                </div>
                <div className="links">
                  <a className="link" href={project.url} target="_blank">Checkout Website</a>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}      
      </div>
    )
  }
}

export default ProjectDisplay;
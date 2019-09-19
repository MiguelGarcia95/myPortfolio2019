import React from 'react'
import './styles/style.css';

class ImageSlider extends React.Component {

  displayImages = images => {
    return images.images.map(image => {
      return (
        <div className={image.class} key={image.id}>
          <img src={image.url} alt={image.id}/>
        </div>
      )
    })
  }

  imageSlideIn = imageName => {
    let tl = new window.TimelineMax();
    // tl.fromTo(`.${sectionName}`, 2, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 2, ease: window.Elastic.easeInOut.config(1, 0.3)})
    // tl.to(`.${sectionName}`, 0, {scale: 1})
  }

  render() {
    return (
      <div className="project-images">
        {this.displayImages(this.props.images)}
      </div>
    )
  }
}

export default ImageSlider; 
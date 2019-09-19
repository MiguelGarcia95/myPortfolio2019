import React from 'react'
import './styles/style.css';

class ImageSlider extends React.Component {

  displayImages = images => {
    return images.images.map((image, i) => {
      return (
        <div className="project-image first-image" key={i}>
          <img src={image} alt={image}/>
        </div>
      )
    })
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
import React from 'react'
import './styles/style.css';

class ImageSlider extends React.Component {

  displayImages = images => {
    return images.images.map(image => {
      return (
        <div className={`project-image ${image.class}`} key={image.id}>
          <div className="slider-controller">
            <div className="slide-left" onClick={() => this.onClickLeft(image.class)} ></div>
            <div className="slide-right" onClick={() => this.onClickRight(image.class)} ></div>
          </div>
          <img src={image.url} alt={image.id}/>
        </div>
      )
    })
  }

  onClickLeft = imageName => {
    console.log('left', this.props.images.imageCount)
  }

  onClickRight = imageName => {
    console.log('right', this.props.images.imageCount)
  }

  imageSlideIn = imageName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${imageName}`, 2, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 2, ease: window.Elastic.easeInOut.config(1, 0.3)})
    tl.to(`.${imageName}`, 0, {scale: 1})
  }

  imageSlideOut = imageName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${imageName}`, 2, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 2, ease: window.Elastic.easeInOut.config(1, 0.3)})
    tl.to(`.${imageName}`, 0, {scale: 1})
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
import React from 'react'
import './styles/style.css';

class ImageSlider extends React.Component {

  displayImages = images => {
    return images.images.map(image => {
      return (
        <div className={`project-image ${image.class}`} key={image.id}>
          <div className="slider-controller">
            <div className="slide-left" onClick={() => this.onClickLeft(image, images)} ></div>
            <div className="slide-right" onClick={() => this.onClickRight(image, images)} ></div>
          </div>
          <img src={image.url} alt={image.id}/>
        </div>
      )
    })
  }

  onClickLeft = (image, images) => {
    if (image.id === 1) {
      this.imageSlideOut('image-1');
      this.imageSlideIn(`image-${images.imageCount}`);
    } else {
      this.imageSlideOut(`image-${image.id}`);
      this.imageSlideIn(`image-${image.id - 1}`);
    }
  }

  onClickRight = (image, images) => {
    if (image.id === images.imageCount) {
      this.imageSlideOut('image-4');
      this.imageSlideIn(`image-1`);
    } else {
      this.imageSlideOut(`image-${image.id}`);
      this.imageSlideIn(`image-${image.id + 1}`);
    }
  }

  imageSlideIn = imageName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${imageName}`, 1, {scale: 0, autoAlpha: 0, left: '100%'},  {left: 0, autoAlpha: 1, scale: 1, ease: window.Elastic.easeInOut.config(1, 0.3)}, '+=0.3')
  }

  imageSlideOut = imageName => {
    let tl = new window.TimelineMax();
    tl.fromTo(`.${imageName}`, 2, {scale: 1, autoAlpha: 1, left: 0},  {left: '-100%', autoAlpha: 0, scale: 2, ease: window.Elastic.easeInOut.config(1, 0.3)})
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
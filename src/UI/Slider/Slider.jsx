import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Slider.module.css';
import image1 from '../../images/me1.JPG';
import image2 from '../../images/me2.JPG';
import image3 from '../../images/me3.JPG';

const Slider = () => (
  <Carousel
    infiniteLoop
    showArrows
    stopOnHover
    showThumbs={false}
    className={classes.slider}
  >
    <div>
      <img src={image2} alt="myself" />
    </div>
    <div>
      <img src={image1} alt="myself" />
    </div>
    <div>
      <img src={image3} alt="myself" />
    </div>
  </Carousel>
);

export default Slider;

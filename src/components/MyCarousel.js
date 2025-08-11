import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel_css.css';

export default function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
    <Slider {...settings}>
      <div>
        <img src="/example-docs/graph-1.png" alt="Image 1" style={{ width: '500px', display: 'block' }}/>
      </div>
      <div>
        <img src="/example-docs/graph-2.png" alt="Image 2" style={{ width: '500px', display: 'block' }}/>
      </div>
      <div>
        <img src="/example-docs/graph-3.png" alt="Image 3" style={{ width: '500px', display: 'block' }}/>
      </div>
    </Slider>
    </div>
  );
}

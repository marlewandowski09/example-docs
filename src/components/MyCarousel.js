import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/img/example-docs/graph-1.png" alt="Image 1" />
      </div>
      <div>
        <img src="/img/example-docs/graph-2.png" alt="Image 2" />
      </div>
      <div>
        <img src="/img/example-docs/graph-3.png" alt="Image 3" />
      </div>
    </Slider>
  );
}

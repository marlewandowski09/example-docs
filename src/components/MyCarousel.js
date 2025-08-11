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
      <div class="tile">
        <img src="/example-docs/graph-5.png" alt="Table" style={{ width: '500px'}}/>
        <p>Table:  Presents data in rows and columns.</p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-2.png" alt="Image 2" style={{ width: '500px'}}/>
        <p>Line chart: Displays information as connected data points, useful for showing trends over time  </p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-3.png" alt="Image 3" style={{ width: '500px'}}/>
        <p>Bar chart: Shows numerical values by the height or length of rectangles</p>
      </div>
       <div class="tile">
        <img src="/example-docs/graph-4.png" alt="Image 3" style={{ width: '500px'}}/>
        <p>Stacked bar chart: Extends the standard bar chart by dividing bars into multiple segments, representing different subcategories</p>
      </div>
       <div class="tile">
        <img src="/example-docs/graph-4.png" alt="Image 3" style={{ width: '500px'}}/>
        <p>Pie chart: Represents proportional values as slices of a circle, useful for percentage comparisons</p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-4.png" alt="Image 3" style={{ width: '500px'}}/>
        <p>Scatter plot: Plots values along two axes, useful for checking if any correlation is present</p>
      </div>
    </Slider>
    </div>
  );
}

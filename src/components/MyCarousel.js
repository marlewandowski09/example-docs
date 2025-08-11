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
      <div class="tile desc">
        <img src="/example-docs/graph-5.png" alt="Table" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Table</span>: Presents data in rows and columns.</p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-6.png" alt="Line Chart" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Line chart</span>: Displays connected data points to show trends over time.</p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-29.png" alt="Bar Chart" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Bar (column) chart</span>: Compares numerical values using the height of rectangles.</p>
      </div>
       <div class="tile">
        <img src="/example-docs/graph-15.png" alt="Stacked Bar Chart" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Stacked bar chart</span>: Extends the standard bar chart by dividing bars into multiple segments to show subcategories.</p>
      </div>
       <div class="tile">
        <img src="/example-docs/graph-18.png" alt="Pie Chart" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Pie chart</span>: Represents proportional values as slices of a circle for percentage comparisons.</p>
      </div>
      <div class="tile">
        <img src="/example-docs/graph-20.png" alt="Area chart" style={{ width: '500px'}}/>
        <p class ="desc"><span class ="emp">Area chart</span>: Displays trends over time similarly to a line chart but with the area below the line and the x-axis colored for emphasis.</p>
      </div>
    </Slider>
    </div>
  );
}

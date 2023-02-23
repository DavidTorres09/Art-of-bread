import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="carrusel">
      <Slider {...settings}>
        <div>
          <img src="https://m.media-amazon.com/images/I/51-UIB1dD9L._AC_UF350,350_QL50_.jpg" alt="slide1" />
        </div>
        <div>
          <img src="https://sbcc.augusoft.net/customers/sbcc/images/classes/class_24686.jpg" alt="slide2" />
        </div>
        <div>
          <img src="https://www.paliospizzacafe.com/wp-content/uploads/2017/05/app-cheese-bread61-350x150.jpg" alt="slide3" />
        </div>
        <div>
          <img src="https://www.paliospizzacafe.com/wp-content/uploads/2017/06/Cheese-Bread-350x150.jpg" alt="slide4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

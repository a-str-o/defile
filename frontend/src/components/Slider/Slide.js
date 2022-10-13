import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import './Slide.css'

 function Slide({ products }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {products.map((url, index) => {   
    return (
        <div className="card"key={products[index]._id}>
             <div className="card-item" >
                <img src={products[index].images[0].url} alt="product.name" className="image-carousel" />
                  <center>
                    <Link to={`/product/${products[index]._id}`}>
                      <div className="header-item">{products[index].name} </div>
                    </Link>
                    <div className="meta-item">{products[index].description}</div>
                  </center>
              </div> 
              
          </div>
          )})}
    </Slider>
  );
}
export default Slide;
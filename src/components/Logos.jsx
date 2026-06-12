import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
];

const Logos = () => {
  const settings = {
    infinite: true, 
    speed: 1000, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed:20, 
    pauseOnHover: true, 
    cssEase: "ease-in-out", 
    arrows: false, 
    draggable: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480, 
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="flex justify-center items-center px-4">
            <img
              src={logo}
              className="h-24 object-contain  transition-all duration-300"
              alt="logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logos;

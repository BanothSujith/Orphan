import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "https://www.vhv.rs/dpng/d/437-4379409_donate-charity-png-photos-charity-logo-transparent-png.png",
  "https://tse4.mm.bing.net/th?id=OIP.uxyyGB6qWl4f4QlFeDecQwHaFZ&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.DTLivK8j_LEA5ecjTUnbQwHaHk&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.2l9_zeHasE0JyDOS4jkt3wHaHa&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.uxyyGB6qWl4f4QlFeDecQwHaFZ&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.DTLivK8j_LEA5ecjTUnbQwHaHk&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.2l9_zeHasE0JyDOS4jkt3wHaHa&pid=Api&P=0&h=180",
];

const Logos = () => {
  const settings = {
    infinite: true, 
    speed: 1500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed:0, 
    pauseOnHover: true, 
    cssEase: "linear", 
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
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="w-full px-6">
      <Slider {...settings}>
        {logos.map((logo, i) => (
          <div key={i} className="flex justify-center items-center px-4">
            <img
              src={logo}
              className="h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              alt="logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logos;

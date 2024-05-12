'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import client1 from "../../assets/images/startup1.svg";
import client2 from "../../assets/images/startup2.svg";
import client3 from "../../assets/images/startup3.svg";
import client4 from "../../assets/images/startup4.svg";
import client5 from "../../assets/images/startup5.svg";
import client6 from "../../assets/images/startup6.svg";
import client7 from "../../assets/images/client7.svg";
import client8 from "../../assets/images/client8.png";
import client9 from "../../assets/images/client9.webp"
import client10 from "../../assets/images/client10.svg"
import client11 from "../../assets/images/client11.png"
import Image from 'next/image';
import Slider from "react-slick";

const Startups = () => {
  const images = [client1, client2, client3, client4, client5, client6, client7, client8,client9,client10,client11];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
     cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="startups p-0 pb-10">
      <div className="hero-startups">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`startup-img-${index}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Startups;

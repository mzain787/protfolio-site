"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import Testimonial from "../Childcomps/Testimonial";
import HomeComponentsHeading from "../Childcomps/HomeComponentsHeading";
import Hirebtn from "../Childcomps/Hirebtn";
const Testimonials = ({showHeading = true}) => {
  const testimonials = [
    {
      clientReview:
        "Absolutely hit it out of the park. Collaborated seamlessly with me and delivered precisely as per my instructions. I wholeheartedly endorse and highly recommend their services",
      clientProj: "Full Stack - HomeSchool Communities"
    },
    {
      clientReview:
        "Muhammad is the man! Super fast and is a problem solver. Will definitely be using him in the future",
      clientProj:"Full Stack"
    },
    {
      clientReview:
        "Great experience again! Happy to work again in the future",
      clientProj:"New design mockup to existing NextJs website"
    },
    {
      clientReview:
        "Muhammad understood the scope of the project very quickly and got to work immediately. He's a good communicator and listens carefully",
      clientProj:"Reactjs: responsive product suggestion page"
    },
    {
      clientReview:
        "Excellent experience. Muhammad created a professional looking website with minimal instructions, and made all adjustments as requested in a timely manner. Will look to hire again",
      clientProj:"NFT Website Creation (Javascript / React dev required)"
    },
    {
      clientReview:
        "One of the best freelancers I have worked with. He was friendly, helpful, and has been really patient with me (I have no knowledge of web design). I would highly recommend Muhammad if you're looking for a website.",
      clientProj:"Redesign of Site"
    },
    {
      clientReview:
        "Muhammad did a very nice job integrating my current website with netlify CMS.",
      clientProj:"Fully SEO loaded responsive Gatsby.js Site with all CMS Integration"
    },
    {
      clientReview:
        "Implementation went smoothly and as planned. Overall, we liked the collaboration and we will definitely keep in touch and hire this freelancer in the future.",
      clientProj:"Cyscale website v2 - Gatsby and new design from Symbold"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "10px",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: i === settings.currentSlide ? "grey" : "grey",
          borderRadius: "50%",
          margin: "20px 5px",
          cursor: "pointer",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients-talking wrapper basic-padding">
      {showHeading && (
        <div className="text-center">
          <HomeComponentsHeading
            smallheading="👌 PEOPLE SAY ABOUT ME"
            heading="Clients"
            subheading="Talking"
          />
        </div>
      )}
      <div className="client-testimonials flex items-start gap-5">
        <div className="clients-section-left">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.clientProj}
                clientReview={testimonial.clientReview}
                clientProj={testimonial.clientProj}
              />
            ))}
          </Slider>
        </div>
        <div className="clients-section-right">
          <div className="standard border-b-2 border-gray-900 pb-4 mb-4">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">99%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Satisfaction Rate</h3>
          </div>
          <div className="standard border-b-2 border-gray-900 pb-4 mb-4">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">75%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Repeat Order</h3>
          </div>
          <div className="standard border-b-2 border-gray-900 pb-4 mb-8">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">100%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Good Reviews</h3>
          </div>
          <Hirebtn/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

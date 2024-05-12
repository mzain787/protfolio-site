"use client";
import React from "react";
import "../Home/Home.css";
import github from "../../assets/images/github-light.svg";
import upwork from "../../assets/images/up.png";
import man from "../../assets/images/qa22.png";
import AOSAnimation from "@/utils/AosAnimation";
import topRated from "../../assets/images/top-rated.svg"
import iconLink from "../../assets/images/link-arrow.svg"
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <section className="hero-section  wrapper home-page relative">
        <div className="upwork-fiverr flex items-center gap-3 p-12 shake-vertical flex-wrap">
          <p className="text-pruple-200 tracking-wide text-base font-medium flex items-center gap-2">
            <span> <Image
            src={topRated}
            alt="top-rated-star"
            className="w-10 h-10 shake-vertical"
          /></span>
            Top Rated Plus
          </p>
          <div className="flex items-center gap-2">
          <Link
            href=
            "https://www.upwork.com/freelancers/~014b6ad79986046218"
            target="_blank"
            rel="noopener noreferrer"
          >
             <Image
            src={upwork}
            alt="upwork-logo"
            className="w-10 h-10 shake-vertical"
          />
          </Link>   
          <Link
            href=
            "https://github.com/muhammadqamar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            src={github}
            alt="github-link"
            className="w-10 h-10 shake-vertical"
          />
          </Link>
          </div> 
        </div>
        <div className="hero-items">
          <div>
            <div className="hero-content">
              <p className="text-sm font-semibold text-purple-200 mb-10">
                👋 EMPOWERING HUMANITY THROUGH WEB INNOVATION.
              </p>
              <h1 className="hero-heading text-purple-200 mb-12 bounce-top">
              Transforming Visions into{" "}
                <span className="text-orange-300">Reality</span>
              </h1>
              <h2 className="mb-8 text-base font-normal tracking-wide text-purple-200">
              My expertise lies in frontend and full stack development, where I bring projects to life with creativity and precision. Additionally, I have a strong command of Adobe Photoshop and web designing principles, allowing me to create visually stunning and user-friendly interfaces that leave a lasting impression.
              </h2>
              <button className="flex items-center gap-2 bg-orange-300 p-3">
              <Link href="/portfolio" className=' text-black text-base font-medium'>View My Portfolio</Link>
              <Image src={iconLink} alt="icon" width={18} heigth={18}/>
              </button>
            </div>
            <hr className="hr-line"/>
            <div className="brand-achievements flex gap-10 flex-wrap items-center">
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  200+
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Projects Finished
                </p>
              </div>
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  6+
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Years Experience
                </p>
              </div>
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  20k+
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Working Hours
                </p>
              </div>
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  134
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Upwork Jobs
                </p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <AOSAnimation type="fade-right" easing="linear" duration={300}>
              <Image className="w-full" src={man} alt="man-imge" />
            </AOSAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

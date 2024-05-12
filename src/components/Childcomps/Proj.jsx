import React from "react";
import "../Home/Home.css";
import star from "../../assets/images/star.svg";
import AosAnimation from "@/utils/AosAnimation";
import Image from "next/image";
const Proj = ({projectCategory,projectDescription,projectClient,projectImg,projectRating,reverseOrder, showcaseLink}) => {
  return (
    <div className={`our-project flex items-center gap-10 ${reverseOrder ? 'flex-row-reverse' : 'flex-row'}`}>
      
      <div className="project-image">
      <AosAnimation type="flip-up" duration={1000}>
        <Image src={projectImg} alt="project-image" className="w-full"/>
      </AosAnimation>
      </div>
      
      <div className="project-info">
        <div className="project-category mb-6">
          <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            PROJECT CATEGORY
          </h3>
          <h4
            className="text-purple-200 text-base font-semibold tracking-wide
        "
          >
            {projectCategory}
          </h4>
        </div>
        <div className="projectdescription mb-6">
          <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            SHORT DESCRIPTION
          </h3>
          <h4
            className="text-purple-200 text-base font-medium tracking-wide
        "
          >
            {projectDescription}
          </h4>
        </div>
        <div className="project-client">
        <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            CLIENT
          </h3>
          <h4
            className="text-purple-200 text-base font-semibold tracking-wide
        "
          >
            {projectClient}
          </h4>
         
        </div>
        <hr className="mb-5 mt-5 border-gray-700"/>
        <div className="rating flex justify-between">
          <div className="stars flex gap-2 items-center">
            <span className="text-purple-200">({projectRating})</span>
            <div className="star-imgs flex gap-1">
              <Image className="w-4" src={star} alt="star"/>
              <Image className="w-4" src={star} alt="star"/>
              <Image className="w-4" src={star} alt="star"/>
              <Image className="w-4" src={star} alt="star"/>
              <Image className="w-4" src={star} alt="star"/>
            </div>
          </div>
          <span>
            <a href={showcaseLink} target="_blank" className="text-orange-300 text-sm pb-1 border-b border-orange-300 tracking-wide ">Showcase</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Proj;

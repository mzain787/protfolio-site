import React from "react";
import "./PortfolioSection.css";
import Startups from "@/components/Childcomps/Startups";
import HomeComponentsHeading from "@/components/Childcomps/HomeComponentsHeading";
import PortfolioProject from "./PortfolioProject";
import securewiser from "../../assets/images/securewiser.png";
import upcomer from "../../assets/images/upcomer.png"
import eraofwe from "../../assets/images/eraofwe.png"
import popstack from "../../assets/images/popstack.png"
import ocute from "../../assets/images/ocute.png"
import currikistudio from "../../assets/images/currikistudio.png"
import cyscale from "../../assets/images/cyscale.png"
import strum from "../../assets/images/strum.png"
import digitalx from "../../assets/images/digitalx.png"
import fertilityanswers from "../../assets/images/fertilityanswers.png"
import topia from "../../assets/images/topiahq.png"
import polesonearth from "../../assets/images/polesonearth.png"
import banban from "../../assets/images/banban.png"
const PortfolioSection = () => {
  const pprojects = [
    {
      ppImage:currikistudio,
      pprojectName:"Curriki Studio",
      ppLink:"https://dev.currikistudio.org/",
    },
    {
      ppImage:fertilityanswers,
      pprojectName:"Fertility Answers",
      ppLink:"https://fertility.medanswers.com/",
    },
    {
      ppImage:topia,
      pprojectName:"Topia",
      ppLink:"https://topiahq.netlify.app/",
    },
    {
      ppImage:polesonearth,
      pprojectName:"Poles ON Earth",
      ppLink:"https://polesonearth.com/",
    },
    {
      ppImage:cyscale,
      pprojectName:"cyscale",
      ppLink:"https://cyscale.com/",
    },
    {
      ppImage:digitalx,
      pprojectName:"digitalx",
      ppLink:"https://digitalx.netlify.app/",
    },
    {
      ppImage:strum,
      pprojectName:"Strum",
      ppLink:"https://strum-app.netlify.app/",
    },
    {
      ppImage:securewiser,
      pprojectName:"Secure Wiser",
      ppLink:"https://www.securiwiser.com/",
    },
    {
      ppImage:upcomer,
      pprojectName:"Upcomer - esports App",
      ppLink:"https://upcomer.com/",
    },
    {
      ppImage:eraofwe,
      pprojectName:"ERA of WE",
      ppLink:"https://www.eraofwe.com/",
    },
    {
      ppImage:ocute,
      pprojectName:"Secure Wiser",
      ppLink:"https://www.octue.com/",
    },
    {
      ppImage:banban,
      pprojectName:"banbanmedia",
      ppLink:"https://banbanmedia.co/",
    },
    {
      ppImage:popstack,
      pprojectName:"Popstack",
      ppLink:"https://www.popstack.ai/",
    },
  ]
  return (
    <section className="portfolio-section wrapper component-padding">
      <div className="portfolio-heading">
        <h1 className="portfolio-main-heading text-purple-200 font-semibold">
        Explore My Dynamic Full-Stack Portfolio and Experience Innovation Unleashed.
        </h1>
        <p className="portfolio-main-description text-purple-200 text-base font-normal mb-5">
        From elegant front-end designs to robust back-end functionalities, my portfolio showcases a diverse range of web development projects tailored to exceed client expectations. Each project is a testament to my passion for crafting user-centric experiences and harnessing the latest technologies to bring visions to life.
        </p>
        <div className="portfolio-main-buttons">
          <button className="newproject W-40 bg-orange-200 text-black font-semibold p-3 heartbeat">
            <a href="/contact">Let&#39;s Start New Project</a>
          </button>
        </div>
      </div>
      <div className="startups-part mb-14 mt-14">
        <Startups />
      </div>
      <div className="portfolio-projects-heading">
        <HomeComponentsHeading
          smallheading="🔥 AMAZING PORTFOLIO"
          heading="Our Latest"
          subheading="Cool Project"
        />
      </div>
      <div className="our-portfolio-projects w-full">
        {pprojects.map((pproject,index)=>(
        <div className="single-project" key={index}>
        <PortfolioProject
        pprojectName={pproject.pprojectName} 
        ppLink={pproject.ppLink}
        ppImage={pproject.ppImage}/>
        </div>
        ))
        }
      </div>
    </section>
  );
};

export default PortfolioSection;

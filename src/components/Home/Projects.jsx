import React from 'react';
import "./Home.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
import Proj from '../Childcomps/Proj';
import securewiser from "../../assets/images/securewiser.png";
import upcomer from "../../assets/images/upcomer.png"
import eraofwe from "../../assets/images/eraofwe.png"
import popstack from "../../assets/images/popstack.png"
const Projects = () => {
  const projectsData = [
    {
      projectCategory: "Cybersecurity",
      projectDescription: "At Securiwiser, we understand the importance of protecting sensitive information and ensuring the safety of students, teachers and staff in the digital world. That's why we launched a cybersecurity solution aimed at supporting the digital transformation efforts of schools in the UK. We committed to providing the best cybersecurity tools and support to schools.",
      projectClient: "Secure Wiser",
      projectImg: securewiser,
      projectRating:"5.0",
      showcaseLink:"https://www.securiwiser.com/"
    },
    {
      projectCategory: "Esports App",
      projectDescription: "Upcomer, a place for people who revere esports not just for the technical prowess these players display, but for the passion they put into the games you love. We aim to capture the past, present and future of esports with storytellers who are dedicated to going deeper than the surface level esports journalism you see today. Upcomer is not here to just tell you what happened. We're going to tell you why it matters, what’s next and how we got to where we are.",
      projectClient: "Upcomer",
      projectImg: upcomer,
      projectRating:"5.0",
      reverseOrder:true,
      showcaseLink:"https://upcomer.com/"
    },
    {
      projectCategory: "Cofee Supply Chain",
      projectDescription: "Era of We believes in the power of sharing knowledge to help others succeed. It will be a group effort to make the coffee industry a livable career for all. want to secure the future of the coffee industry by building a community who believes in the power of transparency and collaboration.",
      projectClient: "Era of We",
      projectImg: eraofwe,
      projectRating:"5.0",
      showcaseLink:"https://www.eraofwe.com/"
    },
    {
      projectCategory: "Ai Visual Workspace",
      projectDescription: "Search, discover and combine live information from all your apps and services, visually. Uncovers the hidden relationships between information, no matter the source. Creates shared understanding that focuses discussions, highlights commitments and accelerates projects",
      projectClient: "popstack",
      projectImg: popstack,
      projectRating:"5.0",
      reverseOrder:true,
      showcaseLink:"https://www.popstack.ai/"
    }
  ];

  return (
    <>
      <section className="projects-section basic-padding wrapper">
        <div className="heading-part">
          <HomeComponentsHeading smallheading="👌 SHOW CASE" heading="Discover" subheading="How I Work"/>
        </div>
        <div className="projects-content-part">
          {projectsData.map((project) => (
            <div className='mb-20' key={project.id}>
            <Proj
              {...project}
            />
          </div>
          ))}
        </div>
        <div className="portfolio-button text-center">
          <button className='text-xl leading-8 font-mono text-purple-400 mt-10'><Link href="/portfolio">See My Portfolio For More Projects </Link><span><FontAwesomeIcon icon={faArrowAltCircleRight} className='shake-horizontal'/></span></button>
        </div>
      </section>
    </>
  );
}

export default Projects;

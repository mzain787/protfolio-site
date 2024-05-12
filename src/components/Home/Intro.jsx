import React from 'react'
import "./Home.css"
import videobck from "../../assets/images/main-video.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
import Hirebtn from '../Childcomps/Hirebtn';
import Startups from '../Childcomps/Startups';
import AosAnimation from '@/utils/AosAnimation';
import Image from 'next/image';
const Intro = () => {
  return (
    <>
    <section className="basic-padding wrapper">
      <div className="mb-10">
      <Startups/>
      </div>
    <div className="intro-top mb-5 flex justify-start gap-10">
     <HomeComponentsHeading smallheading= "😎 I WANT TO INTROUCE MYSELF" heading="Professional" subheading="Experienced"/>
     <div className="intro-top-right">
        <p className='text-purple-200 text-base font-medium mb-5 tracking-wide'>I have had the privilege to work on a variety of exciting projects that have honed my skills and expanded my horizons in the world of web development. </p>
        <div className='flex items-center gap-5'>
        <Hirebtn/>
        </div>
     </div>
    </div>
    <div className="intro-bottom">
        <div className="intro-video-back-img w-full h-auto">
            <AosAnimation type="zoom-in">
            <Image src={videobck} alt="video-thumbnail"/>
            </AosAnimation>
            <a href="/" className="video-play-iocn w-12 h-12 rounded-full bg-orange-300"><FontAwesomeIcon className='absolute translate-x-4 translate-y-3 text-2xl' icon={faPlay} /></a>
        </div>
    </div>
    </section>
    </> 
  )
}

export default Intro

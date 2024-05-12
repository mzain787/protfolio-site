import React from 'react'
import Hero from "./Hero.jsx"
import Intro from "./Intro.jsx"
import Skills from "./Skills.jsx"
import Journey from './Journey.jsx'
import Testimonials from './Testimonials.jsx'
import Projects from './Projects.jsx'
import "./Home.css"
import AosAnimation from '@/utils/AosAnimation.js'
import Head from 'next/head.js'
const Homepage = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className='bounce-in-top'>
    <Hero/>
    <Intro/>
    <Skills/>
    <Journey/>
    <AosAnimation type='flip-left'>
    <Testimonials/>
    </AosAnimation>
    <Projects/>
    </div> 
    </>
   
  )
}

export default Homepage
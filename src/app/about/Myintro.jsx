import React from 'react'
import "./About.css"
import manImg from "../../assets/images/qa22.png"
import Hirebtn from '@/components/Childcomps/Hirebtn'
import Image from 'next/image'

const Myintro = () => {
  return (
    <section className="myintro">
      <div className="wrapper flex gap-5 items-center about-intro">
      <div className="intro-image">
        <Image src={manImg} alt="man-image" className='w-full'/>
      </div>
      <div className="intro-content pb-3">
        <h2 className='intro-tagline text-purple-200 mb-8 text-focus-in'>I develop not for the you as client but for your users</h2>
        <div className="myname-profession mb-8">
          <h3 className='text-xl tracking-wide mb-2 text-purple-200 font-semibold'>Muhammad Qammar</h3>
          <h4 className='text-orange-300 text-lg font-medium'>Senior Full Stack Developer & Designer</h4>
        </div> 
        <div className="intro-buttons flex gap-3 items-center">
          <Hirebtn/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Myintro
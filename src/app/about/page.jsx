import React from 'react'
import "./About.css"
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import Myintro from './Myintro'
import MyWork from './MyWork'
import Myabilities from './Myabilities'
import AosAnimation from '@/utils/AosAnimation'
export const metadata = {
  title:{
    absolute:"About Me | Muhammad Qammar"
  }
}
const About= () => {
  return (
      <div className='relative'>
      <PageHeading pageHeading="About Me"/>
      <div className='rotate-in-center'>
      <Myintro/>
      <AosAnimation type="zoom-in" duration={500}>
      <MyWork/>
      </AosAnimation>
      <Myabilities/>
      </div>
      </div>
  )
}
export default About
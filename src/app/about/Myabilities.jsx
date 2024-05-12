import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
import React from 'react'
import Hirebtn from '@/components/Childcomps/Hirebtn'
import figma from "../../assets/images/figma.svg"
import vsCode from "../../assets/images/vs-code.svg"
import git from "../../assets/images/git.svg"
import gitHub from "../../assets/images/github-desktop.svg"
import node from "../../assets/images/nodejs.svg"
import redux from "../../assets/images/redux-original.svg"
import aws from "../../assets/images/aws.svg"
import Experties from '@/components/Childcomps/Experties'
import "./About.css"
import Startups from '@/components/Childcomps/Startups'
import AosAnimation from '@/utils/AosAnimation'
import Image from 'next/image'

const tools =[
    {
        toolImage:figma,
        toolName:"Figma"
    },
    {
        toolImage:vsCode,
        toolName:"Vs Code"
    },
    {
        toolImage:git,
        toolName:"Git"
    },
    {
      toolImage:gitHub,
      toolName:"GitHub"
    },
    {
      toolImage:node,
      toolName:"Node"
    },
    {
      toolImage:redux,
      toolName:"Redux"
    },
    {
      toolImage:aws,
      toolName:"AWS"
    },
]
const skillsData = [
    { skillName: 'HTML', percentage: '99%' },
    { skillName: 'CSS / Sass/ Bootstrap/ Tailwind', percentage: '90%' },
    { skillName: 'Web Designing', percentage: '90%' },
    { skillName: 'JavaScript', percentage: '92%' },
    { skillName: 'React.js', percentage: '95%' },
    { skillName: 'Next.js', percentage: '90%' },
    { skillName: 'Node.js', percentage: '95%' },
    { skillName: 'Angular.js', percentage: '80%' },
    { skillName: 'Database', percentage: '90%' },
  ];
const Myabilities = () => {
  return (
    <section className="my-abilities wrapper component-padding">
        <HomeComponentsHeading smallheading="💻 SKILL IN RACE" heading="Measurable" subheading="Ability"/>
        <div className="abilities mb-20 flex gap-10 items-start">
            <div className="abilities-section1">
            <div className="skills-container">
        {skillsData.map((skill, index) => (
          <Experties key={index} skillName={skill.skillName} percentage={skill.percentage} />
        ))}
      </div>
            </div>
            <div className="abilities-section2">
            <h4 className='text-purple-300 text-xl font-medium mb-5'>What App I Use</h4>
            <h3 className='text-purple-200 mb-5 font-semibold text-3xl tracking-wide'>Mastered In Popular Tools For Every Developer</h3>
            <p className='text-purple-300 mb-8 text-base font-normal'>showcases my proficiency in essential developer tools and platforms widely used in the industry. From version control with Git and collaborative coding on GitHub to project management with Jira, I excel in navigating these foundational tools that are indispensable for developers across various domains.</p>
            <div className="skills-on-tools flex flex-wrap gap-10 items-end">
            {tools.map((tool, index) => (
              <div className="single-tool" key={index}>
                <Image src={tool.toolImage} alt="tool" className='w-12 mb-3'/>
                <p className="tool-name text-base font-medium tracking-wider text-purple-200 mb-2">{tool.toolName}</p>
              </div>
            ))}
            <Hirebtn/>
            </div>
            
        </div>
       
        </div>
        <Startups/>
        <AosAnimation type="zoom-in-up" duration={1000}>
        <div className="about-bottom flex flex-col justify-center items-center">
            <h3 className='about-bottom-heading text-center font-semibold text-purple-200 mb-10'>Want to Work Together And Create An Amazing Products With Me?</h3>
            <Hirebtn/>
        </div>  
        </AosAnimation>    
    </section>
  )
}

export default Myabilities
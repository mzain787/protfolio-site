import React from 'react'
import "../Home/Home.css"
const HomeComponentsHeading = ({heading,subheading,smallheading}) => {
  return (
  <div className="components-main-headings mb-10">
    <p className='text-sm font-semibold text-purple-200 tracking-wider mb-5'>{smallheading}</p>
    <h2 className='text-purple-200 intro-heading font-bold components-main-heading'>{heading} <span className='text-orange-300'>{subheading}</span></h2>
 </div>
  )
}

export default HomeComponentsHeading
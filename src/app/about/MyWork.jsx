import React from 'react'
import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
import workImg3 from "../../assets/images/coding-image.jpg"
import workImg2 from "../../assets/images/blog-img1.png"
import workImg4 from "../../assets/images/laptop-man.jpg"
import workImg1 from "../../assets/images/blog-img4.png"
import Image from 'next/image'
const MyWork = () => {
  return (
   <div className="mywork wrapper component-padding">
  <HomeComponentsHeading smallheading="😎 I  WANT TO INTRODUCE MYSELF" heading="It's Not Only About" 
  subheading="The Looks"/>    
    <div className="my-work-images flex">
        <div className="images-section1 flex flex-col">
            <div className="images-section1-top flex items-center">
                <Image src={workImg1} alt="image" className='w-1/2'/>
                <Image src={workImg2} alt="image" className='w-1/2'/>
            </div>
            <div className="images-section1-bottom">
            <Image src={workImg3} alt="image"  className='w-full h-80' />
            </div>
        </div>
        <div className="images-section2">
            <Image src={workImg4} alt="image"  className='w-full h-full'/>
        </div>
    </div>
   </div>
  )
}

export default MyWork
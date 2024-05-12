import React from 'react'
import "./TestimonialsComponent.css"
import customerImg from "../../assets/images/testimonial-image.png"
import customerImg2 from "../../assets/images/man-testimonial2.jpg"
import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
import Image from 'next/image'
const Customers = () => {
  return (
    <div className="customers-section wrapper component-padding">
        <div className="customers-heading">
        <HomeComponentsHeading smallheading="😎 HAPPY CUSTOMERS" heading="Customer Smile Is My Breath" subheading="Of Happiess"/>
        </div>
        <div>
        <h3 className='happy-customer-quote text-xl font-normal text-purple-300 tracking-wide w-7/12 mb-20'>Every sense of happinesss and satisfaction that is born from customers becomes a value that is not comparable to anything. Trust is priceless</h3>
        <p className="overall-ratings text-base text-purple-300 font-bold tracking-wide mb-4">(5.0) ⭐⭐⭐⭐⭐</p>
        <p className='happy-customer-description text-purple-300 text-base font-normal tracking-wide w-6/12 mb-3'>For me, every smile and expression of satisfaction from our customers is invaluable. It&#39;s not just about transactions; it&#39;s about building trust and fostering genuine connections. Each moment of joy they experience is a testament to the quality of our service and the value we provide. Trust, earned through dedication and integrity, is the cornerstone of our business.</p>
        </div>
        <div className="ceo">
            <h3 className="ceo-name text-orange-300 font-medium text-base">Muhammad Qammar</h3>
            <p className='text-sm text-purple-200 tracking-wide font-semibold'>CEO QA Enterprise</p>
        </div>
        <div className="customer-images flex items-end">
            <div className="customer-images-part1">
             <div className='customer-happy-image'>
             <Image src={customerImg} alt="client-image" className='w-full h-full'/>
             </div>
            </div>
            <div className="customer-images-part2">
            <div className='bg-orange-300 customer-happy-image'></div>
            <div className='bg-transparent customer-happy-image'></div>
            </div>
            <div className="customer-images-part3">
            <div className='customer-happy-image'><Image src={customerImg2} alt="client-image" className='w-full h-full'/></div>
            <div className='bg-transparent customer-happy-image'></div>
            <div className='bg-orange-300 customer-happy-image'>
            <Image src={customerImg2} alt="client-image" className='w-full h-full'/>
            </div>
            </div>
            <div className="customer-images-part4">
            <div className='bg-orange-300 customer-happy-image'></div>
            <div className='bg-transparent customer-happy-image'></div>
            <div className='bg-orange-300 customer-happy-image '>
            <Image src={customerImg} alt="client-image" className='w-full h-full'/>    
            </div>        
            <div className='bg-transparent customer-happy-image'></div>
            </div>
            
        </div>      
    </div>
  )
}

export default Customers
import React from 'react'
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import Testimonials from '@/components/Home/Testimonials'
import Customers from './Customers'
import "./TestimonialsComponent.css"
export const metadata = {
  title:{
    absolute:"Testimonials | Muhammad Qammar"
  }
}
const TestimonialsComponent = () => {
  return (
    <>
    <PageHeading pageHeading="Testimonials"/>
    <div className='bounce-in-right'>
    <Testimonials showHeading={false}/>
    <Customers/>
    </div>
    </>
  )
}

export default TestimonialsComponent
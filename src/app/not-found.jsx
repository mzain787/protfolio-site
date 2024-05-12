import React from 'react'
import "./Notfound.css"
import manImage from "../assets/images/notfund-man.png"
import Link from 'next/link'
const NotFound  = () => {
  return (
    <>
    <div className="relative not-found-page pt-40 pb-0 pr-24 pl-24 flex flex-col justify-center items-center wrapper">
     <p className='text-sm font-bold text-purple-200 tracking-widest'>😭 I&#39;M SORRY</p>
      <h2 className='error text-purple-200 mb-5 mt-5 font-bold'>Error <span className='text-orange-300'>404</span></h2>
      <p className='description text-lg font-medium tracking-wide mb-5'>The page you&#39;re looking for may have been deleted, renamed, or temporarily unavailable. Please try another keywords</p>
      <img src={manImage.src} alt="man-image" className='not-found-image w-full'/>
      <button className='w-40 h-10 bg-orange-300 text-black absolute bottom-5'><Link href="/">Back To Home</Link></button>
    </div>
    </>
  )
}
export default NotFound


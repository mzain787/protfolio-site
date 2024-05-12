import React from 'react'
import '../Home/Home.css'
function Testimonial({ clientReview, clientProj}) {
    return (
      <>
        <div className="testimonial mb-10 p-5 mr-5 h-auto">
          <div className="pb-4 mb-5 client-review">
            <p className="text-base text-purple-200 font-normal tracking-wider">{clientReview}</p>
          </div>
          <div className='pr-4 client'>
            <p className='text-sm font-bold text-purple-300 mb-2 tracking-wider'>PROJECT</p>
            <p className="client-name text-orange-300 text-sm font-normal tracking-wider">{clientProj}</p>
          </div>
        </div> 
      </>
    );
  }
export default Testimonial
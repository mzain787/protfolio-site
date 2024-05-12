import React from 'react'
import "./PageHeading.css"
const PageHeading = ({pageHeading}) => {
  return (
   <>
   <div className="page-heading-component text-center">
    <h1 className="page-heading tracking-wide mb-5 font-medium text-purple-300 tracking-in-contract">{pageHeading}</h1>
    <p className="page-subheading font-semibold tracking-wide text-sm text-purple-200">HOME &gt; {pageHeading}</p>
   </div>
   </>
  )
}
export default PageHeading
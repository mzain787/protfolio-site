import React from 'react';
import './MyAccordionComponent.css'; 

const MyAccordionComponent = ({ accordionData }) => {
  return (
    <div className="my-accordion">
      {accordionData.map((item, index) => (
        <details key={index}>
          <summary>
            <span className={`${item.titleClass} text-base text-purple-300 font-medium tracking-wide`}>{item.title}</span>
          </summary>
          <p className={`${item.contentClass} text-sm font-normal text-purple-200 tracking-wide`}>{item.content}</p>
        </details>
      ))}
    </div>
  );
};

export default MyAccordionComponent;

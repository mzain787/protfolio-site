'use client'
import React from 'react';
const Experties = ({ skillName, percentage }) => {
  return (
    <div className="skill mb-4">
      <p className="skill-name text-base font-medium tracking-wide text-purple-200 mb-1">{skillName}</p>
      <div className="progress-bar w-full h-2 bg-black relative">
        <div
          className="progress absolute h-full bg-orange-300"
          style={{ width: `${percentage}`, animation: 'moveRight 10s forwards' }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes moveRight {
          0% {
            width: 0%;
          }
          ${percentage} {
            width: ${percentage};
          }
        }
      `}</style>
    </div>
  );
};

export default Experties;

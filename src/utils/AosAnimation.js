'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ type, duration, easing, children }) => {
  useEffect(() => {
    AOS.init({
      duration: duration || 1000,
      delay: 0,
      easing: easing || 'ease-in-out'
    });
    return () => AOS.refresh();
  }, [duration, easing]);

  return <div data-aos={type || 'fade-up'}>{children}</div>;
};

export default AosAnimation;

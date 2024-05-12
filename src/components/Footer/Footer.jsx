"use client";
import React, { useState, useEffect } from "react";
import "./Footer.css";
import MyForm from "../Childcomps/MyForm/MyForm";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    // Event listener for scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the value (e.g., 200) to determine when to show the button
      setShowTopButton(scrollY > 200);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="footer-top flex items-center gap-10 mb-14">
          <div className="footer-content">
            <h3 className="text-purple-200 font-semibold text-base tracking-widest mb-10">
              😎 INTERESTED?
            </h3>
            <h2 className="footer-heading text-purple-200 font-bold mb-10">
              Let&#39;s <span className="text-orange-300">Connect!</span>
            </h2>
            <p className="text-purple-200 text-base font-normal tracking-wider mb-10">
              I help people and team worldwide. I can help you build your next
              digital product so fell to contact me. Sooner you write is better
              for both of us.
            </p>
            <div className="footer-contact-details text-purple-200 text-sm font-medium tracking-wider">
              <p className="email mb-2">
                <FontAwesomeIcon
                  className="text-orange-300 mr-2"
                  icon={faEnvelope}
                />
                <a href="mailto:muhammadqamar111@gmail.com">
                   muhammadqamar111@gmail.com
                </a>
              </p>
              <p className="ph-no">
                <FontAwesomeIcon className="text-orange-300 mr-2" icon={faPhone} />
                <a href="tel:+923464198330">+923464198330</a>
              </p>
            </div>
          </div>
          <div className="footer-form">
            <MyForm />
          </div>
        </div>
        <div className="footer-bottom flex justify-between items-center">
          <div className="footer-bottom-left flex gap-4 items-center">
            <a href="/">
              <Image src={logo} alt="logo-img" className="h-12 w-32" />
            </a>
            <p className="copyright text-purple-400">
              © 2024 {" "}
              <span className="text-orange-300">QA Enterprise</span>
            </p>
          </div>
          <div className="footer-bottom-right">
            <div className="flex items-center">
              <Link href="https://www.youtube.com/@muhammadqamar7133" target="_blank" className="text-white mx-2">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-xl text-purple-200 hover:text-orange-300"
                />
              </Link>
              <Link href="https://www.instagram.com/muhammad.qammar/?hl=en" target="_blank" className="text-white mx-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl text-purple-200 hover:text-orange-300"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-qamar-915b75125/" target="_blank" className="text-white mx-2">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-purple-200 hover:text-orange-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`top-button p-4 fixed bg-gray-800 text-purple-400 tracking-wide font-bold left-3 bottom-4 ${
          showTopButton ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
      >
        Top
      </button>
    </footer>
  );
};

export default Footer;

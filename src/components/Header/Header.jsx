// Header.js
"use client";
import "./Header.css";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  // faCaretDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { href: "/", name: "HOMEPAGE" },
    { href: "/about", name: "ABOUT ME" },
    { href: "/portfolio", name: "PORTFOLIO" },
    { href: "/testimonials", name: "TESTIMONIALS" },
  ];
  // const pages = [
  //   { href: "/contact", name: "Contact ME" },
  //   { href: "/portfolio", name: "Portfolio" },
  //   { href: "/testimonials", name: "Testimonials" }
  // ];
  const pathname = usePathname();

  return (
    <>
      <header
        className={`header flex justify-between items-center fixed w-full z-30 ${
          scrolled ? "back-color" : ""
        }`}
      >
        <div className="flex items-center">
          <a href="/" className="mr-8 pl-4 w-32 cursor-pointer text-orange-200 text-3xl font-extrabold">
            {/* <Image
              src={logo}
              alt="image"
              className="h-12 w-32 mr-8 pl-4 cursor-pointer"
            /> */}
            MQ
          </a>
          <nav
            ref={menuRef}
            className={`flex items-center nav-items scale-in-ver-top scale-out-top ${
              menuOpen ? "open" : "close"
            }`}
          >
            <div className="nav-options">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`ispadding font-bold tracking-widest text-sm mr-5 hover:text-orange-300 ${
                      isActive ? "text-orange-300" : "text-purple-200"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            {/* <div className="dropdown pages mr-5">
              <div className="dropbtn font-bold tracking-widest text-sm cursor-pointer text-purple-200  hover:text-orange-300 ispadding">
                PAGES <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="dropdown-content">
                <div className="space"></div>
                {pages.map((page) => {
                  const isActive = pathname === page.href;
                  return (
                    <Link
                      key={page.name}
                      href={page.href}
                      className={`dropdown-options font-bold tracking-widest text-sm hover:text-orange-300 ${
                        isActive ? "text-orange-300" : "text-purple-200"
                      }`}
                      onClick={closeMenu}
                    >
                      {page.name}
                    </Link>
                  );
                })}
              </div>
            </div> */}
          </nav>
        </div>

        {/* Right side with social media icons */}
        <div className="flex items-center social-media">
          <Link
            href="https://www.linkedin.com/in/muhammad-qamar-915b75125/"
            target="_blank"
            className="text-white mx-2 tooltip"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
            <span className="tooltiptext">Linkedin</span>
          </Link>
          <Link
            href="https://www.youtube.com/@muhammadqamar7133"
            target="_blank"
            className="text-white mx-2 tooltip"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
            <span className="tooltiptext">Youtube</span>
          </Link>
          <Link
            href="https://www.instagram.com/muhammad.qammar/?hl=en"
            target="_blank"
            className="text-white mx-2 tooltip"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
            <span className="tooltiptext">Instagram</span>
          </Link>
        </div>

        {/* hamburger */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon
              className="text-purple-200 text-2xl"
              icon={faTimes}
            />
          ) : (
            <FontAwesomeIcon
              className="text-purple-200 text-2xl"
              icon={faBars}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

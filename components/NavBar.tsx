'use client';

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (navRef.current) {
      navObserver.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        navObserver.unobserve(navRef.current);
      }
    };
  }, [navRef]);

  const navSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-20px)",
    width: "100vw",
    config: {
      tension: 250, // Adjust the tension for the desired speed
      friction: 120, // Adjust the friction for the desired speed
    },
  });

  return (
    <animated.nav
      className="bg-white fixed backdrop-blur-[10px] z-50 backdrop-filter bg-opacity-15 md:p-6 p-4 w-full top-0"
      style={navSpring}
      ref={navRef}
    >
      <section className="container mx-auto">
        <div className="flex items-center md:justify-between gap-y-[16px] flex-col md:flex-row font-medium text-xl">
          <div className="text-white flex flex-row justify-center font-medium text-xl">
            <div className='md:w-[60px] md:h-[60px] w-[40px] h-[40px]'>
              <Image 
              src={'/logo/juicelab2.webp'}
              alt={'Logo'}
              width={100}
              height={100}
              draggable={false}/>
            </div>
            <p className='md:leading-[60px] leading-[40px] px-4 text-black text-2xl'>Juice Lab & Co</p>
          </div>

          <div className="flex md:space-x-12 space-x-8">
            <Link
              href="/"
              className="transform duration-500 hover:scale-[1.15] ease" hidden
            >
              Home
            </Link>

            <Link
              
              href="about"
              className="transform duration-500 hover:scale-[1.15] ease"
            >
              About
            </Link>

            <Link
              href="portfolio"
              className="transform duration-500 hover:scale-[1.15] ease"
            >
              Menu
            </Link>

            <Link
              href="assets"
              className="transform duration-500 hover:scale-[1.15] ease"
            >
              Items
            </Link>

            <Link
              hidden
              href="https://inxta.dashnyam.com"
              className="transform duration-500 hover:scale-[1.15] ease"
            >
              Inxta
            </Link>
          </div>
        </div>
      </section>
    </animated.nav>
  );
};

export default NavBar;
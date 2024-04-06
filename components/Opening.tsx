'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Header: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ['Acai', 'Juices', 'Desserts', 'Drinks', 'Fruits'];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = ['/testphoto1/a1.png', '/testphoto1/a2.png', '/testphoto1/a3.png', '/testphoto1/a4.png', '/testphoto1/a5.png']; // Add your photo URLs here
  const slideshowInterval = 3000; // Change photo every 5 seconds

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change title every 3 seconds

    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, slideshowInterval);

    return () => {
      clearInterval(titleInterval);
      clearInterval(photoInterval);
    };
  }, []);

  return (
<div className='flex justify-center'>
    <div className="bg-white backdrop-blur-lg w-[1100px] rounded-[30px] overflow-hidden shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] bg-opacity-35 my-20 md:mx-0 mx-6 md:py-20 py-8 mt-[200px] flex md:flex-row flex-col justify-center items-center gap-x-8">
      <div className=" overflow-hidden">
        <div className="relative md:w-[500px] md:h-[600px] w-[300px] pb-[75%] overflow-y-hidden">
          <Image
            className="absolute inset-0 w-full h-full object-contain"
            src={photos[currentPhotoIndex]}
            alt="Cafe Showcase"
            width={700}
            height={700}
            draggable={false}
          />
        </div>
      </div>

      <div className="w-[300px] md:ml-4">
        <h2 className="md:text-4xl text-3xl text-center font-bold mb-4">
          We Make {titles[currentTitleIndex]}
        </h2>
      </div>
    </div>
</div>
  );
};

export default Header;

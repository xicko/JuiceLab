import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <div className='mt-[150px]'>

        <div className='w-[300px] h-[300px]'>
            <Image 
            src={'/logo/juicelab1.webp'}
            alt={'Logo'}
            width={700}
            height={700}
            draggable={false}/>
        </div>

        <h1 className='text-4xl font-semibold'>Juice Lab & Co</h1>

    </div>
  )
}

export default Hero
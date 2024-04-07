import React from 'react';
import Image from "next/image";

const Menu = () => {
  return (
    <div className='flex justify-center'>
        <div className="bg-white backdrop-blur-lg w-[1100px] rounded-[30px] overflow-hidden shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] bg-opacity-35 md:mx-0 mx-6 flex md:flex-row flex-col justify-start items-center md:gap-x-12">
            <div className='flex flex-row'>
                <div className='w-1/3 grid grid-flow-row grid-rows-3 grid-cols-1 gap-8 bg-yellow-900 bg-opacity-30 backdrop-blur-md md:p-8 p-2 pt-8 md:px-16'>
                    <div className='md:w-fit'>
                        <Image 
                        src={'/testphoto3/standardacai.webp'}
                        alt={'Standard Acai'}
                        width={800}
                        height={800}/>
                    </div>

                    <div className=''>
                        <Image 
                        src={'/testphoto3/schnitzelwrap.webp'}
                        alt={'Schnitzel Wrap'}
                        width={800}
                        height={800}/>
                    </div>

                    <div className=''>
                        <Image 
                        src={'/testphoto3/bananashake.webp'}
                        alt={'Banana Boom Protein Shake'}
                        width={800}
                        height={800}/>
                    </div>
                </div>

                <div className='w-2/3 grid grid-flow-row grid-rows-3 grid-cols-1 gap-8 md:p-12 p-8 md:pr-[100px]'>
                    <div className='space-y-4'>
                        <p className='md:text-3xl text-xl w-full font-semibold justify-between flex space-x-2'><span>Standard Acai</span><span>$20</span></p>
                        <p className='md:text-xl  text-sm'>Organic acai, gluten-free granola, coconut flakes, banana and strawberries.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='md:text-3xl text-xl w-full font-semibold justify-between flex space-x-2'><span>Schnitzel Wrap</span><span>$17</span></p>
                        <p className='md:text-xl  text-sm'>Organic acai, gluten-free granola, coconut flakes, banana and strawberries.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='md:text-3xl text-xl font-semibold justify-between flex space-x-2'><span>Banana Boom Protein Shake</span><span>$13</span></p>
                        <p className='md:text-xl text-sm'>Low-fat milk, vanilla protein powder, banana, honey, vanilla yoghurt and ice.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
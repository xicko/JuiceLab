import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <div className='flex justify-center'>
    <div className="bg-white backdrop-blur-lg w-[1100px] rounded-[30px] overflow-hidden shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] bg-opacity-35 my-20 md:mx-0 mx-6 flex md:flex-row flex-col justify-start items-center md:gap-x-12">
      <div className="overflow-hidden h-fit">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13243.791826048771!2d151.0387597!3d-33.916739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd8377d24b15%3A0xe287d4079e2d04cd!2sJuice%20Lab%20and%20Co.!5e0!3m2!1sen!2sau!4v1712394180189!5m2!1sen!2sau" className='md:w-[600px] md:h-[450px] w-screen md:px-0 px-6 h-[350px] ' frameBorder="0" style={{ border: 'none' }} allowFullScreen={false} loading="lazy" ></iframe>
      </div>

      <div className="max-w-[400px] w-fit space-y-4 mx-0 md:px-0 px-10 md:py-0 pb-12 pt-8">
        <p className="md:text-4xl text-3xl font-bold">
            Location & Hours
        </p>

        <p className='md:text-xl text-md'>
        K1002, Level/2 North Terrace, Bankstown, New South Wales, Australia
        </p>

        <div className='flex flex-row md:text-xl text-md gap-x-4'>
            <ul className='text-right w-[70px] md:-ml-[24px] -ml-[34px]'>
              <li>Mon:</li>
              <li>Tue:</li>
              <li>Wed:</li>
              <li>Thu:</li>
              <li>Fri:</li>
              <li>Sat:</li>
              <li>Sun:</li>
            </ul>

            <ul className='text-left'>
              <li>9 am - 9 pm</li>
              <li>9 am - 9 pm</li>
              <li>9 am - 9 pm</li>
              <li>9 am - 9 pm</li>
              <li>9 am - 9 pm</li>
              <li>9 am - 8 pm</li>
              <li>10 am - 8pm</li>
            </ul>
        </div>

        <div className='md:pb-3'>
          <Link className=' px-3 py-1.5 border-zinc-700 border-2 bg-zinc-700 hover:bg-zinc-100 rounded-md text-white text-lg hover:text-black ease duration-150 transition' href="https://maps.app.goo.gl/LLqNwNWiBK9oMbfd7" target="_blank">Open on Google Maps ↗</Link>
        </div>
      </div>
    </div>
</div>
  )
}

export default Info
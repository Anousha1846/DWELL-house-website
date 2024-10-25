import React from 'react';
import Image from 'next/image';
import banner from '../../public/banner.jpg';

const FindHouse = () => {
  return (
    <div >
       <div className=" min-h-[700px] w-[100%] text-[inter] pt-6 md:pt-20
       bg-gradient-to-r from-pink-50 via-gray-300 to-orange-50 ...">
      <div className="min-h-[450px]  max-w-[1100px] mx-auto grid md:grid-cols-[40%_60%] bg-slate-200 rounded-xl">
        
      <section className="md-px-8 p-2 ">
          <Image src={banner} height={9} width={500} alt="figma" className="p-2 md:my-24 
          md:h-[340px] sm:h-[500px] w-[100%] sm:mt-8 rounded-xl " />
        </section>

        <section className="flex flex-col gap-6 md:py-36 px-8 sm:py-20  py-16">
          <h1 className="font-black text-3xl">We Help You To Find Your Dream Home</h1>
          <p className="font-normal text-md text-gray-700">
          From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
          </p>
          <div className="flex justify-center px-4 gap-8">
            <div >
              <h1 className="font-black text-4xl text-slate-600 text-center "> 8k+</h1>
              <h5>House Available</h5>
            </div>
            <div >
            <h1 className="font-black text-4xl text-center  text-slate-600">6k+</h1>
            <h5>House Sold</h5>
            </div>
            <div>
            <h1 className="font-black text-4xl text-center  text-slate-600">3k+</h1>
            <h5>Trusted Agents</h5>
            </div>
          </div>

        </section>
      </div>
    </div>
    </div>
  )
}


export default FindHouse

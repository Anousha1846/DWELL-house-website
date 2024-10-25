import React from "react";
import Image from "next/image";
import about from "../../public/about.jpg";

const AboutMain = () => {
  return (
    <main className="grid lg:grid-cols-[10%_80%_10%] lg:py-20 py-10 bg-slate-200 grid-cols-[3%_94%_3%] h-[100%] w-[100%]">
      <section className=""></section>
      <section >
          <div className=" grid lg:grid-cols-[40%_60%] rounded-xl">
            
            <div className="md-px-8  ">
              
              <Image
                src={about}
                height={9}
                width={500}
                alt="figma"
                className="sm:px- md:my-2 md:pt-8 lg:pt-2 md:h-[400px] sm:h-[500px] sm:w-[100%] sm:mt-8 h-full w-full p-2 rounded-xl "
              />
              
            </div>
            
            <div className="flex flex-col gap-3 sm:pt-2 text-left md:py-8 px-2 lg:py-16 ">
              <h1 className="font-bold text-3xl">WHO ARE WE</h1>
              
              <p className="font-normal md:text-lg text-md text-gray-700">
                DWELL is a team of passionate real estate professionals
                dedicated to helping you find your dream home. With years of
                experience in the industry, we understand that buying a home is
                one of the biggest decisions of your life, and we’re here to
                guide you every step of the way. 
              </p>
              
              <p className="font-normal text-md  md:text-lg  text-gray-700">
             Our mission is to create homes that are not just spaces to
                live in but places to thrive, offering a perfect blend of
                functionality, style, and community. Whether you’re looking for
                a cozy family home or a spacious modern retreat, we have
                something to fit every lifestyle. 
              </p>
              
            </div>
          </div>
      </section>
      <section className=""></section>
    </main>
  );
};

export default AboutMain;

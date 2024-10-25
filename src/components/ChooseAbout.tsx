import React from "react";
import Image from "next/image";

const ChooseAbout = () => {
  return (
    <div className=" bg-slate-200 py-20">
      <div className="py-6">
        <h1 className="text-center font-bold text-4xl ">Why Choose Us</h1>
        <p className="text-center text-lg pt-4 text-slate-600">
        Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </p>
      </div>
        <main className="grid lg:grid-cols-[10%_80%_10%] grid-cols-[3%_94%_3%] h-[100%] w-[100%] py-4 ">
        <section></section>
         <section>
        <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1  rounded-lg">
          <div>
            <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100  hover:border-gray-800  ">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a2 2 0 1 1 2 2h-4a2 2 0 1 1 2-2zm3.732 2A4 4 0 1 0 6.268 4H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a2 2 0 0 0-2-2h-2.268zM3 11v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5H3z" />
              </svg>

              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Guidance Of The Expert
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Benefit from our team's seasoned expertise for a smooth buying
                experience
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg p-6 mx-auto bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 hover:border-gray-800">
              <svg
                className="w-7 h-7 text-4xl text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-3.33 0-6 1.34-6 3v2h12v-2c0-1.66-2.67-3-6-3z" />
              </svg>

              
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Personalized Service
                </h5>
             
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Our services adapt to your unique needs, making your journey
                stress-free
              </p>
            </div>
          </div>
          <div className="">
            <div className="max-w-lg p-6 mx-auto bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 hover:border-gray-800">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 1.414-.586l4-4A2 2 0 0 0 18 12V4a2 2 0 0 0-2-2H4zm10 8h3.293L14 13.293V10zm-2 3a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1zm-1-3a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1z" />
              </svg>

              
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Transparent Process
                </h5>
          
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Stay informed with our clear and honest approach to buying your
                home
              </p>
            </div>
          </div>
          <div className="">
            <div className="max-w-lg p-6 mx-auto bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 hover:border-gray-800">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.5 1a1.5 1.5 0 0 1 1.5 1.5v7a.5.5 0 1 0 1 0v-6a1.5 1.5 0 0 1 3 0v6.5a.5.5 0 1 0 1 0v-4a1.5 1.5 0 0 1 3 0V12a4.5 4.5 0 0 1-4.5 4.5H9a2 2 0 0 1-1.414-.586l-4-4A2 2 0 0 1 3 10.414V6.5A1.5 1.5 0 0 1 4.5 5h.25A1.5 1.5 0 0 1 7.5 6.5v-5A1.5 1.5 0 0 1 7.5 1Z" />
              </svg>

             
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Exceptional Support
                </h5>
            
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Providing peace of mind with our responsive and attentive
                customer service
              </p>
            </div>
          </div>
        </div>
      </section>
      <section ></section>
    </main>
    </div>
    
  );
};

export default ChooseAbout;

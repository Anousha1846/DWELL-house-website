import React from "react";
import BannerAgents from "./BannerAgents";
import Image from "next/image";
import oneAgents from "../../public/oneAgents.avif"
import twoAgents from "../../public/twoAgents.jpg"
import threeAgents from "../../public/threeAgents.jpg"
import fourAgents from "../../public/fourAgents.jpeg"
import fiveAgents from "../../public/fiveAgents.jpg"
import sixAgents from "../../public/sixAgents.jpg"
import sevenAgents from "../../public/sevenAgents.jpg"
import eightAgents from "../../public/eightAgents.jpg"




const Agents = () => {
  return (
    <div>
      <div className=" bg-slate-200 py-4">
        <div className="py-6">
          <h1 className="text-center font-bold text-4xl ">OUR AGENTS</h1>
          <p className="text-center text-lg pt-4 p-2 text-slate-600">
            Elevating Your Home Buying Experience with Expertise, Integrity, and
            Unmatched Personalized Service
          </p>
        </div>
        <main className=" grid lg:grid-cols-[10%_80%_10%] grid-cols-[3%_94%_3%] h-[100%] w-[100%] py-12 pb-20 ">
          <section></section>
          <section>
            <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1     rounded-lg">
              {/* one */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col items-center p-10 overflow-hidden">
              <Image
                src={oneAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />              
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* two */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col items-center overflow-hidden p-10">
                  <Image
                src={twoAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />   
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* three */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col items-center overflow-hidden p-10">
                  <Image
                src={threeAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />   
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* four */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col items-center overflow-hidden p-10">
                  <Image
                src={fourAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />   
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </main>
        <BannerAgents/>

        <main className="grid lg:grid-cols-[10%_80%_10%] grid-cols-[3%_94%_3%] h-[100%] w-[100%] py-12 pt-20 mx-auto ">
          <section></section>
          <section>
            <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1     rounded-lg">
              {/* one */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col overflow-hidden items-center p-10">
                  <Image
                src={fiveAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />  
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* two */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="overflow-hidden flex flex-col items-center p-10">
                  <Image
                src={sixAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />  
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* three */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col items-center overflow-hidden p-10">
                  <Image
                src={sevenAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />  
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* four */}
              <div>
                <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:bg-sky-100  hover:border-gray-800  ">
                  <div className="flex flex-col overflow-hidden items-center p-10">
                  <Image
                src={eightAgents}
                height={9}
                width={500}
                alt="figma"
                className="w-24 h-24 mb-3 rounded-full shadow-lg hover:scale-110 duration-200 "
                />  
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                    <span className="text-xl text-gray-900 dark:text-gray-400">
                      Experience: 5 yr
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-black "
                      >
                        Visit Agent Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default Agents;

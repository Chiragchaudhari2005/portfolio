import React from "react";
import checkpoint from "../assets/checkpoint.png"
import checkpoint2 from "../assets/checkpoint2.png"
import checkpoint3 from "../assets/checkpoint3.png"

function TimeLine() {
  
    return (
    <div className="mt-10 ml-3 mr-3 max-w-7xl flex justify-center items-center">
    <ol className="items-center sm:flex">
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img src={checkpoint3}/>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 md: w-84 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            St Joseph's High School
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2010-2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Degree: SSC <br/>
            Percentage: 74.40%
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img src={checkpoint3}/>
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 md: w-84 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Saraswati Institute of Technology
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Degree: Diploma <br/>
            Percentage: 91.49%
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-gray-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <img src={checkpoint3}/>
        </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 md: w-84 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Vidyalankar Institute of Technology 
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025-2027
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Degree: BTech <br/>
            Persuing
          </p>
        </div>
      </li>
    </ol>
    </div>
  );
}

export default TimeLine;
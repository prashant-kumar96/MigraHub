import { countriesData } from "@/utils/flagsComponent";
import Image from "next/image";
import React, { useState } from "react";
import StepsModal from "./StepsModal";

const FlagsComponent = () => {
    const [showStepsModal, setShouldShowStepsModal] = useState(false)

    const handleReadMore = () => {
        setShouldShowStepsModal(true)
    }
  return (
    <>
    <p className="text-2xl mt-5 text-center"> Travel to your dream Destination</p>
    <div className="flex gap-4 justify-around flex-wrap">
        {countriesData.map(country=>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="min-h-40 min-w-full relative p-2">
          <Image
            className="rounded-t-lg p-4"
            src={`/assets/flagsImages/${country.flag}.png`}
            alt={country.flag}
            // width={500}
            // height={300}
            fill={true}
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {country.name}
            </h5>
          </a>
         
          <button
            href="#"
            onClick={handleReadMore}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>)}
      {showStepsModal && <StepsModal setShouldStartjourneyShow={setShouldShowStepsModal}/>}
    </div>
    </>
  )
}

export default FlagsComponent;

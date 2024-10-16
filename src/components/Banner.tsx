import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import StepsModal from "./StepsModal";

const Banner = () => {
  const [citizenshipCountry, setCitizenshipCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [shouldStartjourneyShow, setShouldStartjourneyShow] = useState(false)
  const labelCountries = ["IN","fi", "GB", "IE", "IT", "NL", "SE", "CA"]
  const [labelCountriesData, setLabelCountriesData] = useState(labelCountries)

  const onSelectCitizenShipCountry = (code:string) => {
    setCitizenshipCountry(code)
    const index = labelCountries.indexOf(code)
    // console.log(index)
    // if(index>-1){
    //   labelCountries.splice(index,1)
    //   console.log(labelCountries)
    //   setLabelCountriesData(labelCountries)
    // }
  }

  const onSelectDestinationCountry = (code:string) => {
    setDestinationCountry(code);
    // const index = labelCountries.indexOf(code)
    // if(index>-1){
    //   labelCountries.splice(index,1)
    //   setLabelCountriesData(labelCountries)
    // }
  }
  
  const handleStartjourney = () =>{
    setShouldStartjourneyShow(true)
  }
  console.log("citizenshipCountry", citizenshipCountry);

  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Read more about our app
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          </a>
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              From which country are you starting and going to which country
            </h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Citizenship From
                </label>
                <ReactFlagsSelect
                  selected={citizenshipCountry}
                  onSelect={onSelectCitizenShipCountry}
                   className="bg-white text-black"
                  countries={labelCountriesData}
                  searchable
                  /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                />
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Destination to
                </label>
                <ReactFlagsSelect
                  selected={destinationCountry}
                  onSelect={onSelectDestinationCountry}
                   className="bg-white text-black"
                  countries={labelCountriesData}
                  searchable
                  /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
                />
              </div>

              <button               
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleStartjourney}
              >
                Start your journey
              </button>
              {/* <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{" "}
                <a className="text-blue-600 hover:underline dark:text-blue-500">
                  Create account
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      {shouldStartjourneyShow && <StepsModal setShouldStartjourneyShow={setShouldStartjourneyShow} citizenshipCountry={citizenshipCountry} setCitizenshipCountry={setCitizenshipCountry} onSelectCitizenShipCountry={onSelectCitizenShipCountry}/>}
    </section>
  );
};

export default Banner;
